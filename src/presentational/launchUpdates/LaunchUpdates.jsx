import { MDBCard, MDBCardBody, MDBIcon } from 'mdbreact';
import spaceAvatar from '../../assests/images/man-in-space.png'
import React from 'react';

const LaunchUpdates = ({ launchUpdates }) => {

    let updateLoop = null;
    if (launchUpdates === null || launchUpdates === undefined || launchUpdates.length <= 0) {
        updateLoop = (<MDBCard className='commonGreyColor'>
            <MDBCardBody className='text-center'>
                Watch this space for more launch updates..
            </MDBCardBody>
        </MDBCard>)
    } else {

        updateLoop = launchUpdates.map(({ id, comment, created_by, created_on, info_url, profile_image }) => {
            return (<MDBCard key={id} className='commonGreyColor'>
                <MDBCardBody >

                    <div className='float-left'>
                        <img width='50' height='50' src={!profile_image ? spaceAvatar : profile_image} className="img-fluid z-depth-1 rounded-circle" alt="aligment" />
                    </div>

                    <div className='float-left d-flex flex-column ml-2' >
                        <span style={{ fontSize: '14px' }}> {created_by} ({(new Date(created_on)).toUTCString()})</span>
                        <span style={{ fontSize: '13px' }}> {comment}</span>
                    </div>

                    <div className='float-right'>
                        <a href={info_url} rel="noreferrer" target='_blank'><MDBIcon icon="external-link-alt" /></a>
                    </div>


                </MDBCardBody>
            </MDBCard >);
        });
    }

    return (
        <div className="overflow-auto" style={{ maxHeight: '400px' }}>
            {updateLoop}
        </div>
    )
}

export default LaunchUpdates
