import { } from 'mdbreact'
import React from 'react'
import NoData from '../nodata/NoData'

const AgencyDetails = ({ agencyInfo }) => {

    if (agencyInfo === null || agencyInfo === undefined) {
        return <NoData />
    }
    return (
        <>

        </>
    )
}

export default AgencyDetails
