import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav'
import Image from 'react-bootstrap/Image';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Button from 'react-bootstrap/Button';

function PhotoGallery() {
    return (

        <Container fluid style={{ padding: '2vw' }}>
            <Row style={{ marginBottom: '1vw' }}>
                <Col>
                    <div className="title-bar d-flex flex-column flex-md-row gap-0 gap-md-4" style={{ justifyContent: 'center' }}>
                        <Link to='/' className='h1 corinthia-bold text-center' style={{ color: '#F3F0EC', marginBottom: 0, alignSelf: 'center', textDecoration: 'none' }}>
                            Ballroom Dance Club
                        </Link>
                        <Link to='/' className='p' style={{ color: '#F3F0EC', margin: 0, alignSelf: 'center', textDecoration: 'none' }}>
                            AT UNIVERSITY OF HAWAII
                        </Link>
                    </div>
                </Col>
            </Row>
            <Row fluid style={{ paddingLeft: '8vw', paddingRight: '8vw', marginBottom: '2vw' }}>
                <hr style={{ color: '#F3F0EC', height: '2px', opacity: 0.8, margin: 0, marginBottom: '1vw' }}
                />
                <Nav style={{ justifyContent: 'space-between' }}>
                    <Nav.Link as={Link} to='/about'>
                        ABOUT
                    </Nav.Link>
                    <Nav.Link as={Link} to='/howtojoin'>
                        HOW TO JOIN
                    </Nav.Link>
                    <Nav.Link as={Link} to='/fornewperformers'>
                        FOR NEW PERFORMERS
                    </Nav.Link>
                    <Nav.Link as={Link} to='/inthenews'>
                        IN THE NEWS
                    </Nav.Link>
                    <Nav.Link as={Link} to='/photogallery'>
                        PHOTO GALLERY
                    </Nav.Link>
                </Nav>
            </Row>

            <Container>
                <Row className="my-4 what-we-do" style={{ 'marginLeft': 'none' }}>
                    <h1 style={{ color: '#F3F0EC' }}>
                        Photo Gallery
                    </h1>
                    <Col xs={{ span: 12, order: 1 }} md={{ span: 6, order: 2 }} style={{ color: '#F3F0EC' }}>
                        <div style={{ padding: '2vw', marginBottom: '2vw' }}>
                            <p style={{ fontSize: 'calc(1rem+0.1vw)' }}>
                                &#x1F6A7; Under construction...
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </Container>
    )
}

export default PhotoGallery;