import React, {useEffect, useState} from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Container, Row, Col } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import StarRatings from 'react-star-ratings';

function Recipes(){
    const [recipesData, setRecipes] = useState([]);
    const[loading,setloading]=useState(true)
    const fetchRecipes = async() => { 
        const data=await fetch('https://dummyjson.com/recipes?limit=12&sortBy=id&order=desc') 
        const recipesData=await data.json()
        setRecipes(await recipesData)
        if(await recipesData.recipes.length > 0){
            setloading(false)
        }
    }
    useEffect(() => {
        fetchRecipes()
    }, [loading]);
    return (
        <>
            <Header sitename={"My Space"}/>
                {!loading ? 
                <section className="container">
                    <Container className='my-5 py-3'>
                        <Row>
                            <Col className='col-12 pb-5'>
                                <h4>Our Recipes</h4>
                            </Col>
                            {recipesData.recipes.map((variant, i) => {
                                const {id,name,cuisine,image,rating,mealType} = variant
                                    return <Col className='col-lg-3 col-md-6 col-12 mb-4' key={i}>
                                                <Card className='text-black'>
                                                    <Card.Body> 
                                                        <Link to={`/single-recipe/${id}`} className='text-decoration-none'>
                                                            <div className='product-img mb-3'>
                                                                <img className='w-100 h-100' style={{height:"170px"}} src={image} alt="product-img"/>
                                                            </div>
                                                            <div className='product-content'>
                                                                <div className="text-center">
                                                                    <h6 className="card-title text-start text-black">
                                                                        {name}                                                          
                                                                    </h6>
                                                                </div>
                                                                <div className="text-black text-start">
                                                                    <p className='meal-type mb-0'>Meal type : {mealType}</p>                                                            
                                                                    <p className='cuisine-type mb-0'>Cuisine : {cuisine}</p>                                          
                                                                </div>
                                                                <div className="d-flex justify-content-between">
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

export default Recipes; 
