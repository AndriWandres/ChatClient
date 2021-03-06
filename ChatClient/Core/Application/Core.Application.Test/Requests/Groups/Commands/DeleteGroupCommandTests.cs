﻿using Core.Application.Database;
using Core.Application.Requests.Groups.Commands;
using Core.Domain.Entities;
using MockQueryable.Moq;
using Moq;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Xunit;

namespace Core.Application.Test.Requests.Groups.Commands
{
    public class DeleteGroupCommandTests
    {
        private readonly Mock<IUnitOfWork> _unitOfWorkMock;

        public DeleteGroupCommandTests()
        {
            _unitOfWorkMock = new Mock<IUnitOfWork>();
        }

        [Fact]
        public async Task DeleteGroupCommandHandler_ShouldSetDeleteFlagOnGroup()
        {
            // Arrange
            DeleteGroupCommand request = new DeleteGroupCommand { GroupId = 1 };

            IEnumerable<Group> expectedGroups = new[]
            {
                new Group {GroupId = 1}
            };

            IQueryable<Group> queryableMock = expectedGroups
                .AsQueryable()
                .BuildMock()
                .Object;

            _unitOfWorkMock
                .Setup(m => m.Groups.GetById(request.GroupId))
                .Returns(queryableMock);

            Group passedGroup = null;

            _unitOfWorkMock
                .Setup(m => m.Groups.Update(It.IsAny<Group>()))
                .Callback<Group>(g => passedGroup = g);

            DeleteGroupCommand.Handler handler = new DeleteGroupCommand.Handler(_unitOfWorkMock.Object);

            // Act
            await handler.Handle(request);

            // Assert
            Assert.NotNull(passedGroup);
            Assert.Equal(request.GroupId, passedGroup.GroupId);
            Assert.True(passedGroup.IsDeleted);

            _unitOfWorkMock.Verify(m => m.CommitAsync(It.IsAny<CancellationToken>()), Times.AtLeastOnce);
        }
    }
}
