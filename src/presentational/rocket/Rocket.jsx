import { MDBCard, MDBCardBody, MDBCol, MDBRow, MDBTable, MDBTableBody } from 'mdbreact'
import React from 'react'
import Heading from '../heading/Heading';
import URL from '../URL';

const Rocket = ({ rocket }) => {
    console.log(rocket);
    const { configuration } = rocket;
    const { full_name, image_url, diameter, length, wiki_url, description } = configuration;
    return (
        <MDBCard>
            <MDBCardBody>
                <Heading headingText={full_name} headerTag='h4' />
                <MDBRow>
                    <MDBCol lg='6' sm='12' md='12'>
                        <img src={image_url} alt={full_name} style={{ width: '100%', height: '400px', objectFit: 'contain' }} className="img-fluid rounded mb-0" />
                    </MDBCol>
                    <MDBCol lg='6' sm='12' md='12'>
                        <MDBTable>
                            <MDBTableBody>
                                <tr>
                                    <td>Diameter :</td>
                                    <td>{diameter} m</td>
                                </tr>
                                <tr>
                                    <td>Height :</td>
                                    <td>{length} m</td>
                                </tr>
                                <tr>
                                    <td colSpan='2' className='text-center'>
                                        <URL url={wiki_url} type='wiki' />
                                    </td>
                                </tr>
                            </MDBTableBody>
                        </MDBTable>
                    </MDBCol>
                </MDBRow>
                <MDBRow>
                    <MDBCol>
                        <p className='my-3'>
                            {description}
                        </p>
                    </MDBCol>
                </MDBRow>
            </MDBCardBody>
        </MDBCard>
    )
}

export default Rocket
