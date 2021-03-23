import { numberWithZeroPrefix } from './numberUtil';
import MomentBase from 'moment';

export const getFullFormattedDateTime = (dateTime, timezone = null) => {
    let fullDate = { month: null, year: null, day: null, hour: null, minutes: null, seconds: null };

    try {
        const momentDateTime = MomentBase(dateTime);


        fullDate.year = momentDateTime.year();
        fullDate.month = momentDateTime.format('MMMM');
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