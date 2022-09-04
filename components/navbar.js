import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavbarMine(props){
    //console.log(props)
    return(
        <div>
        <Navbar bg="" expand="lg" fixed="top" className='tw-pt-2 tw-bg-amber-100'>
          <Container>
            <Navbar.Brand href="#intro">{props.name}</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#projects">Projects</Nav.Link>
                <Nav.Link href="#skills">Skills</Nav.Link>
                <Nav.Link href="#experience">Experience</Nav.Link>
                <Nav.Link href="#biocard">Contact Me</Nav.Link>
                <NavDropdown title="Outside Links" id="basic-nav-dropdown">
                  <NavDropdown.Item rel="noreferrer" target="_blank" href="https://github.com/Junming-Qiu">Github</NavDropdown.Item>
                <NavDropdown.Divider/>
                  <NavDropdown.Item rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/junming-qiu-32b343191/">LinkedIn</NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        </div>
    );
}

export default NavbarMine;