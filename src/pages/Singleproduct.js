import React, {useEffect, useState} from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useParams } from "react-router-dom";
import StarRatings from 'react-star-ratings';

function Singleproduct(){
    const params = useParams();
    const [ product, setproduct ] = useState();
    const [ loading, setloading ] = useState(true);
    const fetchProduct = async(id) => {
        const data = await fetch(`https://dummyjson.com/products/${id}`)
        const productdata = await data.json()
        setproduct(await productdata)
        if(await productdata.id>0){
            setloading(false)
        }
    }
    useEffect(()=>{
        fetchProduct(params.ProductId)
    },[loading]);
    return (
        <>
            <Header sitename={"My Space"}/>
                {!loading ?
                <section className="container">
                    <Container className='my-5 py-3'>
                        <Row>
                            <Col className='col-lg-6 col-md-6 col-12'>
                                <img src={product.images[0]} className="w-100" alt="product-image"/>
                            </Col>
                            <Col className='col-lg-6 col-md-6 col-12'>
                                <div className="product p-4 text-start">
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div className="d-flex align-items-center"> 
                                            <Link to="/product" className="nav-link p-0 text-muted">
                                                <i className="fa fa-long-arrow-left"></i> 
                                                <span className="ml-1">🡄 Back</span>
                                            </Link>
                                        </div> 
                                            <i className="fa fa-shopping-cart text-muted"></i>
                                    </div>
                                    <div className="mt-2 mb-3 text-start">
                                        <span className="text-uppercase text-muted brand">{product.brand}</span>
                                        <h4 className="text-uppercase mb-0">{product.title}</h4>
                                        <div className='product-rating mb-2'>
                                            <StarRatings
                                                rating={product.rating}
                                                starRatedColor="orange"
                                                numberOfStars={5}
                                                starDimension="20px" 
                                                starSpacing="2px"
                                                name='rating'
                                            />
                                        </div>
                                        <span className="sku  text-start">Sku : {product.sku}</span>
                                        <p className="shipping mb-0 text-start">{product.shippingInformation}</p>
                                        <div className="price d-flex flex-row align-items-center">
                                            <span className="act-price"><strong>₹{product.price}</strong></span>
                                        </div>
                                    </div>
                                    <p className="about  text-start">{product.description}</p>
                                    <img src={product.meta.qrCode} className='w-25' alt="qr-code"/>
                                    <div className="cart mt-4 text-start"> 
                                        <button className="btn btn-danger text-uppercase mr-2 px-4">Add to cart</button> <i className="fa fa-heart text-muted"></i> <i className="fa fa-share-alt text-muted"></i> 
                                    </div>                                    
                                </div>                                
                            </Col>
                        </Row>
                    </Container>
                </section>
                :<div className='loding d-flex  justify-content-center my-5'>
                    <div className="spinner-border text-success mr-4" role="status"></div>
                    <p style={{fontSize:"25px",margin:"0 0 0 10px"}}>Loading...</p>
                </div>}
            <Footer sitename="My Space"/>
        </>
    );
}

export default Singleproduct; 
