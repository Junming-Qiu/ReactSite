import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// import Carousel from "react-bootstrap/Carousel";
import Image from "next/image";
import profilepic from '../public/profile.jpg';
import bio from '../public/bio.json';
import Button from "react-bootstrap/Button";

function BioCard(props){
    
    return(
        <div>
            <div className="card">
                <div className="card-header">
                    <div className="profile">
                    <span className="letter">Ju</span>
                    </div>
                    <div className="card-title-group">
                    <h5 className="card-title">Junming Qiu</h5>
                    <div className="card-date">Computer Science Student at NYU Tandon School of Engineering</div>
                    </div>
                </div>

                <Container>
                    <Row className="cardbody">
                        <Col className="image-gallery" md={{span:10, offset:1}} xl={{span:5, offset:0}}>
                            <Image
                                src={profilepic}       
                                alt="Profile Pic"
                                className="d-block w-100"
                            />
                            {/* <Carousel className="carousel">
                                <Carousel.Item interval={100000}>
                                    <a href="/">
                                    <Image
                                    src={profilepic}       
                                    alt="Profile Pic"
                                    className="d-block w-100"
                                    />
                                    </a>
                                    <Carousel.Caption>
                                    <h3>Education</h3>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item interval={100000}>
                                    <img
                                    className="d-block w-100"
                                    src="https://i.insider.com/60144316a7c0c4001991dde6?width=1000&format=jpeg&auto=webp"
                                    alt="Second slide"
                                    />
                                    <Carousel.Caption>
                                    <h3>Experience</h3>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item interval={100000}>
                                    <img
                                    className="d-block w-100"
                                    src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/bike-in-new-york-city-royalty-free-image-947974940-1539198438.jpg"
                                    alt="Third slide"
                                    />
                                    <Carousel.Caption>
                                    <h3>Hobbies</h3>
                                    </Carousel.Caption>
                                </Carousel.Item>
                            </Carousel> */}
                        </Col>
                        <Col className="card-text">
                            <h2>About Me</h2>
                            {bio.data1}
                            <br/><br/>
                            {bio.data2}
                        </Col>
                    </Row>
                    <Row>
                        <p>
                            {bio.data3}
                        </p>
                        <h6>
                            Contact Me: <Button variant="link" onClick={() => {
                                navigator.clipboard.writeText(bio.contact)
                                }}>
                                            {bio.contact}
                                        </Button>
                        </h6>
                    </Row>
                </Container>
                </div>

        </div>
    );
}

export default BioCard;