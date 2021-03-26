import React from 'react';

import { useParams } from 'react-router-dom';
import LaunchCard from '../presentational/launchCard/LaunchCard';

import { getAllPreviousLaunches, getAllUpcomingLaunches } from '../api/launchAPI';

import { useQuery } from 'react-query';
import Loader from '../presentational/Loader';
import NoData from '../presentational/nodata/NoData';
import { MDBCol, MDBContainer, MDBRow } from 'mdbreact';
import Heading from '../presentational/heading/Heading';

const LaunchesList = () => {

    const { type } = useParams();

    const { data, isLoading, isError, isSuccess } = useQuery([`${type === 'upcoming' ? 'getAllUpcomingLaunches' : 'getAllPreviousLaunches'}getAgencyById`, type], () => { return type === 'upcoming' ? getAllUpcomingLaunches() : getAllPreviousLaunches() });

    const pageTitle = type === 'upcoming' ? 'Upcoming launches' : 'Previous launches';
    const renderCards = (data) => {
        return data.map((item, index) => {
            return <MDBCol className='my-2' key={index} sm='6' md='4'><LaunchCard data={item} /> </MDBCol>
        });
    }

    return (
        <Loader isloading={isLoading} iserror={isError} isSuccess={isSuccess}>
            <MDBContainer>
                <MDBRow>
                    <MDBCol>
                        <Heading headingText={pageTitle} headerTag='h4' />
                    </MDBCol>
                </MDBRow>
                <MDBRow>
                    {data === null || data === undefined || data.length <= 0 ? <NoData /> : renderCards(data)}
                </MDBRow>
            </MDBContainer>
        </Loader>
    )
}

export default LaunchesList
