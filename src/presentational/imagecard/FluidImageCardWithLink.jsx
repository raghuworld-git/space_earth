import { MDBCard, MDBCardBody, MDBCardText, MDBCardTitle } from 'mdbreact';
import React from 'react';

const FluidImageCardWithLink = ({ url }) => {

    return (<>

        <MDBCard>
            <a href={url} target='_blank' rel='noreferrer'>
                <img alt='fd' style={{ width: '100%', height: '500px', objectFit: 'cover' }} className="img-fluid" src={url} />
            </a>
            <MDBCardBody className='text-center'>
                <MDBCardTitle>Card title</MDBCardTitle>
                <MDBCardText>
                    Some quick example text to build on the card title and make
                    up the bulk of the card&apos;s content.
          </MDBCardText>
            </MDBCardBody>
        </MDBCard>
    </>)
}

export default FluidImageCardWithLink;