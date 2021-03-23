import React from 'react';

import NoData from '../nodata/NoData';
import LaunchCounter from '../../containers/launchCounter/LaunchCounter';

import { getFullFormattedDateTime } from '../../utils/dateTimeUtil';
import { getColorByLaunchStatus } from '../../utils/launchUtil';

import { MDBBadge, MDBCol, MDBMask, MDBTypography, MDBView } from 'mdbreact';

import styles from './launchDetails.module.css';

const LaunchDetails = ({ launchInfo }) => {

    if (launchInfo === null || launchInfo === undefined) {
        return <NoData />
    }
    const { net: launchdate, name, status, image } = launchInfo;
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
                    <MDBTypography tag='h5' variant="h5-responsive"><MDBBadge style={{ color: 'black !important' }} color={getColorByLaunchStatus(status.abbrev)}>{status.name} ({status.abbrev})</MDBBadge></MDBTypography>
                    <a href={image} rel="noreferrer" target='_blank' className="btn btn-outline-light mb-1">View Full image</a>
                </MDBCol>
            </MDBMask>
        </MDBView>
    </>)
}

export default LaunchDetails;