namespace ernest_monitor_api.Models
{
    public class Resource
    {
        public int ResourceId { get; set; }
        public string ResourceType { get; set; }
        public string Description { get; set; }
        public string RegionName { get; set; }
        public int? TrustLevel { get; set; }
        public string SourceName { get; set; }
        public string SourceContact { get; set; }
        public string Status { get; set; }
        public DateTime? CreatedAt { get; set; }
        public DateTime? UpdatedAt { get; set; }
        public double? Longitude { get; set; } // Dodane
        public double? Latitude { get; set; } // Dodane
        public int? Range { get; set; } // Dodane
        public int? PhoneNumber { get; set; } // Dodane
    }
}