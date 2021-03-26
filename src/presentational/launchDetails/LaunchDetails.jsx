import React from 'react';

import NoData from '../nodata/NoData';
import LaunchCounter from '../../containers/launchCounter/LaunchCounter';

import { getFullFormattedDateTime } from '../../utils/dateTimeUtil';
import { getColorByLaunchStatus, getYoutubeEmbedUrlByWatchURL } from '../../utils/launchUtil';

import { MDBBadge, MDBCol, MDBContainer, MDBIcon, MDBMask, MDBRow, MDBTypography, MDBView } from 'mdbreact';

import styles from './launchDetails.module.css';
import Heading from '../heading/Heading';
import YoutubeStream from '../youtube/YoutubeStream';
import { Link } from 'react-router-dom';
import Rocket from '../rocket/Rocket';
import LaunchUpdates from '../launchUpdates/LaunchUpdates';

import defaultImage from '../../assests/images/defaultImage.jpg';


const LaunchDetails = ({ launchInfo }) => {

    if (launchInfo === null || launchInfo === undefined || launchInfo.results.length <= 0) {
        return <NoData />
    }
    const { net: launchdate, name, status, image, launch_service_provider, pad, vidURLs, rocket, updates, webcast_live } = launchInfo.results[0];
    const { location, name: launchPadName } = pad;
    const { name: agencyName, country_code: agencyCountryCode, id: agencyId } = launch_service_provider;
    const { year, month, day, hour, minutes, seconds } = getFullFormattedDateTime(launchdate);

    return (<>
        <MDBView className='z-depth-3'>
            <img src={!image ? defaultImage : image} className={styles.imagesize} alt={name} />
            <MDBMask className="flex-center text-white text-center" overlay="black-light"  >
                <MDBCol className="py-5">
                    <MDBTypography className={`my-3 ${styles.h1responsive} `} tag='h1' variant="h1-responsive">
                        <LaunchCounter launchDate={launchdate} />
                    </MDBTypography>
                    <MDBTypography tag='h3' variant="h3-responsive">{name}</MDBTypography>
                    <p className='my-3' style={{ fontSize: '20px' }}>
                        Launch date: {month} {day} {year}, {hour}:{minutes}:{seconds}
                    </p>
                    <MDBTypography tag='h5' variant="h5-responsive"><MDBBadge color={getColorByLaunchStatus(status.abbrev)[0]}>{status.name} ({status.abbrev})</MDBBadge></MDBTypography>
                    <p className='my-3' style={{ fontSize: '20px' }}>
                        <MDBIcon icon="map-marker-alt" /> {' '} {launchPadName}, {location.name}
                    </p>
                    <p className='my-3' style={{ fontSize: '20px' }}>
                        Launch provider : <Link style={{ color: 'white', textDecoration: 'underline' }} to={`/agency/${agencyId}`}> {agencyName}, {agencyCountryCode} </Link>
                    </p>
                </MDBCol>
            </MDBMask>
        </MDBView>
        <MDBContainer fluid>
            <MDBRow className='mt-3'>
                {/* <MDBCol lg='3' md='3' xl='3' sm='12'>
                    <MDBTypography className='text-center' tag='h5' variant="h5-responsive">Launch Provider</MDBTypography>
                    <AgencyThumbnail agencyInfo={launch_service_provider} />
                </MDBCol> */}
                <MDBCol lg='8' md='8' xl='8' sm='12'>
                    <Heading headingText={`Watch ${webcast_live ? 'live stream' : 'recorded video'} `} headerTag='h5' />
                    <YoutubeStream url={vidURLs.length > 0 ? getYoutubeEmbedUrlByWatchURL(vidURLs[0].url) : null} />
                </MDBCol>
                <MDBCol lg='4' md='4' xl='4' sm='12'>
                    <Heading headingText='Updates' headerTag='h5' />
                    <LaunchUpdates launchUpdates={updates} />
                </MDBCol>
            </MDBRow>
            <MDBRow className='mt-1'>
                <MDBCol lg='8' md='8' xl='8' sm='12' className='mb-3'>
                    <Heading headingText='Rocket info' headerTag='h5' />
                    <Rocket rocket={rocket} />
                </MDBCol>
                <MDBCol lg='4' md='4' xl='4' sm='12'>
                    <Heading headingText='Related News' headerTag='h5' />
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    </>)
}

export default LaunchDetails;