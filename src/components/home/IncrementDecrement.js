import React, {useState} from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';

function IncrementDecrement() {
    const IncrementHandle = (prevNumber) => {
        setNumberCount(number+1)
    }

    const DecrementHandle = (prevNumber) => {
        if(number===0){
            return 
        }
        setNumberCount(number-1)
    }

    const [number, setNumberCount] = useState(0)
    return (
        <>
            <section className='iwt-incdec-sec'>
                    <Container className='my-5'>
                        <h1 className='mb-5'>Here Is Increment & Decrement Operation...!</h1>
                        <Row>
                            <Col className='col-md-4 py-5'>
                                <Button className="btn btn-danger" onClick={DecrementHandle}> Decrement </Button>
                            </Col>
                            <Col className='col-md-4 px-5'>
                                <h1 className='bg-secondary mx-5 text-white rounded p-5'>{number}</h1>
                            </Col>
                            <Col className='col-md-4 py-5'>
                                <Button className="btn btn-success" onClick={IncrementHandle}> Increment </Button>
                            </Col>
                        </Row>
                    </Container>
            </section>

        </>        
    );
}

export default IncrementDecrement;