import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function DefaultCard(props){
    return(
        <div>
            <div className="card">
                <div className="card-header">
                    <div className="profile">
                    <span className="letter">Ju</span>
                    </div>
                    <div className="card-title-group">
                    <h5 className="card-title">{props.title}</h5>
                    <div className="card-date">{props.desc}</div>
                    </div>
                </div>

                <Container>
                    <Row className="cardbody">
                        {props.content.map(function(content){
                            return (
                                <Col 
                                    key="1" 
                                    md={{span:10, offset:1}} xl={{span:5, offset:0}}
                                >

                                    {content}
                                </Col>
                            )
                        })}
                        
                        <Col className="card-text mt-3" >
                            <ul className="tw-list-disc">
                                {props.info.map(function(item){
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
            </div>
        </div>
    );
}

export default DefaultCard;