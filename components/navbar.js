import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';

function NavbarMine(props){
    //console.log(props)
    return(
        <div>
        <Navbar bg="" expand="lg">
          <Container>
            <Navbar.Brand href="/">{props.name}</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="/skills">Skills</Nav.Link>
                <Nav.Link href="/experience">Experience</Nav.Link>
                <Nav.Link href="/projects">Projects</Nav.Link>
                <Nav.Link href="/">Contact Me</Nav.Link>
                <NavDropdown title="Outside Links" id="basic-nav-dropdown">
                  <NavDropdown.Item rel="noreferrer" target="_blank" href="https://github.com/Junming-Qiu">Github</NavDropdown.Item>
                <NavDropdown.Divider/>
                  <NavDropdown.Item rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/junming-qiu-32b343191/">LinkedIn</NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
            {/* <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="mr-2"
                aria-label="Search"
              />
              <Button variant="outline-danger">Search</Button>
            </Form> */}
          </Container>
        </Navbar>
        </div>
    );
}

export default NavbarMine;