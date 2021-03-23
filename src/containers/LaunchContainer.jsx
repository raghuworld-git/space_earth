import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';

import Loader from '../presentational/Loader';

import { getLaunchById } from '../api/launchAPI';
import NextLaunchJumbo from '../presentational/nextlaunchJumbo/NextLaunchJumbo';

const LaunchContainer = () => {

    const { id } = useParams();
    const { data, status } = useQuery(['getLaunchById', id], () => getLaunchById(id));
    return (
        <>
            <Loader status={status}>
                <NextLaunchJumbo launchInfo={data} jumboHeader='Launch is at' />
            </Loader>
        </>
    )
}

export default LaunchContainer
