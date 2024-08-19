export function createDateObj(yearMonthText) {
    //Return if null
    if (yearMonthText == null) {
        return null;
    }
    //Add 00 time at the end to prevent timezones from changing the day
    return new Date(yearMonthText + "-01T00:00:00")
}

export function generateDateRange(dateStart, dateEnd) {
    //Get starting year and month
    const yearStart = dateStart.getFullYear();
    const monthStart = dateStart.getMonth();

    //Check for end date
    if (dateEnd == null) {
        //Get short start date
        const shortStart = appendYearToMonth(getShortMonthDate(dateStart), yearStart);

        //Return "shortStart - Present"
        return buildDateRange(shortStart, "Present");
    }

    //Get ending year and month
    const yearEnd = dateEnd.getFullYear();
    const monthEnd = dateEnd.getMonth();

    //If both year and month match then return "longStart"
    if (yearStart == yearEnd && monthStart == monthEnd) {
        return appendYearToMonth(getLongMonthDate(dateStart), yearStart);
    }

    //Get short start date
    const shortStart = appendYearToMonth(getShortMonthDate(dateStart), yearStart);
    //Get short end date
    const shortEnd = appendYearToMonth(getShortMonthDate(dateEnd), yearEnd);
    //Return "shortStart - shortEnd"
    return buildDateRange(shortStart, shortEnd);
}

function getLongMonthDate(date) {
    return date.toLocaleString('default', { month: 'long' });
}

function getShortMonthDate(date) {
    return date.toLocaleString('default', { month: 'short' });
}

function appendYearToMonth(monthText, year) {
    return monthText + " " + year;
}

function buildDateRange(startText, endText) {
    return startText + " - " + endText;
}