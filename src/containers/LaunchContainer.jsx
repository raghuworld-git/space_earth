import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';

import Loader from '../presentational/Loader';
import LaunchDetails from '../presentational/launchDetails/LaunchDetails';

import { getLaunchById } from '../api/launchAPI';

const LaunchContainer = () => {

    const { id } = useParams();
    const { data, status } = useQuery(['getLaunchById', id], () => getLaunchById(id));
    return (
        <>
            <Loader status={status}>
                {/* <NextLaunchJumbo launchInfo={data} jumboHeader='Launch is at' /> */}
                <LaunchDetails launchInfo={data} />
            </Loader>
        </>
    )
}

export default LaunchContainer
