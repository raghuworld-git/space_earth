import React from 'react';
import { useParams } from 'react-router-dom';
import AgencyDetails from '../presentational/agency/AgencyDetails';

import { getAgencyById } from '../api/agencyAPI';
import { useQuery } from 'react-query';
import { MDBContainer } from 'mdbreact';
import Loader from '../presentational/Loader';

const AgencyContainer = () => {

    const { id } = useParams();
    const { data, isLoading, isError, isSuccess } = useQuery(['getAgencyById', id], () => getAgencyById(id));
    return (
        <MDBContainer>
            <Loader iserror={isError} isloading={isLoading} isSuccess={isSuccess}>
                <AgencyDetails agencyInfo={data} />
            </Loader>
        </MDBContainer>
    )
}

export default AgencyContainer
