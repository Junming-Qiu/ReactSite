import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// import Carousel from "react-bootstrap/Carousel";
import Image from "next/image";
import profilepic from '../public/profile.jpg';
import bio from '../public/bio.json';
import Button from "react-bootstrap/Button";
import {useState} from 'react';

function BioCard(props){
    const [copied, setCopied] = useState(false)
    return(
        <div id="biocard">
            <div className="card">
                <div className="card-header">
                    <div className="profile">
                    <span className="letter">A</span>
                    </div>
                    <div className="card-title-group">
                    <h5 className="card-title">About Me</h5>
                    <div className="card-date">Who I Am</div>
                    </div>
                </div>

                <Container>
                    <Row className="cardbody">
                        <Col className="image-gallery" md={{span:10, offset:1}} xl={{span:5, offset:0}}>
                            <Image
                                src={profilepic}       
                                alt="Profile Pic"
                                className="d-block w-100"
                                height={350}
                                width={500}
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
                            {bio.data1}
                            <br/><br/>
                            {bio.data2}
                        </Col>
                    </Row>
                    <Row>
                        <p>
                            {bio.data3}
                        </p>
                        <div className="tw-flex">
                            <h6>
                                Contact Me: <Button variant="link" onClick={() => {
                                    navigator.clipboard.writeText(bio.contact)
                                    setCopied(true)
                                    
                                    }}>
                                                {bio.contact}
                                            </Button>
                            </h6>
                            {copied ? <div><p className="tw-border-4 tw-w-24 tw-text-center">Copied</p></div> : <div/>}
                        </div>
                    </Row>
                </Container>
                </div>
            <br/> 
        </div>
    );
}

export default BioCard;