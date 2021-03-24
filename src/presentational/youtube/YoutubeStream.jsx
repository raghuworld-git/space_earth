import { MDBCard, MDBCardBody } from 'mdbreact'
import React from 'react'

const YoutubeStream = ({ url }) => {
    return (
        <MDBCard>
            <MDBCardBody className='text-center'>
                {url ?
                    <iframe width="100%" height="400px" src={url} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> : 'No streaming data available.'
                }
            </MDBCardBody>
        </MDBCard>

    )
}

export default YoutubeStream
