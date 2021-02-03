using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using MoviesApp_Angular.Models;

namespace MoviesApp_Angular.Data
{
    public class MoviesApp_AngularContext : DbContext
    {
        public MoviesApp_AngularContext (DbContextOptions<MoviesApp_AngularContext> options)
            : base(options)
        {
        }

        public DbSet<MoviesApp_Angular.Models.Todo> Todo { get; set; }
    }
}
