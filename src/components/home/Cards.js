import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';

function Cards() {
  return (
    <section className='iwt-card-sec'>
        <Container className='my-5'>
            <Row>
                {[
                    'Success',
                    'Danger',
                    'Warning',
                    'Dark',
                ].map((variant, i) => (
                    <Col className={"col-lg-3 col-6 my-3"} key={i}>
                        <Card border={variant.toLowerCase()}>
                            <Card.Header><strong>{variant}</strong></Card.Header>
                            <Card.Body>
                                <Card.Title></Card.Title>
                                <Card.Text className='mb-3'>
                                    <strong>{variant}</strong>, Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    </section>
  );
}

export default Cards;