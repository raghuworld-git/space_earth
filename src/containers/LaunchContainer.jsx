import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';

import Loader from '../presentational/Loader';
import LaunchDetails from '../presentational/launchDetails/LaunchDetails';

import { getLaunchBySlug } from '../api/launchAPI';

const LaunchContainer = () => {

    const { slug } = useParams();
    const { data, isLoading, isError, isSuccess } = useQuery(['getLaunchBySlug', slug], () => getLaunchBySlug(slug));

    return (
        <>
            <Loader iserror={isError} isloading={isLoading} isSuccess={isSuccess}>
                < LaunchDetails launchInfo={data} />
            </Loader>
        </>
    )
}

export default LaunchContainer
