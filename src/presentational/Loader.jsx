import { MDBCol, MDBRow } from 'mdbreact';
import React from 'react';

const Loader = ({ status = 'success', children }) => {

    if (status === 'loading') {
        return (<MDBRow className='my-3'>
            <MDBCol size='12' className='text-center'>
                <div className="spinner-border" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            </MDBCol>
        </MDBRow>)
    } else if (status === 'error') {
        return <MDBCol size='12' className='text-center'>
            An error occured while fetching data. Please try later
        </MDBCol>
    }
    else if (status === 'success') {
        return children;
    }
}

export default Loader;