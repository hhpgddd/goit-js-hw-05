const getUsersWithFriend = (users, friendName) => users.filter(user => user.friends.includes(friendName));

