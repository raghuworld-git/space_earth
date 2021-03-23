import React from 'react';

import NoData from '../nodata/NoData';
import LaunchCounter from '../../containers/launchCounter/LaunchCounter';

import { getFullFormattedDateTime } from '../../utils/dateTimeUtil';
import { getColorByLaunchStatus } from '../../utils/launchUtil';

import { MDBBadge, MDBCol, MDBContainer, MDBIcon, MDBMask, MDBRow, MDBTypography, MDBView } from 'mdbreact';

import styles from './launchDetails.module.css';
import AgencyThumbnail from '../agency/AgencyThumbnail';

const LaunchDetails = ({ launchInfo }) => {

    if (launchInfo === null || launchInfo === undefined) {
        return <NoData />
    }
    const { net: launchdate, name, status, image, launch_service_provider, pad } = launchInfo;
    const { location, name: launchPadName } = pad;
    const { year, month, day, hour, minutes, seconds } = getFullFormattedDateTime(launchdate);

    return (<>
        <MDBView>
            <img src={image} className={styles.imagesize} alt={name} />
            <MDBMask className="flex-center text-white text-center" overlay="black-light"  >
                <MDBCol className="py-5">
                    <MDBTypography className={`my-3 ${styles.h1responsive} `} tag='h1' variant="h1-responsive">
                        <LaunchCounter launchDate={launchdate} />
                    </MDBTypography>
                    <MDBTypography tag='h3' variant="h3-responsive">{name}</MDBTypography>
                    <p className='my-3'>
                        Launch date: {month} {day} {year}, {hour}:{minutes}:{seconds}
                    </p>
                    <MDBTypography tag='h5' variant="h5-responsive"><MDBBadge color={getColorByLaunchStatus(status.abbrev)}>{status.name} ({status.abbrev})</MDBBadge></MDBTypography>
                    <p className='my-3'>
                        <MDBIcon icon="map-marker-alt" /> {' '} {launchPadName}, {location.name}
                    </p>
                </MDBCol>
            </MDBMask>
        </MDBView>
        <MDBContainer fluid>
            <MDBRow className='mt-3'>
                <MDBCol lg='3' md='4' sm='12'>
                    <MDBTypography className='text-center' tag='h5' variant="h5-responsive">Launch Provider</MDBTypography>
                    <AgencyThumbnail agencyInfo={launch_service_provider} />
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    </>)
}

export default LaunchDetails;