import { MDBCol, MDBContainer, MDBRow } from 'mdbreact';
import React from 'react';

import { useQuery } from 'react-query';

import { getnextLaunch, getTopThreeUpcmomingLaunches } from '../api/launchAPI';
import Heading from '../presentational/heading/Heading';
//import FluidImageCardWithLink from '../presentational/imagecard/FluidImageCardWithLink';
import ListGroup from '../presentational/listgroup/ListGroup';

import NextLaunchJumbo from '../presentational/nextlaunchJumbo/NextLaunchJumbo';
import { getFormattedTopThreeUpcomingList } from '../utils/launchUtil';
import Loader from './../presentational/Loader'

const LandingPage = () => {

    const { data: nextlaunchInfo, isLoading: nlIsLoading, isError: nlIsError, isSuccess: nlIsSuccess } = useQuery('getnextLaunch', getnextLaunch);
    const { isLoading: ulIsloading, isError: ulIsError, isSuccess: ulIsSuccess, data: upcomingLaunches } = useQuery('getTopThreeUpcmomingLaunches', getTopThreeUpcmomingLaunches);


    const imgUrl = 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1352&q=80';

    return (<>
        <Loader isloading={nlIsLoading} iserror={nlIsError} isSuccess={nlIsSuccess}>
            <NextLaunchJumbo launchInfo={nextlaunchInfo} imgUrl={imgUrl} showDetailsButton jumboHeader='Next launch is in' />
        </Loader>

        <MDBContainer fluid>
            <MDBRow className='mb-3'>
                <MDBCol lg='4' md='4' sm='12' xs='12'>
                    <Heading headerTag='h4' headingText='Upcoming Launches' />
                    <Loader isloading={ulIsloading} iserror={ulIsError} isSuccess={ulIsSuccess}>
                        <ListGroup isDepth data={getFormattedTopThreeUpcomingList(upcomingLaunches)} link='/upcoming' />
                    </Loader>
                </MDBCol>
                <MDBCol lg='4' md='4' sm='12' xs='12'>
                    <Heading headerTag='h4' headingText='Today In history' />
                    {/* <Loader isLoading={upcomingisLoading}>
                        <ListGroup isDepth data={getFormattedTopThreeUpcomingList(upcomingLaunches)} />
                    </Loader> */}
                </MDBCol>
                {/* <MDBCol lg='4' md='4' sm='12' xs='12'>
                    <MDBTypography className='text-center' tag='h4' variant="h4-responsive">Astronauts today</MDBTypography>
                    <Loader isLoading={upcomingisLoading}>
                        <NextLaunchJumbo launchInfo={nextlaunchInfo} imgUrl={imgUrl} jumboHeader='Next launch is in' />
                    </Loader>
                </MDBCol> */}
            </MDBRow>
            {/* <MDBRow>
                <MDBCol size='12'>
                    <Heading headerTag='h4' headingText='Image of the day (APOD)' />
                    <FluidImageCardWithLink url='https://apod.nasa.gov/apod/image/2103/NGC1499_Akar_3296.jpg' />
                </MDBCol>
            </MDBRow> */}
        </MDBContainer>
    </>)
}

export default LandingPage;

