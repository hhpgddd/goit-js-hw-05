const getTotalBalanceByGender = (users, gender) => users
    .filter(user => user.gender === gender)
    .reduce((acc, item) => acc + item.balance, 0);
