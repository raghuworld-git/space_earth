import { MDBCard, MDBCardBody, MDBRow } from 'mdbreact'
import React from 'react'
import Heading from '../../presentational/heading/Heading'

const GoogleMap = ({ headingText = '', latitude = null, longitude = null }) => {
    return (
        <MDBCard>
            <MDBCardBody>
                <Heading headingText={headingText} headerTag='h5' />
                <MDBRow></MDBRow>
            </MDBCardBody>
        </MDBCard>
    )
}

export default GoogleMap
