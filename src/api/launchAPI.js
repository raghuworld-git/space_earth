import axios from 'axios';

import { baseSpacedevApiURL } from '../utils/apiUtil';
// import { getCurrentDateTimeForFilterInUTCFormat } from '../utils/dateTimeUtil';

const upcomingLaunchAPI = axios.create({ baseURL: `${baseSpacedevApiURL}/launch/upcoming` })
const launchAPI = axios.create({ baseURL: `${baseSpacedevApiURL}/launch/` })

export const getnextLaunch = async () => {
    try {
        // const res = await launchAPI.get(`/?limit=1&net__gte=${getCurrentDateTimeForFilterInUTCFormat()}`);
        const res = await upcomingLaunchAPI.get(`/?limit=1`);
        return res.data?.results?.[0]
    }
    catch (error) {
        throw error;
    }
}

export const getTopThreeUpcmomingLaunches = async () => {
    try {
        const resp = await upcomingLaunchAPI.get(`/?limit=4&offset=1}`);
        return resp.data?.results;
    }
    catch (error) {
        throw error;
    }
}

export const getLaunchBySlug = async (slug) => {
    try {
        const res = await launchAPI.get(`/?slug=${slug}&mode=detailed`);
        return res.data
    }
    catch (error) {
        throw error;
    }
}
