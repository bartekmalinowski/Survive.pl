namespace ernest_monitor_api.Models
{
    public class Users
    {
        public int UserId { get; set; }
        public string Username { get; set; }
        public string PasswordHash { get; set; }
        public string Email { get; set; }
        public string Role { get; set; }
        public bool IsBlocked { get; set; }
        public int? TrustLevel { get; set; }
        public DateTime CreatedAt { get; set; }
        public DateTime UpdatedAt { get; set; }

    }
}
