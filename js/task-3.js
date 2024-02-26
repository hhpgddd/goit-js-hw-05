const sortByDescendingFriendCount = (users) => users
    .toSorted((a, b) => b.friends.length - a.friends.length);