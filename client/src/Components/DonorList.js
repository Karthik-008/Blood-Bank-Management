import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Alert, Button, Table } from 'react-bootstrap';
import axios from 'axios';
import DonorUpdate from './DonorUpdate';

const DonorList = () => {
    const [donor, setDonor] = useState(null);
    const [donors, setDonors] = useState([]);
    const [message, setMessage] = useState();
    // const [updateStatus, setUpdateStatus] = useState();
    const API_URL = 'http://localhost:5000';
    // console.log(donors[0]);

    const fetchDonors = async() => {
        try{
            const response = await axios.get(`${API_URL}/donors`);
            // setMessage(response.data.message);
            setDonors(response.data.donors);
        }catch(error){
            setDonors([]);
            setMessage(error.response?.data?.message);
        }
    };

    useEffect(() => {
        fetchDonors();
    }, []);

    const handleUpdate = (e) => {
        console.log(message);
        setDonor(null);
        fetchDonors();
        // setMessage(updateStatus);    
    };

    const handleDelete = async (e, id) => {
        e.preventDefault();
        console.log(id);

        try {
            const response = await axios.delete(`${API_URL}/donors/${id}`);
            // setDonor(response.data.donor);
            setMessage(`${response.data.message} - ${response.data.donor.DonorID}`);
        } catch (error) {
            console.log(`Error -> ${error}`);
            setMessage(error.response?.data?.message);
        }
        fetchDonors();
    };

    return (
        <Container className='mt-4'>
            {donor &&
                <DonorUpdate donor={donor} onUpdate={handleUpdate} setMessage={setMessage}/>
            }
            <Row className='justify-content-center'>
                <Col>
                    <Card>
                        <Card.Header className='text-center'>
                            Donors List
                        </Card.Header>
                        {message && <Card.Body>
                            <Alert variant='info'>
                                {message}
                            </Alert>
                        </Card.Body>}
                    </Card>
                </Col>
            </Row>

            {donors &&
                <Table hover responsive striped bordered className='mt-4'>
                    <tbody>
                        <tr>
                            <th>DonorID</th>
                            <th>Name</th>
                            <th>BloodType</th>
                            <th>Contact</th>
                            <th>LastDonation(yyyy-mm-dd)</th>
                            <th colSpan={2} className='text-center'>Action</th>
                        </tr>

                        {donors.map((donor) => (
                            <tr key={donor.DonorID}>
                                <td>{donor.DonorID}</td>
                                <td>{donor.Name}</td>
                                <td>{donor.BloodType}</td>
                                <td>{donor.Contact}</td>
                                <td>{donor.LastDonation.split("T")[0]}</td>
                                <td className='justify-content-center' style={{width:'100px'}}>
                                    <Button variant='info' className='w-100' onClick={() => {
                                        setDonor(donor);
                                    }}>
                                        Edit
                                    </Button>
                                </td>
                                <td className='justify-content-center' style={{width:'100px'}}>
                                    <Button variant='danger' className='w-100' onClick={(e) => {
                                        handleDelete(e, donor.DonorID);
                                    }}>
                                        Delete
                                    </Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>}

        </Container>
    )
};

export default DonorList;