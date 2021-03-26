import React from 'react';

import { MDBTypography } from 'mdbreact'

import styles from './header.module.css';

const Heading = ({ headerTag = 'h4', headingText, withBorder = 'false' }) => {
    return (
        <MDBTypography colorText='white' className={`text-center ${withBorder === 'true' ? styles.headerBorder : ''}`} tag={headerTag} variant={`${headerTag}-responsive`}>{headingText}</MDBTypography>
    )
}

export default Heading
