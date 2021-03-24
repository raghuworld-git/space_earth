import { MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle } from 'mdbreact';
import React from 'react'
import { Link } from 'react-router-dom';

const AgencyThumbnail = ({ agencyInfo }) => {

    const { logo_url: agencyLogo, name, country_code, id } = agencyInfo;
    return (
        <>
            <Link to={`/agency/${id}`} >
                <MDBCard className='z-depth-3' style={{ padding: '10px' }}>
                    <MDBCardImage className="img-fluid" src={agencyLogo} />
                    <MDBCardBody className='text-center'>
                        <MDBCardTitle>{name} ({country_code})</MDBCardTitle>
                    </MDBCardBody>
                </MDBCard>
            </Link>
        </>
    )
}

export default AgencyThumbnail
