﻿namespace Calendar.Api.Models
{
    public class Event
    {
        public string EventId { get; set; }

        public string UserId { get; set; }

        public string Title { get; set; }

        public string Description { get; set; }

        public DateTime StartDate { get; set; }
        
        //public DateTime EndDate { get; set; }
    }
}
