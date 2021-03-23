import { MDBAlert, MDBContainer } from 'mdbreact'
import React from 'react'
import { NavLink } from 'react-router-dom'

const NoData = () => {
    return (
        <MDBContainer className='my-2'>
            <MDBAlert color="info" className='text-center'>
                <h4 className="alert-heading">No data available</h4>
                <p>Please come back later</p>
                <NavLink to='/' className="btn btn-default mb-1" >
                    Back to Home
                </NavLink>
            </MDBAlert>
        </MDBContainer>
    )
}

export default NoData
