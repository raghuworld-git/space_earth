import React from 'react'
import { MDBCard, MDBCardBody, MDBCardImage } from 'mdbreact'
import styles from './launchCard.module.css';
import { Link } from 'react-router-dom';
import { getFullFormattedDateTime } from '../../utils/dateTimeUtil'
import defaultImage from '../../assests/images/defaultImage.jpg';
import { getColorByLaunchStatus } from '../../utils/launchUtil'

const LaunchCard = ({ data }) => {

    const { net, name, status, image, slug } = data;
    const { year, month, day, hour, minutes, seconds } = getFullFormattedDateTime(net);
    return (
        <Link to={`/launch/${slug}`} >
            <MDBCard className='commonGreyColor'>
                <MDBCardImage zoom alt={name} className={styles.launchCardImage} src={!image ? defaultImage : image} waves />
                <MDBCardBody>
                    <span className="d-inline-block text-truncate text-center" style={{ maxWidth: "100%" }} title={name}>
                        <span style={{ color: getColorByLaunchStatus(status.abbrev)[1] }}>{status.abbrev}</span>  &nbsp; {name}
                    </span>
                    <p className='text-muted text-center'> Launch date: {month} {day} {year}, {hour}:{minutes}:{seconds}</p>
                </MDBCardBody>
            </MDBCard>
        </Link>
    )
}

export default LaunchCard
