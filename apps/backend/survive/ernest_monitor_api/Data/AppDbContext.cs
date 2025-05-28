// Data/AppDbContext.cs
using ernest_monitor_api.Models;
using Microsoft.EntityFrameworkCore;
using SampleAzureApi.Models;

namespace SampleAzureApi.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }

        public DbSet<Threats> Threats { get; set; }
        public DbSet<Users> Users { get; set; }
        public DbSet<Resource> Resources { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            // Ustawienie klucza głównego
            modelBuilder.Entity<Users>()
                .HasKey(u => u.UserId);

            // Opcjonalnie: Możesz skonfigurować inne właściwości tabeli
            modelBuilder.Entity<Users>()
                .Property(u => u.Username)
                .IsRequired();

            modelBuilder.Entity<Users>()
                .Property(u => u.PasswordHash)
                .IsRequired();
        }

    }
}
