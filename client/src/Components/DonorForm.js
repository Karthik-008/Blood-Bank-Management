import React, { useState } from 'react';
import {Container, Row, Col, Card, Form, Alert, Button} from 'react-bootstrap';
import axios from 'axios';

const DonorForm = () => {
    const API_URL = 'http://localhost:5000';
    const bloodTypes = ["A+", "A-","B+","B-","O+","O-","AB+", "AB-"];

    const [formData, setFormData] = useState({
        'DonorID': '',
        'Name': '',
        'BloodType': '',
        'Contact': '',
        'LastDonation': ''
    });
    // console.log(`form - ${formData.LastDonation}`);

    const [message, setMessage] = useState('');
    const [submitSuccess, setSubmitSuccess] = useState(null);

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({...formData, [name]: value});
    };

    const handleSubmit = async(e) => {
        e.preventDefault();
        setMessage('');
        try{
            const response = await axios.post(`${API_URL}/donors`, formData);
            setMessage(response.data.message);
            setSubmitSuccess(true);
            setFormData({
                'DonorID': '',
                'Name': '',
                'BloodType': '',
                'Contact': '',
                'LastDonation': ''
            });
        }catch(error) {
            console.log(`Error submitting form`, error);
            setMessage(`${error.response?.data?.message} -> ${error.response?.data?.error}`);
            setSubmitSuccess(false);
        }
    };

    return (
        <>
        <Container className='mt-4'>
            <Row className='justify-content-center'>
                <Col md={8} lg={6}>
                    <Card>
                        <Card.Header className='text-center'>
                            Add Donor
                        </Card.Header>
                        <Card.Body>
                            <Form onSubmit={handleSubmit} autoComplete='off'>
                                {/* Donor ID */}
                                <Form.Group controlId='DonorID' className='mb-3'>
                                    <Form.Label>Donor ID</Form.Label>
                                    <Form.Control
                                        type='number'
                                        name='DonorID'
                                        value={formData.DonorID}
                                        placeholder='Enter Donor ID'
                                        onChange={handleChange}
                                        required
                                    />
                                </Form.Group>
                                {/* Name */}
                                <Form.Group controlId='Name' className='mb-3'>
                                    <Form.Label>Donor Name</Form.Label>
                                    <Form.Control
                                        type='text'
                                        name='Name'
                                        value={formData.Name}
                                        placeholder='Enter Name '
                                        onChange={handleChange}
                                        required
                                    />
                                </Form.Group>
                                {/* Blood type */}
                                <Form.Group controlId='BloodType' className='mb-3'>
                                    <Form.Label>BloodType</Form.Label>
                                    <Form.Select
                                        name='BloodType'
                                        value={formData.BloodType}
                                        onChange={handleChange}
                                        required
                                    >
                                        <option value="">Select BloodType</option>
                                        {bloodTypes.map((type) => (
                                            <option key={type} value={type}>{type}</option>
                                        ))}
                                    </Form.Select>
                                </Form.Group>
                                {/* Customer Contact */}
                                <Form.Group controlId='Contact' className='mb-3'>
                                    <Form.Label>Contact</Form.Label>
                                    <Form.Control
                                        type='number'
                                        name='Contact'
                                        value={formData.Contact}
                                        placeholder='Enter Donor Contact'
                                        onChange={handleChange}
                                        required
                                    />
                                </Form.Group>
                                {/* LastDonation */}
                                <Form.Group controlId='LastDonation' className='mb-3'>
                                    <Form.Label>Last Donation</Form.Label>
                                    <Form.Control
                                        type='date'
                                        name='LastDonation'
                                        value={formData.LastDonation}
                                        placeholder='LastDonation'
                                        onChange={handleChange}
                                        required
                                    />
                                </Form.Group>

                                <div className='d-grid gap-2'>
                                    <Button variant='primary' type='submit'>
                                        Submit
                                    </Button>
                                </div>
                            </Form>

                            {message && <Alert variant={submitSuccess===true?'success':'danger'}>
                                {message}
                            </Alert>}
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
        </>
    )
};

export default DonorForm;