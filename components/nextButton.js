import Button from "react-bootstrap/Button";

function NextButton(props){
    return(
        <div className="tw-text-center">
            <br/>
            <Button href={props.prev} className="tw-mx-auto" size="lg" variant="dark">Prev</Button>{' '}
            <Button href={props.next} className="tw-mx-auto" size="lg" variant="dark">Next</Button>{' '}
            <br/>
        </div>
    );
}

export default NextButton;
