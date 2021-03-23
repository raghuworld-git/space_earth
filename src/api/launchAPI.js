import axios from 'axios';

import { baseSpacedevApiURL } from '../utils/apiUtil';

const upcomingLaunchAPI = axios.create({ baseURL: `${baseSpacedevApiURL}/launch/upcoming` })
const launchAPI = axios.create({ baseURL: `${baseSpacedevApiURL}/launch/` })

export const getnextLaunch = async () => {
    try {
        const res = await upcomingLaunchAPI.get('/?limit=1&offset=0');
        return res.data?.results?.[0]
    }
    catch (error) {
        throw error;
    }
}

export const getTopThreeUpcmomingLaunches = async () => {
    try {
        const resp = await upcomingLaunchAPI.get(`/?limit=3&offset=1`);
        return resp.data?.results;
    }
    catch (error) {
        throw error;
    }
}

export const getLaunchById = async (id) => {
    try {
        const res = await launchAPI.get(`/${id}/`);
        return res.data
    }
    catch (error) {
        throw error;
    }
}
