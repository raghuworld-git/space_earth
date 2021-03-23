import { MDBTypography } from 'mdbreact';
import React from 'react'
import { Link } from 'react-router-dom';

import styles from './listGroup.module.css'

const ListGroup = ({ isDepth = false, link = null, data = [] }) => {
    return (
        <div className={`${isDepth ? 'z-depth-3' : null} list-group`} >
            {
                data.length > 0 ?
                    data.map((item) => {
                        const { name, id, subname, link } = item;
                        return <Link key={id} className='list-group-item list-group-item-action' to={link}>
                            <div className="d-flex w-100 justify-content-between">
                                <MDBTypography tag='h6' variant="h6-responsive">{name}</MDBTypography>
                            </div>
                            <p className="mb-1">{subname}</p>
                        </Link>
                    }) : <div className='list-group-item list-group-item-action text-center'>No data available</div>
            }
            {link === null ? null : <Link className={`list-group-item ${styles.listgroupActive}`} to={link}>
                For more
            </Link>}
        </div>
    )
}

export default ListGroup