import { getFullFormattedDateTime } from "./dateTimeUtil";

export const getColorByLaunchStatus = (launchStatusAbbr) => {

    switch (launchStatusAbbr) {
        case 'TBD':
        case 'TBC':
        case 'Hold':
            return 'info'
        case 'Go':
        case 'Success':
            return 'success'
        case 'Failure':
        case 'Partial Failure':
            return 'danger';
        case 'In Flight':
            return 'orange'
        default:
            return 'default';
    }

}

export const getFormattedTopThreeUpcomingList = (data) => {

    if (!data) return []
    let dataArray = data.map((item) => {
        const { name, net, id } = item;
        const { year, month, day, hour, minutes, seconds } = getFullFormattedDateTime(net);
        const fromattedNet = `${month} ${day} ${year}, ${hour}: ${minutes}: ${seconds}`;
        return { name, id, subname: fromattedNet, link: `/launch/${id}` }
    })
    return dataArray;

}