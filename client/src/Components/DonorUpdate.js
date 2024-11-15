import React, { useState } from 'react';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import axios from 'axios';

const DonorUpdate = ({ donor, onUpdate, setMessage }) => {
    const API_URL = 'http://localhost:5000';
    const bloodTypes = ["A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"];

    const [formData, setFormData] = useState(donor);

    // useEffect(() => {
    //     setFormData({...donor, LastDonation: donor.LastDonation.split("T")[0]});
    // }, []);

    console.log(`date -> ${formData.LastDonation}`)

    // const [message, setMessage] = useState('');
    // const [submitSuccess, setSubmitSuccess] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage('');
        try {
            const response = await axios.put(`${API_URL}/donors`, formData);
            setMessage(`${response.data.message} - ${response.data.donor.DonorID}`);
            console.log(response.data.message);
            // setSubmitSuccess(true);
        } catch (error) {
            console.log(`Error submitting form`, error);
            setMessage(error.response?.data?.message);
            // setSubmitSuccess(false);
        } finally {
            onUpdate();
        }
    };

    return (
        <>
            <Container className='mt-4'>
                <Row className='justify-content-center'>
                    <Col md={8} lg={6}>
                        <Card>
                            <Card.Header className='text-center'>
                                Update Donor Details
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
                                            readOnly
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
                                    <Row className="d-flex justify-content-center">
                                        <Col xs="auto">
                                            <Button variant="danger" onClick={onUpdate}>
                                                Cancel
                                            </Button>
                                        </Col>
                                        <Col xs="auto">
                                            <Button variant="primary" type="submit">
                                                Submit
                                            </Button>
                                        </Col>
                                    </Row>
                                </Form>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    )
};

export default DonorUpdate;