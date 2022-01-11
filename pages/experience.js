import NavbarMine from '../components/navbar.js';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import NextButton from '../components/nextButton.js';
import TimeLine from '../components/timeline.js';
import {MobileView, BrowserView} from 'react-device-detect';

import ExperienceInfo from '../public/experiences.json';
import { Container } from 'react-bootstrap';

function Experience(){

    return (
        <div>
            <NavbarMine name="Junming"/>

                <div className="card">
                    <div className="card-header">
                        <div className="profile">
                        <span className="letter">Ju</span>
                        </div>
                        <div className="card-title-group">
                        <h5 className="card-title">Experiences</h5>
                        <div className="card-date">Computer Science Student at NYU Tandon School of Engineering</div>
                        </div>
                    </div>
                    <BrowserView>
                        <TimeLine info={ExperienceInfo}/>
                    </BrowserView>

                    <MobileView>
                        <Container>
                            <Row className="cardBody">
                                <Col className="card-text mt-3" >
                                    <ul className="tw-list-disc">
                                        {ExperienceInfo.map(function(item){
                                            return (    
                                                <Row className="mb-3" key={item.name}>
                                                    <Row><h5>{item.name}</h5></Row>
                                                    <Row>
                                                        <Col><h6>{item.when}</h6></Col>
                                                        <Col xs lg="4"><h6>{item.where}</h6></Col>
                                                    </Row>
                                                    
                                                        <Row>

                                                            {item.desc.map(function(desc){
                                                            return (
                                                                <li key={desc}> 
                                                                    <h6>{desc}</h6>
                                                                </li>
                                                            )
                                                            })}
                                                            
                                                        </Row>
                                                    

                                                    <Row>
                                                        {item.links.map(function(link){
                                                            return (
                                                                <a key={link} rel="noreferrer" target="_blank" href={link}>Link to Project</a>
                                                            )
                                                        })}
                                                    </Row>
                                                </Row>
                                            )
                                        })}
                                    </ul>
                                </Col>
                            </Row>
                        </Container>
                    </MobileView>    
                </div>
  
            <NextButton prev="/skills" next="/projects"/>
            <br/><br/>
        </div>
    );
}

export default Experience;