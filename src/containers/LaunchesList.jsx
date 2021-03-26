import React, { useEffect, useState } from 'react';

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

    const [isCrewedLaunch, setisCrewedLaunches] = useState(false);

    const { data, isLoading, isError, isSuccess, isFetching, refetch } = useQuery([`${type === 'upcoming' ? 'getAllUpcomingLaunches' : 'getAllPreviousLaunches'}getAgencyById`, type], () => { return type === 'upcoming' ? getAllUpcomingLaunches(isCrewedLaunch) : getAllPreviousLaunches(isCrewedLaunch) });


    useEffect(() => {
        refetch()
    }, [isCrewedLaunch, refetch]);


    const pageTitle = type === 'upcoming' ? 'Upcoming launches' : 'Previous launches';
    const renderCards = (data) => {
        return data.map((item, index) => {
            return <MDBCol className='my-2' key={index} sm='6' md='4'><LaunchCard data={item} /> </MDBCol>
        });
    }

    return (
        <MDBContainer>
            <MDBRow>
                <MDBCol>
                    <Heading headingText={pageTitle} headerTag='h4' />
                </MDBCol>
            </MDBRow>
            <MDBRow className='text-center my-3'>
                <MDBCol style={{ color: 'white' }}>
                    <div className="custom-control custom-checkbox">
                        <input defaultChecked={isCrewedLaunch} type="checkbox" className="custom-control-input" id="crewedLaunchCheck" onChange={() => setisCrewedLaunches(!isCrewedLaunch)} />
                        <label className="custom-control-label" htmlFor="crewedLaunchCheck">Crewed Launches ?</label>
                    </div>
                </MDBCol>
            </MDBRow>
            <Loader isloading={isLoading} iserror={isError} isSuccess={isSuccess} isFetching={isFetching}>
                <MDBRow>
                    {data === null || data === undefined || data.length <= 0 ? <NoData /> : renderCards(data)}
                </MDBRow>

            </Loader>
        </MDBContainer>
    )
}

export default LaunchesList
