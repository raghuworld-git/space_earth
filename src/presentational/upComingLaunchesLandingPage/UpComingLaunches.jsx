import { MDBTypography } from 'mdbreact';
import React from 'react'
import { Link } from 'react-router-dom';
import { getColorByLaunchStatus } from '../../utils/launchUtil';
import styles from './upComingLaunches.module.css'

const UpComingLaunches = ({ isDepth = false, link = null, data = [] }) => {
    return (
        <div className={`${isDepth ? 'z-depth-3' : null} list-group`} >
            {
                data.length > 0 ?
                    data.map((item) => {
                        const { name, id, subname, link, status } = item;
                        return <Link key={id} className='list-group-item list-group-item-action commonGreyColor' to={link}>
                            <div className="d-flex w-100 justify-content-between">
                                <MDBTypography tag='h6' variant="h6-responsive">{name}</MDBTypography>
                                <span style={{ color: getColorByLaunchStatus(status?.abbrev)[1] }}>{status?.abbrev}</span>
                            </div>
                            <p className="mb-1">{subname}</p>
                        </Link>
                    }) : <div className={`list-group-item list-group-item-action text-center`} style={{ backgroundColor: '#262626', color: 'white' }}>No data</div>
            }
            {
                link === null || data.length <= 0 ? null : <Link className={`list-group-item ${styles.moreButtonColor}`} to={link}>
                    For more
            </Link>
            }
        </div >
    )
}

export default UpComingLaunches