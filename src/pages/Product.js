import React, {useEffect, useState} from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Container, Row, Col } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import StarRatings from 'react-star-ratings';

function Product(){
    const [products, setProducts] = useState([]);
    const[loading,setloading]=useState(true)
    const fetchInfo = async() => { 
        const data=await fetch('https://dummyjson.com/products?limit=12&sortBy=id&order=desc') 
        const productsdata=await data.json()
        setProducts(await productsdata)
        if(await productsdata.products.length > 0){
            setloading(false)
        }
    }
    useEffect(() => {
        fetchInfo()
    }, [loading]);
    return (
        <>
            <Header sitename={"My Space"}/>
                {!loading ? 
                <section className="container">
                    <Container className='my-5 py-3'>
                        <Row>
                            <Col className='col-12 pb-5'>
                                <h4>Our Product's</h4>
                            </Col>
                            {products.products.map((variant, i) => {
                                const {title,description,price,discountPercentage,rating,thumbnail,id} = variant
                                    return <Col className='col-lg-3 col-md-6 col-12 mb-4' key={i}>
                                                <Card className='text-black'>
                                                    <Card.Body> 
                                                        <Link to={`/single/${id}`} className='text-decoration-none'>
                                                            <div className='product-img mb-3'>
                                                                <img className='w-100 h-100' style={{height:"170px"}} src={thumbnail} alt="product-img"/>
                                                            </div>
                                                            <div className='product-content'>
                                                                <div className="text-center">
                                                                    <h6 className="card-title text-start text-black">
                                                                        {title}                                                          
                                                                    </h6>
                                                                    <p className="text-muted mb-2 text-start text-small">{description.slice(0,40)}...</p>
                                                                </div>
                                                                <div>
                                                                    <div className="d-flex justify-content-between text-black">
                                                                        <div className='product-dis'>
                                                                            <span>Discount </span><span>{discountPercentage}%</span>                                                            
                                                                        </div>
                                                                        <div className='product-price'>
                                                                            <span>Price </span><span>₹{price}</span>                                                              
                                                                        </div>
                                                                    </div>

                                                                </div>
                                                                <div className="d-flex justify-content-between text-muted font-weight-bold mt-2">
                                                                    <StarRatings
                                                                        rating={rating}
                                                                        starRatedColor="orange"
                                                                        numberOfStars={5}
                                                                        starDimension="18px" 
                                                                        starSpacing="1px"
                                                                        name='rating'
                                                                    />
                                                                </div>
                                                            </div>
                                                        </Link>
                                                    </Card.Body>
                                                </Card>
                                            </Col>                                
                                    } 
                                )}
                        </Row>
                    </Container>
                </section>
                :
                <div className='loding d-flex  justify-content-center my-5'>
                    <div className="spinner-border text-success mr-4" role="status"></div>
                    <p style={{fontSize:"25px",margin:"0 0 0 10px"}}>Loading...</p>
                </div>}
            <Footer sitename="My Space"/>
        </>
    );
}

export default Product; 
