import { MDBIcon } from 'mdbreact'
import React from 'react'

const URL = ({ url, type }) => {

    if (!url)
        return null;
    let iconType = null;
    switch (type) {
        case 'wiki':
            iconType = (<MDBIcon fab icon="wikipedia-w" />);
            break;
        case 'twitter':
            iconType = (<MDBIcon fab icon="twitter" />);
            break;
        case 'instagram':
            iconType = (<MDBIcon fab icon="instagram" />);
            break;
        default:
            iconType = (<MDBIcon icon="link" />);
            break;
    }
    return (
        <>
            <a href={url} target='_blank' rel="noreferrer">{iconType}</a>
        </>
    )
}

export default URL
