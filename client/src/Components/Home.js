import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Home = () => {

    return (
        <Container className='mt-4'>
            <Row className='justify-content-center'>
                <Col md={8} lg={6} className='justify-content-center'>
                    <Card>
                        <Card.Header className='text-center'>
                            Blood Bank Management System
                        </Card.Header>
                        <Card.Body className='d-grid gap-3 justify-content-center'>
                            <Link to='/add'>
                                <Button variant='primary' className='w-100'>
                                    Add Donor
                                </Button>
                            </Link>
                            <Link to='/view'>
                                <Button variant='warning' className='w-100'>
                                    View Donors
                                </Button>
                            </Link>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>

    );
};

export default Home;