import { MDBCard, MDBCardBody } from 'mdbreact'
import React from 'react'
const YoutubeStream = ({ url }) => {
    return (
        <MDBCard className='commonGreyColor'>
            <MDBCardBody className='text-center'>
                {url ?
                    <iframe width="100%" height="400px" src={url} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe> : 'No streaming data available.'
                }
            </MDBCardBody>
        </MDBCard>

    )
}

export default YoutubeStream
