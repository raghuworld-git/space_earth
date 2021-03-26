import { numberWithZeroPrefix } from './numberUtil';
import MomentBase from 'moment';

export const getFullFormattedDateTime = (dateTime, timezone = null) => {
    let fullDate = { month: null, year: null, day: null, hour: null, minutes: null, seconds: null };

    try {
        const momentDateTime = MomentBase(dateTime);


        fullDate.year = momentDateTime.year();
        fullDate.month = momentDateTime.format('MMMM').substring(0, 3);
        fullDate.day = numberWithZeroPrefix(momentDateTime.date());
        fullDate.hour = numberWithZeroPrefix(momentDateTime.hour());
        fullDate.minutes = numberWithZeroPrefix(momentDateTime.minute());
        fullDate.seconds = numberWithZeroPrefix(momentDateTime.second());
    }
    catch {

    }
    finally {
        return fullDate;
    }

}

export const getCurrentDateTimeForFilterInUTCFormat = () => {
    const curentDate = new Date();
    return `${curentDate.getUTCFullYear()}-${numberWithZeroPrefix(curentDate.getUTCMonth() + 1)}-${numberWithZeroPrefix(curentDate.getUTCDate())}T${numberWithZeroPrefix(curentDate.getUTCHours())}:${numberWithZeroPrefix(curentDate.getUTCMinutes())}:00Z`;
}