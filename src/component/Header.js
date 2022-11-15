import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const UserIcon = (
    <img
        src={"https://via.placeholder.com/45x45"}
        alt="UserName profile image"
        style={{
            height: '45px',
            width: '45px',
            marginLeft: '20px',
            borderRadius: '70%'
          }}
        // style={{ width: '45px' }}
    />
)


function Header() {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="/">IHCS PFWEB</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link href="/">Main</Nav.Link>
                        <Nav.Link href="/grade/3">3학년</Nav.Link>
                        <Nav.Link href="/grade/2">2학년</Nav.Link>
                        <Nav.Link href="/grade/1">1학년</Nav.Link>
                    </Nav>
                    <Form className="d-flex">
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button variant="outline-success" href="/search/">Search</Button>
                    </Form>
                    <label  style={{ marginLeft: '100px' }}>user name</label>
                    <NavDropdown title={UserIcon} id="basic-nav-dropdown">
                        <NavDropdown.Item href="/profile">내 프로필</NavDropdown.Item>
                        <NavDropdown.Item href="/portfolio/write">포트폴리오 작성</NavDropdown.Item>
                        <NavDropdown.Item href="/portfolio/manage">포트폴리오 관리</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="/lecture/create">강의 만들기</NavDropdown.Item>
                        <NavDropdown.Item href="/lecture/manage">강의 관리</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="/logout">로그아웃</NavDropdown.Item>
                    </NavDropdown>
                    {/* <img src="https://via.placeholder.com/45x45" alt="userIcon" style={{ marginLeft: '20px' }} className="icon" ></img> */}
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;