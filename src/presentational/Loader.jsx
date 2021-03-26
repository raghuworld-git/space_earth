import { MDBCol, MDBRow } from 'mdbreact';
import React from 'react';

const Loader = ({ isloading, iserror, isSuccess, isFetching, children }) => {

    if (isloading || isFetching) {
        return (<MDBRow className='my-3'>
            <MDBCol size='12' className='text-center'>
                <div className="spinner-border text-light" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            </MDBCol>
        </MDBRow>)
    } else if (iserror) {
        return <MDBCol size='12' className='text-center' style={{ color: 'white' }}>
            An error occured while fetching data. Please try later
        </MDBCol>
    }
    else if (isSuccess) {
        return children;
    }
}

export default Loader;