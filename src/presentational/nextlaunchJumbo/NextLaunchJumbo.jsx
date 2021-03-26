import React from 'react';
import { MDBBadge, MDBCol, MDBIcon, MDBJumbotron, MDBMask, MDBRow, MDBTypography } from 'mdbreact'

import { getColorByLaunchStatus } from '../../utils/launchUtil';
import { getFullFormattedDateTime } from '../../utils/dateTimeUtil';

import styles from './launchJumbotran.module.css';
import LaunchCounter from '../../containers/launchCounter/LaunchCounter';
import { NavLink } from 'react-router-dom';
import NoData from '../nodata/NoData';

const NextLaunchJumbo = ({ imgUrl, launchInfo, jumboHeader, showDetailsButton = false }) => {

    if (launchInfo === null || launchInfo === undefined) {
        return <NoData />
    }
    const { net: launchdate, name, status, image, slug } = launchInfo;
    const { year, month, day, hour, minutes, seconds } = getFullFormattedDateTime(launchdate);
    const customIMG = !imgUrl ? image : imgUrl;
    return (
        <MDBRow className='no-gutters mb-1'>
            <MDBCol>
                <MDBJumbotron style={{ padding: 0 }} className='z-depth-3 rgba-black-strong'>
                    <MDBCol className="text-white text-center" style={{ backgroundImage: `url(${customIMG})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundColor: 'black', backgroundSize: 'cover' }}>
                        <MDBMask style={{ width: '100% !important' }} overlay="black-slight">
                            <MDBCol className="py-5">
                                <MDBTypography tag='h2' variant="h2-responsive">{jumboHeader}</MDBTypography>
                                <MDBTypography className={`my-3 ${styles.h1responsive} `} tag='h1' variant="h1-responsive">
                                    <LaunchCounter launchDate={launchdate} />
                                </MDBTypography>
                                <MDBTypography tag='h3' variant="h3-responsive">{name}</MDBTypography>
                                <p className='my-3'>
                                    Launch date: {month} {day} {year}, {hour}:{minutes}:{seconds}
                                </p>
                                <MDBTypography tag='h5' variant="h5-responsive"><MDBBadge style={{ color: 'black !important' }} color={getColorByLaunchStatus(status.abbrev)[0]}>{status.name} ({status.abbrev})</MDBBadge></MDBTypography>
                                {showDetailsButton &&
                                    <NavLink to={`/launch/${slug}`} className="btn btn-outline-light mb-1" >
                                        <MDBIcon icon="clone" className="mr-2"></MDBIcon> Details
                            </NavLink>
                                }
                            </MDBCol>
                        </MDBMask>
                    </MDBCol>
                </MDBJumbotron>
            </MDBCol>
        </MDBRow>
    )
}

export default NextLaunchJumbo
