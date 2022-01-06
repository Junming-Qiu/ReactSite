import Button from "react-bootstrap/Button";

function NextButton(props){
    return(
        <div className="nextbuttondiv">
            <br/>
            <Button href={props.prev} className="nextbutton" size="lg" variant="dark">Prev</Button>{' '}
            <Button href={props.next} className="nextbutton" size="lg" variant="dark">Next</Button>{' '}
            <br/>
        </div>
    );
}

export default NextButton;
