using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using BCrypt.Net;
using ernest_monitor_api.Models;
using SampleAzureApi.Data;
using ernest_monitor_api.DTOs;

[Route("api/[controller]")]
[ApiController]
public class AuthController : ControllerBase
{
    private readonly AppDbContext _context;

    public AuthController(AppDbContext context)
    {
        _context = context;
    }

    // Rejestracja
    [HttpPost("register")]
    public async Task<IActionResult> Register(RegisterDto dto)
    {
        // Sprawdź, czy użytkownik już istnieje
        if (await _context.Users.AnyAsync(u => u.Username == dto.Username))
        {
            return BadRequest("Użytkownik o podanej nazwie już istnieje.");
        }

        if (await _context.Users.AnyAsync(u => u.Email == dto.Email))
        {
            return BadRequest("Użytkownik z podanym adresem email już istnieje.");
        }

        // Haszowanie hasła
        string hashedPassword = BCrypt.Net.BCrypt.HashPassword(dto.Password);

        // Tworzenie użytkownika
        var user = new Users
        {
            Username = dto.Username,
            PasswordHash = hashedPassword,
            Email = dto.Email,
            Role = "User", // Domyślna rola
            IsBlocked = false,
            TrustLevel = null,
            CreatedAt = DateTime.UtcNow,
            UpdatedAt = DateTime.UtcNow
        };

        _context.Users.Add(user);
        await _context.SaveChangesAsync();

        return Ok("Rejestracja zakończona sukcesem.");
    }

    // Logowanie
    [HttpPost("login")]
    public async Task<IActionResult> Login(LoginDto dto)
    {
        // Znalezienie użytkownika
        var user = await _context.Users.FirstOrDefaultAsync(u => u.Username == dto.Username);
        if (user == null)
        {
            return Unauthorized("Nieprawidłowa nazwa użytkownika lub hasło.");
        }

        // Weryfikacja hasła
        if (!BCrypt.Net.BCrypt.Verify(dto.Password, user.PasswordHash))
        {
            return Unauthorized("Nieprawidłowa nazwa użytkownika lub hasło.");
        }

        // Sprawdzenie, czy użytkownik jest zablokowany
        if (user.IsBlocked)
        {
            return Forbid("Konto użytkownika zostało zablokowane.");
        }

        // Zwrócenie odpowiedzi
        return Ok(new
        {
            message = "Logowanie zakończone sukcesem.",
            user = new
            {
                user.UserId,
                user.Username,
                user.Email,
                user.Role,
                user.TrustLevel
            }
        });
    }
}
