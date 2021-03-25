import { MDBCard, MDBCardBody, MDBCol, MDBRow, MDBTable, MDBTableBody } from 'mdbreact'
import React from 'react'
import { Link } from 'react-router-dom';
import ReadMore from '../../containers/readMore/ReadMore';
import Heading from '../heading/Heading';
import URL from '../URL';

const Rocket = ({ rocket }) => {
    // console.log(rocket);
    const { configuration } = rocket;
    const { full_name, image_url, diameter, length, wiki_url, description, min_stage, max_stage, gto_capacity, leo_capacity, launch_mass, to_thrust, manufacturer } = configuration;
    return (
        <MDBCard>
            <MDBCardBody>
                <Heading headingText={full_name} headerTag='h5' />
                <MDBRow>
                    <MDBCol lg='6' sm='12' md='12' className='mb-2'>
                        <img src={image_url} alt={full_name} style={{ width: '100%', maxHeight: '400px', objectFit: 'cover' }} className="img-fluid rounded mb-0" />
                    </MDBCol>
                    <MDBCol lg='6' sm='12' md='12'>
                        <MDBTable small responsive bordered>
                            <MDBTableBody>
                                <tr>
                                    <td>Diameter :</td>
                                    <td>{diameter} meters</td>
                                </tr>
                                <tr>
                                    <td>Height :</td>
                                    <td>{length} meters</td>
                                </tr>
                                <tr>
                                    <td>Min | Max Stages :</td>
                                    <td>{min_stage} | {max_stage}</td>
                                </tr>
                                <tr>
                                    <td>Liftoff mass :</td>
                                    <td>{launch_mass} tonnes</td>
                                </tr>
                                <tr>
                                    <td>Liftoff Thrust :</td>
                                    <td>{to_thrust} kN</td>
                                </tr>
                                <tr>
                                    <td>Mass to GTO :</td>
                                    <td>{gto_capacity} kg</td>
                                </tr>
                                <tr>
                                    <td>Mass to LEO :</td>
                                    <td>{leo_capacity} kg</td>
                                </tr>
                                <tr>
                                    <td>Manufacturer :</td>
                                    <td><Link style={{ textDecoration: 'underline' }} to={`/agency/${manufacturer?.id}`}> {manufacturer?.name} ({manufacturer?.country_code})</Link></td>
                                </tr>
                                {/* <tr className='table-active'>
                                    <td>Success launches : {successful_launches}</td>
                                    <td>Pending launches : {pending_launches} </td>
                                </tr> */}
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
                        <p className='text-center'>
                            <ReadMore text={description} cutoffLength='300' />
                        </p>
                    </MDBCol>
                </MDBRow>
            </MDBCardBody>
        </MDBCard>
    )
}

export default Rocket
