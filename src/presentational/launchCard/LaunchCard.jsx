import React from 'react'
import { MDBCard, MDBCardBody, MDBCardImage } from 'mdbreact'
import styles from './launchCard.module.css';
import Heading from '../heading/Heading';
import { Link } from 'react-router-dom';
import { getFullFormattedDateTime } from '../../utils/dateTimeUtil'
import defaultImage from '../../assests/images/defaultImage.jpg';
import { getColorByLaunchStatus } from '../../utils/launchUtil'

const LaunchCard = ({ data }) => {

    const { net, name, status, image, slug } = data;
    const { year, month, day, hour, minutes, seconds } = getFullFormattedDateTime(net);
    return (
        <Link to={`/launch/${slug}`}>
            <MDBCard className='commonGreyColor'>
                <MDBCardImage zoom alt={name} className={styles.launchCardImage} src={!image ? defaultImage : image} waves />
                <MDBCardBody>
                    <Heading headerTag='h6' headingText={(<>{name} &nbsp;<span style={{ color: getColorByLaunchStatus(status.abbrev)[1] }}>{status.abbrev}</span></>)} />
                    <p className='text-muted text-center'> Launch date: {month} {day} {year}, {hour}:{minutes}:{seconds}</p>
                </MDBCardBody>
            </MDBCard>
        </Link>
    )
}

export default LaunchCard
