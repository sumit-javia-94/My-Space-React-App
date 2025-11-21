import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Image from 'react-bootstrap/Image';
import bannerimage from '../assets/fluid-image.jpg';
import { Col, Container, Row, Button } from 'react-bootstrap';

function About() {
    const [textArray, setTextArray] = useState(["Lorem Ipsum", "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."]);    
    const [characterCount, setcharacterCount] = useState(["0","0"]);
    const [wordCount, setwordCount] = useState(["0","0"]);
    const handleTextTransform = (transformType) => {
        let newTextArray = [...textArray]; 
        let newCharacterCount = [...characterCount];
        let newWordCount = [...wordCount];
        switch (transformType) {
            case 'lower':
                newTextArray = newTextArray.map(text => text.toLowerCase());
                break;
            case 'upper':
                newTextArray = newTextArray.map(text => text.toUpperCase());
                break;
            case 'capitalize':
                newTextArray = newTextArray.map(text => text.replace(/\b\w/g, c => c.toUpperCase()));
                break;
            case 'countCharacters':
                newCharacterCount = newTextArray.map(text => text.length);
                break;
            case 'countWords':
                newWordCount = newTextArray.map(text => text.split(' ').length);
                break;
            default:
                break;
        }
        setTextArray(newTextArray);
        setcharacterCount(newCharacterCount); // Update the state with the new array
        setwordCount(newWordCount); // Update the state with the new array
    };

    return (
        <>
            <Header sitename={"My Space"} />
            <section className='my-5'>
                <Container className='py-5'>
                    <Row>
                        {}
                        <Col>
                            <Image className="w-100 h-100" src={bannerimage} alt="fluid-image" />
                        </Col>
                        <Col className='text-start'>
                            <h1 className='mb-3'>{textArray[0]}</h1>
                            <p>{textArray[1]}</p>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className='text-transform mb-5'>
                <Container className='pb-5'>
                    <h2 className='mb-5'>Text transform events</h2>
                    <Row>
                        <Col className='col-md-1'></Col>
                        <Col className='col-md-2'>
                            <Button variant="primary" onClick={() => handleTextTransform('lower')}>Convert to lower</Button>
                        </Col>
                        <Col className='col-md-2'>
                            <Button variant="secondary" onClick={() => handleTextTransform('upper')}>Convert to upper</Button>
                        </Col>
                        <Col className='col-md-2'>
                            <Button variant="success" onClick={() => handleTextTransform('capitalize')}>Convert to capitalized</Button>
                        </Col>
                        <Col className='col-md-2'>
                            <Button variant="warning" onClick={() => handleTextTransform('countCharacters')}>Character count</Button>
                        </Col>
                        <Col className='col-md-2'>
                            <Button variant="danger" onClick={() => handleTextTransform('countWords')}>Word count</Button>
                        </Col>
                        <Col className='col-md-1'></Col>
                    </Row>
                    <Row className='mt-4'>
                        <Col className='col-md-6'>
                            <p className='text-center mt-4'>
                                Heading count is : {characterCount[0]} &nbsp;&nbsp;&nbsp;
                                Descrition count is : {characterCount[1]}
                            </p>
                        </Col>
                        <Col className='col-md-6'>
                            <p className='text-center mt-4'>
                                Heading word count is : {wordCount[0]} &nbsp;&nbsp;&nbsp;
                                Descrition word count is : {wordCount[1]}
                            </p>
                        </Col>
                    </Row>

                </Container>
            </section>
            <Footer sitename="My Space"/>
        </>
    );
}

export default About;
