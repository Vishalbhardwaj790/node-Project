using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace MoviesApp_Angular.Models
{
    public class Todo
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }

        [Display(Name = "Due Date")]
        [DataType(DataType.DateTime)]
        
        public DateTime DueDate { get; set; }
        public string priority { get; set; }

    }

    public enum Priority
    {
        High = 1,
        Medium = 2,
        Low = 3
    }
}
