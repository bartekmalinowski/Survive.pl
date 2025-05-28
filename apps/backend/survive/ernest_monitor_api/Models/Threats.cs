using System.ComponentModel.DataAnnotations;

namespace SampleAzureApi.Models
{
    public class Threats
    {
        [Key]
        public int ThreatID { get; set; }
        public string RegionName { get; set; }
        public int UserId { get; set; }
        public string ThreatType { get; set; }
        public int? DangerLevel { get; set; }
        public int? TrustLevel { get; set; }
        public string? Description { get; set; }
        //public string? Files { get; set; } // Zmienione na string (varchar w bazie danych)
        public string? Status { get; set; }
        public DateTime? CreatedAt { get; set; }
        public DateTime? UpdatedAt { get; set; }
        public double? Longitude { get; set; } // Dodane
        public double? Latitude { get; set; } // Dodane
        public int? PhoneNumber { get; set; } // Dodane
    }
}