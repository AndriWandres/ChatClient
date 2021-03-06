﻿using Core.Domain.Entities;

namespace Core.Domain.Resources.Users
{
    public class UserProfileResource
    {
        public int UserId { get; set; }
        public string UserName { get; set; }
        public AvailabilityStatusId AvailabilityStatusId { get; set; }
    }
}
