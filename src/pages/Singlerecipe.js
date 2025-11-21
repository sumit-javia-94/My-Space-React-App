import React, {useEffect,useState} from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import StarRatings from "react-star-ratings";

function Singlerecipe() {
    const params = useParams();
    const [ recipe, setRecipes ] = useState();
    const [ loading, setloading ] = useState(true);
    const fetchRecipes = async(id) => {
        const data = await fetch(`https://dummyjson.com/recipes/${id}`)
        const recipeData = await data.json()
        setRecipes(await recipeData)
        if(await recipeData.id > 0){
            setloading(false)
        }
    }
    useEffect(()=>{
        fetchRecipes(params.RecipesId)
    },[loading]);   
    console.log(recipe);
    return(
        <>
        <Header sitename={'My space'}/>
            {!loading ? 
                <section className="container">
                    <Container className='my-5 py-3'>
                        <Row>
                            <Col className='col-lg-6 col-md-6 col-12'>
                                <img src={recipe.image} className="w-100" alt="product-image"/>
                            </Col>
                            <Col className='col-lg-6 col-md-6 col-12'>
                                <div className="product p-4 text-start">
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div className="d-flex align-items-center"> 
                                            <Link to="/recipes" className="nav-link p-0 text-muted">
                                                <i className="fa fa-long-arrow-left"></i> 
                                                <span className="ml-1">🡄 Back</span>
                                            </Link>
                                        </div> 
                                            <i className="fa fa-shopping-cart text-muted"></i>
                                    </div>
                                    <div className="mt-2 mb-3 text-start">
                                        <span className="text-muted brand">{recipe.tags}</span>
                                        <h4 className="text-uppercase mb-0">{recipe.name}</h4>
                                        <div className='product-rating mb-2'>
                                            <StarRatings
                                                rating={recipe.rating}
                                                starRatedColor="orange"
                                                numberOfStars={5}
                                                starDimension="20px" 
                                                starSpacing="2px"
                                                name='rating'
                                            />
                                        </div>
                                        <p className="shipping mb-0 text-start">Viewers : {recipe.reviewCount}</p>
                                        <p className="shipping mb-0 text-start">Meal Type : {recipe.mealType}</p>
                                        <p className="shipping mb-0 text-start">Cuisine : {recipe.cuisine}</p>
                                        <p className="shipping mb-0 text-start">Difficulty : {recipe.difficulty}</p>
                                    </div>
                                    <div className="ingredients mb-3">
                                        <h6 className="about text-start mb-1">Ingredients ::</h6>
                                        <p className="about text-start mb-0">{recipe.ingredients}</p>
                                    </div>
                                    <div className="ingredients">
                                        <h6 className="about text-start mb-1">Instructions ::</h6>
                                        <p className="about text-start mb-0">{recipe.instructions}</p>
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
        <Footer sitename={'My space'}/>
        </>
    )
}

export default Singlerecipe;