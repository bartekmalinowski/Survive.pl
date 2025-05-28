using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SampleAzureApi.Data;
using SampleAzureApi.Models;

namespace SampleAzureApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ThreatsController : ControllerBase
    {
        private readonly AppDbContext _context;

        public ThreatsController(AppDbContext context)
        {
            _context = context;
        }

        //[HttpOptions]
        //public IActionResult Options()
        //{
        //    Response.Headers.Add("Allow", "GET,POST,PUT,DELETE,OPTIONS");
        //    return Ok();
        //}

        
        // GET: api/threats
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Threats>>> GetThreads()
        {
            return await _context.Threats.ToListAsync();
            
        }

        // GET: api/threats/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Threats>> GetThread(int id)
        {
            var thread = await _context.Threats.FindAsync(id);

            if (thread == null)
            {
                return NotFound();
            }

            return thread;
        }

        // POST: api/threads
        [HttpPost]
        public async Task<ActionResult<Threats>> PostThread(Threats threat)
        {
            threat.CreatedAt = DateTime.UtcNow;
            threat.UpdatedAt = DateTime.UtcNow;
            _context.Threats.Add(threat);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetThread), new { id = threat.ThreatID }, threat);
        }

        // PUT: api/threats/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutThread(int id, Threats threat)
        {
            if (id != threat.ThreatID)
            {
                return BadRequest();
            }

            var existingThreat = await _context.Threats.FindAsync(id);
            if (existingThreat == null)
            {
                return NotFound();
            }

            existingThreat.RegionName = threat.RegionName;
            existingThreat.UserId = threat.UserId;
            existingThreat.ThreatType = threat.ThreatType;
            existingThreat.DangerLevel = threat.DangerLevel;
            existingThreat.TrustLevel = threat.TrustLevel;
            existingThreat.Description = threat.Description;
            //existingThreat.Files = threat.Files;
            existingThreat.Status = threat.Status;
            existingThreat.UpdatedAt = DateTime.UtcNow;

            await _context.SaveChangesAsync();

            return NoContent();
        }

        // DELETE: api/threads/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteThread(int id)
        {
            var threat = await _context.Threats.FindAsync(id);
            if (threat == null)
            {
                return NotFound();
            }

            _context.Threats.Remove(threat);
            await _context.SaveChangesAsync();

            return NoContent();
        }
    }
}