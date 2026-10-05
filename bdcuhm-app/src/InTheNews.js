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

import midweek from './images/midweek.jpg';
import shallwedance from './images/shall_we_dance.jpg';
import collegiatenationals2 from './images/collegiate_nationals_2.jpg';
import nationals2025 from './images/2025_nationals_team.jpg';
import nationals2025_group from './images/2025nationals.JPG';
import ys_dl from './images/ys_dl_triblive.jpg';
import ava_mayumi from './images/ava_mayumi.jpeg';
import synthia_volunteer from './images/synthia_volunteer.jpg';
import just_dance from './images/just_dance.jpeg';
import sydney_alex from './images/sydney_alex.jpg';
import chris_wen from './images/chris_wen.jpg';
import paradise from './images/paradise.jpg';
import andrea_article from './images/andrea_article.jpg';
import gen_1_nationals from './images/gen_1_nationals.jpg';
import elijah_michaella from './images/elijah_michaella.webp';
import inn from './images/inn.png';
import fathers_day from './images/fathers_day.jpeg';
import winter2022 from './images/winter2022.jpg';
import hpr_interview from './images/hpr_interview.webp';

function InTheNews() {
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
                    <Nav.Link>
                        FOR NEW PERFORMERS
                    </Nav.Link>
                    <Nav.Link as={Link} to='/inthenews'>
                        IN THE NEWS
                    </Nav.Link>
                    <Nav.Link>
                        PHOTO GALLERY
                    </Nav.Link>
                </Nav>
            </Row>
            <Row style={{ display: 'flex', justifyContent: 'center' }} className='p-4'>
                <Col xs={18} md={9}>
                    <div style={{ backgroundColor: '#F3F0EC', color: '#201D1D' }} className='p-3 p-md-4'>
                        <h2>
                            BDC @ UH in the News!
                        </h2>
                        <br />
                        &#x1F3A5; We have been very fortunate to be featured in many media publications, including newspaper articles, a radio interview, and digital articles! These include stories written by our students about their own experiences.
                        <br></br> <br></br>
                        We are proud to share these publications that have been viewed nationwide.
                    </div>

                </Col>
            </Row>

            <Row style={{ display: 'flex', justifyContent: 'center' }} className='p-4 p-md-3' >
                <Col xs={18} md={9}>
                    <Tabs
                        defaultActiveKey="2026"
                        id="news-articles-tabs"
                        className="mb-4">
                        <Tab eventKey="2026" title="2026">
                            <Row xs={1} md={2} lg={3} className='g-4'>
                                <Col>
                                    <Card className='h-100'>
                                        <Card.Img variant="top" src={midweek} />
                                        <Card.Body>
                                            <Card.Title>Let's Dance</Card.Title>
                                            <Card.Text>
                                                <i>Via Midweek.</i> It’s a rare occasion when a team goes for a three-peat — a term first popularized by the head coach of the Los Angeles Lakers, Pat Riley, in the late 1980s...
                                            </Card.Text>
                                            <Button className='card-button' href='https://www.midweek.com/lets-dance/' >Keep Reading</Button>
                                        </Card.Body>
                                    </Card>
                                </Col>

                                <Col>
                                    <Card className='h-100'>
                                        <Card.Img variant="top" src={shallwedance} />
                                        <Card.Body>
                                            <Card.Title>Shall we dance? 1-2-3 national championships for UH ballroom dance team
                                            </Card.Title>
                                            <Card.Text>
                                                <i>Via UH News.</i> The University of Hawaiʻi at Mānoa ballroom dance team won its third consecutive national title at the National Collegiate DanceSport Championships (NCDC), in Pittsburgh, Pennsylvania, March 27–29.
                                            </Card.Text>
                                            <Button className='card-button' href='https://www.hawaii.edu/news/2026/04/07/ballroom-dance-national-champs-2026/'>Keep Reading</Button>
                                        </Card.Body>
                                    </Card>
                                </Col>

                                <Col>
                                    <Card className='h-100'>
                                        <Card.Img variant="top" src={collegiatenationals2} />
                                        <Card.Body>
                                            <Card.Title>Collegiate Nationals – The College Team Perspective</Card.Title>
                                            <Card.Text>
                                                <i>Via American Dancer.</i> The University of Hawaii dancers discuss the National Championships and invite everyone to join them.
                                            </Card.Text>
                                            <Button className='card-button' href='https://americandancer.org/collegiate-nationals-2/'>Keep Reading</Button>
                                        </Card.Body>
                                    </Card>
                                </Col>


                            </Row>

                        </Tab>
                        <Tab eventKey="2025" title="2025">
                            <Row xs={1} md={2} lg={3} className='g-4'>
                                <Col>
                                    <Card className='h-100'>
                                        <Card.Img variant="top" src={synthia_volunteer} />
                                        <Card.Body>
                                            <Card.Title>Synthia Sumukti – Volunteer of the Year!</Card.Title>
                                            <Card.Text>
                                                <i>By Michelle Leano via American Dancer.</i> The Honolulu Chapter of USA Dance has made a tremendous turnaround over the past two years under the vision and efforts of Chapter Vice President Synthia Sumukti...
                                            </Card.Text>
                                            <Button className='card-button' href='https://americandancer.org/synthia-sumukti-volunteer/'>Keep Reading</Button>
                                        </Card.Body>
                                    </Card>
                                </Col>

                                <Col>
                                    <Card className='h-100'>
                                        <Card.Img variant="top" src={hpr_interview} />
                                        <Card.Body>
                                            <Card.Title>UH Mānoa ballroom dance club reflects on defending national title
                                            </Card.Title>
                                            <Card.Text>
                                                <i>Via Hawaii Public Radio.</i> Hula takes the stage Thursday night at the 62nd annual Merrie Monarch Festival in Hilo, beginning with the Miss Aloha Hula competition. As we celebrate artistry and tradition, we thought we'd highlight another group of award-winning dancers competing at the highest levels...
                                            </Card.Text>
                                            <Button className='card-button' href='https://www.hawaiipublicradio.org/the-conversation/2025-04-24/uh-manoa-ballroom-dance-club-reflects-on-defending-national-title' >Listen Here</Button>
                                        </Card.Body>
                                    </Card>
                                </Col>

                                <Col>
                                    <Card className='h-100'>
                                        <Card.Img variant="top" src={nationals2025} />
                                        <Card.Body>
                                            <Card.Title>UH Mānoa Ballroom Dance Club defends national title
                                            </Card.Title>
                                            <Card.Text>
                                                <i>Via UH News.</i> The Ballroom Dance Club at the University of Hawaiʻi at Mānoa defended its national championship at the National Collegiate DanceSport Championships (NCDC), in Pittsburgh, Pennsylvania, March 28–30.
                                            </Card.Text>
                                            <Button className='card-button' href='https://www.hawaii.edu/news/2025/04/10/ballroom-dance-club-defends-title/' >Keep Reading</Button>
                                        </Card.Body>
                                    </Card>
                                </Col>

                                <Col>
                                    <Card className='h-100'>
                                        <Card.Img variant="top" src={nationals2025_group} />
                                        <Card.Body>
                                            <Card.Title>HNN This is Now: News Feature
                                            </Card.Title>
                                            <Card.Text>
                                                <i>Via Hawaii News Now.</i> BDC@UH is featured on Hawaii News Now after claiming first place at the 2025 USA Dance Collegiate Nationals.
                                            </Card.Text>
                                            <Button className='card-button' href='https://youtu.be/c9lVaSaL9ok?t=1554'>Watch Here</Button>
                                        </Card.Body>
                                    </Card>
                                </Col>

                                <Col>
                                    <Card className='h-100'>
                                        <Card.Img variant="top" src={ys_dl} />
                                        <Card.Body>
                                            <Card.Title>Poetry in motion: National ballroom dancing competition makes Pittsburgh swing</Card.Title>
                                            <Card.Text>
                                                <i>Via TribLive.</i> If there’s a more enjoyable form of exercise than ballroom dancing, Joseph Britt hasn’t discovered it yet...
                                            </Card.Text>
                                            <Button className='card-button' href='https://triblive.com/lifestyles/outandabout/poetry-in-motion-national-ballroom-dancing-competition-makes-pittsburgh-swing/'>Keep Reading</Button>
                                        </Card.Body>
                                    </Card>
                                </Col>

                                <Col>
                                    <Card className='h-100'>
                                        <Card.Img variant="top" src={ava_mayumi} />
                                        <Card.Body>
                                            <Card.Title>Learning To Slow Down</Card.Title>
                                            <Card.Text>
                                                <i>By Ava Thomas via American Dancer.</i> Growing up in suburban Texas, everything was always a competition.  When you’re a fish in the sea of almost 4,000 high school students, your entire world is dedicated to making a name for yourself...
                                            </Card.Text>
                                            <Button className='card-button' href='https://americandancer.org/slow-down/'>Keep Reading</Button>
                                        </Card.Body>
                                    </Card>
                                </Col>


                            </Row>
                        </Tab>
                        <Tab eventKey="2024 AND OLDER" title="2024 AND OLDER">
                            <Row xs={1} md={2} lg={3} className='g-4'>
                                <Col>
                                    <Card className='h-100'>
                                        <Card.Img variant="top" src={just_dance} />
                                        <Card.Body>
                                            <Card.Title>Just Dance</Card.Title>
                                            <Card.Text>
                                                <i>By Michaella Villanueva via American Dancer.</i> Before flying in for the 2024 USA Dance Nationals, I had made up my mind that it would be my last ballroom competition. I started ballroom last year through a club at my university...
                                            </Card.Text>
                                            <Button className='card-button' href='https://americandancer.org/just-dance/'>Keep Reading</Button>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col>
                                    <Card className='h-100'>
                                        <Card.Img variant="top" src={sydney_alex} />
                                        <Card.Body>
                                            <Card.Title>Learning the Joy of Ballroom
                                            </Card.Title>
                                            <Card.Text>
                                                <i>By Sydney Kim via American Dancer.</i> I grew up in Hilo, a small town on the Big Island of Hawai’i with a population of less than 50,000. Hilo is the opposite of what most people think of when they think of Hawai’i...
                                            </Card.Text>
                                            <Button className='card-button' href='https://americandancer.org/joy-of-ballroom/' >Keep Reading</Button>
                                        </Card.Body>
                                    </Card>
                                </Col>

                                <Col>
                                    <Card className='h-100'>
                                        <Card.Img variant="top" src={chris_wen} />
                                        <Card.Body>
                                            <Card.Title>Ball Sports to Ballroom
                                            </Card.Title>
                                            <Card.Text>
                                                <i>By Chris Ramirez via American Dancer.</i> As a person who comes from ball sports like soccer and volleyball, ballroom dancing was never expected in my life.  From a young age, I started playing soccer, and it became my passion...
                                            </Card.Text>
                                            <Button className='card-button' href='https://americandancer.org/ball-ballroom/'>Keep Reading</Button>
                                        </Card.Body>
                                    </Card>
                                </Col>

                                <Col>
                                    <Card className='h-100'>
                                        <Card.Img variant="top" src={paradise} />
                                        <Card.Body>
                                            <Card.Title>My Little Paradise in Paradise</Card.Title>
                                            <Card.Text>
                                                <i>By Elijah Saloma via American Dancer.</i> What do you think of when you hear the word, “Hawai’i”? Glistening beaches of clear ocean, stunning sunsets, and towering mountains of green. Hawai’i is seen as a paradise, and for good reason...
                                            </Card.Text>
                                            <Button className='card-button' href='https://americandancer.org/paradise/'>Keep Reading</Button>
                                        </Card.Body>
                                    </Card>
                                </Col>

                                <Col>
                                    <Card className='h-100'>
                                        <Card.Img variant="top" src={andrea_article} />
                                        <Card.Body>
                                            <Card.Title>From Ballet to Ballroom</Card.Title>
                                            <Card.Text>
                                                <i>By Andrea Siochi via American Dancer.</i> My mom likes to say I came out of the womb with a tutu and a pair of pointe shoes. Ever since I can remember I’ve always wanted to dance...
                                            </Card.Text>
                                            <Button className='card-button' href='https://americandancer.org/ballet-ballroom/'>Keep Reading</Button>
                                        </Card.Body>
                                    </Card>
                                </Col>

                                <Col>
                                    <Card className='h-100'>
                                        <Card.Img variant="top" src={gen_1_nationals} />
                                        <Card.Body>
                                            <Card.Title>Waltzing into a national title: UH Mānoa ballroom team wins in rookie season</Card.Title>
                                            <Card.Text>
                                                <i>Via UH News.</i> With waltzes, foxtrots and chachas, the 10-student Ballroom Dance Club at the University of Hawaiʻi at Mānoa captured a national championship, just 18 months after the organization’s inception.
                                            </Card.Text>
                                            <Button className='card-button' href='https://www.hawaii.edu/news/2024/03/28/ballroom-dance-club-national-title/'>Keep Reading</Button>
                                        </Card.Body>
                                    </Card>
                                </Col>

                                <Col>
                                    <Card className='h-100'>
                                        <Card.Img variant="top" src={elijah_michaella} />
                                        <Card.Body>
                                            <Card.Title>UH Manoa’s ballroom team waltzes away with national title at first competition</Card.Title>
                                            <Card.Text>
                                                <i>Via KHON2 News.</i> With no prior experience and never having competed in a collegiate-level ballroom competition, UH Manoa’s ballroom team was shocked to hear their name called on the mic for the first place award...
                                            </Card.Text>
                                            <Button className='card-button' href='https://www.khon2.com/top-stories/uh-manoas-ballroom-team-waltzes-away-with-national-title-at-first-competition/'>Keep Reading</Button>
                                        </Card.Body>
                                    </Card>
                                </Col>

                                <Col>
                                    <Card className='h-100'>
                                        <Card.Img variant="top" src={inn} />
                                        <Card.Body>
                                            <Card.Title>Island News Now Shakas and Shouts: News Feature</Card.Title>
                                            <Card.Text>
                                                <i>Via Island News Now.</i> 10 students with the University of Hawaiʻi - Mānoa win the National Collegiate Dancesport Championships.
                                            </Card.Text>
                                            <Button className='card-button' href='https://www.youtube.com/watch?v=B-jTvTQB3XM'>Watch Here</Button>
                                        </Card.Body>
                                    </Card>
                                </Col>

                                <Col>
                                    <Card className='h-100'>
                                        <Card.Img variant="top" src={fathers_day} />
                                        <Card.Body>
                                            <Card.Title>Happy Fathers' Day</Card.Title>
                                            <Card.Text>
                                                <i>Via American Dancer.</i> Pictured here is American Dancer’s Honorary "2023 Father of the Year," Ravi Narayan, who competed at the 2023 Nationals with both his wife, Synthia, and his daughter, Prita!
                                            </Card.Text>
                                            <Button className='card-button' href='https://americandancer.org/honor-your-father-on-fathers-day/'>Keep Reading</Button>
                                        </Card.Body>
                                    </Card>
                                </Col>

                                <Col>
                                    <Card className='h-100'>
                                        <Card.Img variant="top" src={winter2022} />
                                        <Card.Body>
                                            <Card.Title>Inspiring the Next Generation</Card.Title>
                                            <Card.Text>
                                                <i>By Ravi Narayan via American Dancer.</i> Fourteen college students performed for the first time at the December 2022 Holiday Dance hosted by the Honolulu Chapter of USA Dance...
                                            </Card.Text>
                                            <Button className='card-button' href='https://americandancer.org/inspiring-the-next-generation/'>Keep Reading</Button>
                                        </Card.Body>
                                    </Card>
                                </Col>

                                <Col>
                                    <Card className='h-100'>
                                        <Card.Img variant="top" src={fathers_day} />
                                        <Card.Body>
                                            <Card.Title>It takes THREE to Tango!</Card.Title>
                                            <Card.Text>
                                                <i>By Ravi Narayan and Synthia Sumukti via American Dancer.</i> It was wonderful to compete once again as a family at USA Dance Nationals 2022 in Pittsburgh, April 1-3, and see many of our friends and fellow competitors...
                                            </Card.Text>
                                            <Button className='card-button' href='https://americandancer.org/it-takes-three-to-tango/'>Keep Reading</Button>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>

                        </Tab>
                        <Tab eventKey="STUDENT WORKS" title="STUDENT WORKS">
                            <Row xs={1} md={2} lg={3} className='g-4'>
                                <Col>
                                    <Card className='h-100'>
                                        <Card.Img variant="top" src={synthia_volunteer} />
                                        <Card.Body>
                                            <Card.Title>Synthia Sumukti – Volunteer of the Year!</Card.Title>
                                            <Card.Text>
                                                <i>By Michelle Leano via American Dancer.</i> The Honolulu Chapter of USA Dance has made a tremendous turnaround over the past two years under the vision and efforts of Chapter Vice President Synthia Sumukti...
                                            </Card.Text>
                                            <Button className='card-button' href='https://americandancer.org/synthia-sumukti-volunteer/'>Keep Reading</Button>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col>
                                    <Card className='h-100'>
                                        <Card.Img variant="top" src={ava_mayumi} />
                                        <Card.Body>
                                            <Card.Title>Learning To Slow Down</Card.Title>
                                            <Card.Text>
                                                <i>By Ava Thomas via American Dancer.</i> Growing up in suburban Texas, everything was always a competition.  When you’re a fish in the sea of almost 4,000 high school students, your entire world is dedicated to making a name for yourself...
                                            </Card.Text>
                                            <Button className='card-button' href='https://americandancer.org/slow-down/'>Keep Reading</Button>
                                        </Card.Body>
                                    </Card>
                                </Col>

                                <Col>
                                    <Card className='h-100'>
                                        <Card.Img variant="top" src={just_dance} />
                                        <Card.Body>
                                            <Card.Title>Just Dance</Card.Title>
                                            <Card.Text>
                                                <i>By Michaella Villanueva via American Dancer.</i> Before flying in for the 2024 USA Dance Nationals, I had made up my mind that it would be my last ballroom competition. I started ballroom last year through a club at my university...
                                            </Card.Text>
                                            <Button className='card-button' href='https://americandancer.org/just-dance/'>Keep Reading</Button>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col>
                                    <Card className='h-100'>
                                        <Card.Img variant="top" src={sydney_alex} />
                                        <Card.Body>
                                            <Card.Title>Learning the Joy of Ballroom
                                            </Card.Title>
                                            <Card.Text>
                                                <i>By Sydney Kim via American Dancer.</i> I grew up in Hilo, a small town on the Big Island of Hawai’i with a population of less than 50,000. Hilo is the opposite of what most people think of when they think of Hawai’i...
                                            </Card.Text>
                                            <Button className='card-button' href='https://americandancer.org/joy-of-ballroom/' >Keep Reading</Button>
                                        </Card.Body>
                                    </Card>
                                </Col>

                                <Col>
                                    <Card className='h-100'>
                                        <Card.Img variant="top" src={chris_wen} />
                                        <Card.Body>
                                            <Card.Title>Ball Sports to Ballroom
                                            </Card.Title>
                                            <Card.Text>
                                                <i>By Chris Ramirez via American Dancer.</i> As a person who comes from ball sports like soccer and volleyball, ballroom dancing was never expected in my life.  From a young age, I started playing soccer, and it became my passion...
                                            </Card.Text>
                                            <Button className='card-button' href='https://americandancer.org/ball-ballroom/'>Keep Reading</Button>
                                        </Card.Body>
                                    </Card>
                                </Col>

                                <Col>
                                    <Card className='h-100'>
                                        <Card.Img variant="top" src={paradise} />
                                        <Card.Body>
                                            <Card.Title>My Little Paradise in Paradise</Card.Title>
                                            <Card.Text>
                                                <i>By Elijah Saloma via American Dancer.</i> What do you think of when you hear the word, “Hawai’i”? Glistening beaches of clear ocean, stunning sunsets, and towering mountains of green. Hawai’i is seen as a paradise, and for good reason...
                                            </Card.Text>
                                            <Button className='card-button' href='https://americandancer.org/paradise/'>Keep Reading</Button>
                                        </Card.Body>
                                    </Card>
                                </Col>

                                <Col>
                                    <Card className='h-100'>
                                        <Card.Img variant="top" src={andrea_article} />
                                        <Card.Body>
                                            <Card.Title>From Ballet to Ballroom</Card.Title>
                                            <Card.Text>
                                                <i>By Andrea Siochi via American Dancer.</i> My mom likes to say I came out of the womb with a tutu and a pair of pointe shoes. Ever since I can remember I’ve always wanted to dance...
                                            </Card.Text>
                                            <Button className='card-button' href='https://americandancer.org/ballet-ballroom/'>Keep Reading</Button>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                        </Tab>

                    </Tabs>
                </Col>
            </Row>
        </Container>


    );
}

export default InTheNews;