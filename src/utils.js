export function compareDates(date1, date2) {
    const compare1 = Date.UTC(date1.getUTCFullYear(), date1.getUTCMonth(), date1.getUTCDate());
    const compare2 = Date.UTC(date2.getUTCFullYear(), date2.getUTCMonth(), date2.getUTCDate());
    return compare1 === compare2;
}

export function setDateToBeginningOfDay(date) {
    var inputtedDate = date;
    inputtedDate.setHours(0, 0, 0, 0);
    return inputtedDate;
}