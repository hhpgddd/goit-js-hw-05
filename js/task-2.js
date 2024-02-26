function calcAverageCalories(days) {
    let caloriesAvg = 0;

    for (const calorie of days) {
        caloriesAvg += calorie["calories"];
    }
    if (days.length === 0) {
        return 0;
    }
    return caloriesAvg / days.length;
}