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

import spring_2024_formation from './images/spring_2024_formation.jpg';
import star_scorpio from './images/star_scorpio.jpeg';
import ldae_leatherette from './images/ldae_leatherette.avif';
import amazon_rosemoli from './images/amazon_rosemoli.jpg';
import star_mens from './images/star_mens.jpeg';
import ldae_mb01 from './images/ldae_mb01.avif';
import amazon_leads from './images/amazon_leads.jpg';

function ForNewPerformers() {
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
                        For New Performers
                    </h1>
                    <Col xs={{ span: 12, order: 1 }} md={{ span: 6, order: 2 }} style={{ color: '#F3F0EC' }}>
                        <div style={{ padding: '2vw', marginBottom: '2vw' }}>
                            <p style={{ fontSize: 'calc(1rem+0.1vw)' }}>
                                The Ballroom Dance Club at UH Manoa offers multiple opportunities to perform per year, including formation performances and competitions. Performing is completely optional, but are excellent ways to improve dancing skills, learn cooperation with a partner, and bond with others in the club.
                            </p>
                            <b></b>
                            <p>
                                It is recommended for dancers to participate in a formation performance before deciding to compete.
                            </p>

                            <p>We have at least two formation performances every year, <b> one in May (evening of Spring Graduation &#x1F490;) and one in December (evening of Winter Graduation &#x2744;&#xfe0f;).</b> Performers are expected to attend classes and rehearsals with minimal absences.</p>

                            <b>&#x2728; Please view the important information and resources below! </b>
                        </div>
                    </Col>

                    <Col xs={{ span: 12, order: 1 }} md={{ span: 6, order: 2 }} className='photo-area' >
                        <Image src={spring_2024_formation} fluid />
                    </Col>
                </Row>
            </Container>

            <Container>
                <Row style={{ display: 'flex', justifyContent: 'center' }}>
                    <Col>
                        <Tabs
                            defaultActiveKey="FOLLOWS"
                            id="performers-tabs"
                            className='mb-4'
                            justify>
                            <Tab eventKey="FOLLOWS" title="FOLLOWS">
                                <Row className='mx-0 w-100'>
                                    <Col className='px-0' style={{ color: '#F3F0EC' }}>
                                        <h2>
                                            Club Communications
                                        </h2>
                                        <br></br>
                                        <p>
                                            <b>Performers must join our club Discord for news and updates.</b> We use Discord to post reminders, share photos, and share other performance-related information.
                                        </p>
                                        <p>
                                            <Link className='h5' style={{ textAlign: '-khtml-right', color: '#F0BB2B' }} to='https://discord.gg/z3A2dX9Vfn'>Join our Discord here!
                                            </Link>
                                        </p>

                                        <br></br>
                                        <br></br>
                                        <h2>
                                            Performance Logistics
                                        </h2>
                                        <br></br>
                                        <p>
                                            Our seasonal performances are always held at the <b>Ala Wai Palladium (404 Kapahulu Ave, Honolulu, HI 96815).</b> This is the second story of the Ala Wai Golf Course Clubhouse. Parking at the Palladium is ample and free. Doors will open for social dancing at 6:00pm, and the show will begin around 7:30pm.
                                        </p>
                                        <p>
                                            <b>Performers will be expected to arrive a few hours early (4-4:30pm) on the day of the performance for a final run-through.</b> We may also have  an additional run-through at the Palladium during the week leading up to the performance. These run-throughs are <b>extremely important,</b> as the Palladium is not the same size as Studio 2. Spacing and movement may be different than you are used to. The floor is also cleaner and of higher quality than Studio 2, which can feel slippery if you are not prepared.
                                        </p>
                                        <p>
                                            The Palladium has dressing room areas and restrooms we can use to change. These changing rooms can get crowded, so it is important to <b>prepare as much as you can before coming to the Palladium</b> and keep track of your things. There is a rack to hang costumes on, but be sure to keep track of your costumes, as they may look alike.
                                        </p>

                                        <br></br>
                                        <br></br>

                                        <h2>
                                            Shoes
                                        </h2>
                                        <br></br>
                                        <p>
                                            To participate in performances and competitions, you will need Ballroom/Latin dance shoes. These shoes have a high heel and a suede bottom that will enable smoother dancing.
                                        </p>

                                        <p>
                                            There are many different options available depending on your budget/foot size. Shoes should fit tightly (usually 1 to 2 sizes smaller than street shoe size) and conform to your foot as you break them in. Note that you may have to convert your shoe size depending on what country the shoes are coming from.

                                        </p><p>

                                            Loose shoes can result in injury, so it is generally safer to err on the tighter side - you should <b>not</b> be able to fit a finger behind your ankle.<b> It is highly recommended to talk to team members to try on shoes before buying anything.</b> You will need time to adjust to dancing in the shoes, so make sure to order well ahead of the performance and take into account shipping to Hawaii.
                                        </p>
                                        <br></br>

                                        <Row xs={1} md={2} lg={3} className='g-4'>
                                            <Col>
                                                <Image src={star_scorpio} fluid></Image>
                                                <br></br>
                                                <br></br>
                                                <Link className='h5' style={{ textAlign: '-khtml-right', color: '#F0BB2B' }} to='https://www.stardanceshop.com/70820222.html'>
                                                    StarDanceShop Scorpio (~$80)
                                                </Link>
                                                <br></br>
                                                <br></br>
                                                This vendor is recommended by our instructors. Buy <b>tan/bronze color only</b> (no silver, gold, white, or other color).
                                            </Col>
                                            <Col>
                                                <Image src={ldae_leatherette} fluid></Image>
                                                <br></br>
                                                <br></br>
                                                <Link className='h5' style={{ textAlign: '-khtml-right', color: '#F0BB2B' }} to='https://www.lddanceshoes.com/product-page/ll05t-bronze-leatherett'>
                                                    LDAE Bronze Leatherette (~$75)
                                                </Link>
                                                <br></br>
                                                <br></br>
                                                This vendor is popular among the team. Buy <b>tan/bronze color only</b> (no silver, gold, white, or other color).
                                            </Col>
                                            <Col>
                                                <Image src={amazon_rosemoli} fluid></Image>
                                                <br></br>
                                                <br></br>
                                                <Link className='h5' style={{ textAlign: '-khtml-right', color: '#F0BB2B' }} to='https://www.amazon.com/ANDONE-Professional-Ballroom-Performance-ShoesTan-2-8inch/dp/B07ZHWV9QG/ref=pd_sbs_d_sccl_3_1/133-2856225-8403653?pd_rd_w=zqLo8&content-id=amzn1.sym.0cb10f30-7cd4-4985-9826-58b2c1174c19&pf_rd_p=0cb10f30-7cd4-4985-9826-58b2c1174c19&pf_rd_r=SJK19QJHJNPE6FPC8P8H&pd_rd_wg=E26yk&pd_rd_r=451262ac-1002-4c87-8d2f-97671b5d4293&pd_rd_i=B07ZHWV9QG&th=1&psc=1'>
                                                    Amazon (~$35)
                                                </Link>
                                                <br></br>
                                                <br></br>
                                                Cheaper alternatives are available on Amazon, but may not last as long. Buy <b>tan/bronze color only</b> (no silver, gold, white, or other color).
                                            </Col>
                                        </Row>

                                        <br></br>
                                        <br></br>

                                        <h2>
                                            Costumes
                                        </h2>
                                        <br></br>
                                        <p>
                                            You do not need to purchase a costume in order to perform or compete. The club has costumes that are available for borrowing. <b>A $20 cleaning fee will be assessed each time you borrow a costume.</b> Please make sure to take care of the club's costumes, as ballroom attire is very delicate and can be very expensive!
                                        </p>

                                        <p>
                                            <b>Follows will need to purchase a pair of fishnet tights from Ms. Synthia (usually ~$25).</b> These are yours to keep and will last a long time if taken care of properly.
                                        </p>
                                        <br></br>
                                        <br></br>

                                        <h2>
                                            Hair and Makeup
                                        </h2>
                                        <br></br>
                                        <p>
                                            Follows will be expected to do their own hair and makeup on performance days. <b>Please do not expect others to be ready to help you last-minute</b> as everyone is responsible for their own dressing. <b>Forming small groups and getting ready together is encouraged.</b>
                                        </p>

                                        <p>
                                            Team members will usually hold a <b>Hair and Makeup Workshop</b> a few weeks before performances. In these workshops, we will go over expectations, answer questions, and walk through a hair tutorial. <b>Attendance is highly encouraged for new follows.</b> The ballroom look is very different from street/trendy styles, so it is recommended to practice before the show.
                                            <br></br>
                                            <br></br>

                                            <Link className='h5' style={{ textAlign: '-khtml-right', color: '#F0BB2B' }} to='https://docs.google.com/document/d/1HX33cTWHCbWW7r1ccHWSIbO_C43wy9zkobV2VvQ02ac/edit?tab=t.0#heading=h.n7iieuiqv8ni'>
                                                Makeup Products Suggestions/Checklist
                                            </Link>
                                            <br></br>
                                            <br></br>
                                            <Link className='h5' style={{ textAlign: '-khtml-right', color: '#F0BB2B' }} to='https://www.youtube.com/watch?v=lxI0On8ayAM'>
                                                DanceSport Makeup Example - RickieTBeauty on Youtube
                                            </Link>
                                            <br></br>
                                            <br></br>
                                            <Link className='h5' style={{ textAlign: '-khtml-right', color: '#F0BB2B' }} to='https://www.youtube.com/watch?v=5Z3DQ0sGofg'>
                                                Ballroom Hairstyle Example - Kiddie Cuties Corner on Youtube
                                            </Link>
                                        </p>

                                        <br></br>
                                        <br></br>
                                        <h2>
                                            General Packing/Supplies List
                                        </h2>
                                        <br></br>
                                        <p>
                                            Please use this checklist as a guideline of items you might need for performance day.

                                            <br></br>
                                            <br></br>

                                            <Link className='h5' style={{ textAlign: '-khtml-right', color: '#F0BB2B' }} to='https://docs.google.com/document/d/1W4d6zZKrgKz2fo7NjFEi56d6yKkTsqy9rmQwqnm5oms/edit?usp=sharing'>
                                                Follows' Packing List
                                            </Link>
                                        </p>

                                    </Col>

                                </Row>


                            </Tab>
                            <Tab eventKey="LEADS" title="LEADS">
                                <Col className='px-0' style={{ color: '#F3F0EC' }}>
                                    <h2>
                                        Club Communications
                                    </h2>
                                    <br></br>
                                    <p>
                                        <b>Performers must join our club Discord for news and updates.</b> We use Discord to post reminders, share photos, and share other performance-related information.

                                    </p>
                                    <p>
                                        <Link className='h5' style={{ textAlign: '-khtml-right', color: '#F0BB2B' }} to='https://discord.gg/z3A2dX9Vfn'>Join our Discord here!
                                        </Link>
                                    </p>

                                    <br></br>
                                    <br></br>
                                    <h2>
                                        Performance Logistics
                                    </h2>
                                    <br></br>
                                    <p>
                                        Our seasonal performances are always held at the <b>Ala Wai Palladium (404 Kapahulu Ave, Honolulu, HI 96815).</b> This is the second story of the Ala Wai Golf Course Clubhouse. Parking at the Palladium is ample and free. Doors will open for social dancing at 6:00pm, and the show will begin around 7:30pm.
                                    </p>
                                    <p>
                                        <b>Performers will be expected to arrive a few hours early (4-4:30pm) on the day of the performance for a final run-through.</b> We may also have  an additional run-through at the Palladium during the week leading up to the performance. These run-throughs are <b>extremely important,</b> as the Palladium is not the same size as Studio 2. Spacing and movement may be different than you are used to. The floor is also cleaner and of higher quality than Studio 2, which can feel slippery if you are not prepared.
                                    </p>
                                    <p>
                                        The Palladium has dressing room areas and restrooms we can use to change. These changing rooms can get crowded, so it is important to <b>prepare as much as you can before coming to the Palladium</b> and keep track of your things. There is a rack to hang costumes on, but be sure to keep track of your costumes, as they may look alike.
                                    </p>
                                    <br></br>
                                    <br></br>
                                    <h2>
                                        Shoes
                                    </h2>
                                    <br></br>
                                    <p>
                                        To participate in performances and competitions, you will need Ballroom/Latin dance shoes. These shoes have a heel and a suede bottom that will enable smoother dancing.
                                    </p>

                                    <p>
                                        There are many different options available depending on your budget/foot size. Shoes should fit tightly (usually 1 to 2 sizes smaller than street shoe size) and conform to your foot as you break them in. Note that you may have to convert your shoe size depending on what country the shoes are coming from.

                                    </p>
                                    <p>

                                        Loose shoes can result in injury, so it is generally safer to err on the tighter side - you should <b>not</b> be able to fit a finger behind your ankle. <b> It is highly recommended to talk to team members to try on shoes before buying anything.</b> You will need time to adjust to dancing in the shoes, so make sure to order well ahead of the performance and take into account shipping to Hawaii.
                                    </p>

                                    <Row xs={1} md={2} lg={3} className='g-4 mt-3'>
                                        <Col>
                                            <Image src={star_mens} fluid></Image>
                                            <br></br>
                                            <br></br>
                                            <Link className='h5' style={{ textAlign: '-khtml-right', color: '#F0BB2B' }} to='https://www.stardanceshop.com/250302.html'>
                                                StarDanceShop Men's Leather (~$100)
                                            </Link>
                                            <br></br>
                                            <br></br>
                                            This vendor is recommended by our instructors.
                                        </Col>
                                        <Col>
                                            <Image src={ldae_mb01} fluid></Image>
                                            <br></br>
                                            <br></br>
                                            <Link className='h5' style={{ textAlign: '-khtml-right', color: '#F0BB2B' }} to='https://www.lddanceshoes.com/product-page/mb01'>
                                                LDAE MB01 Synthetic Leather (~$70)
                                            </Link>
                                            <br></br>
                                            <br></br>
                                            This vendor is popular among the team.
                                        </Col>
                                        <Col>
                                            <Image src={amazon_leads} fluid></Image>
                                            <br></br>
                                            <br></br>
                                            <Link className='h5' style={{ textAlign: '-khtml-right', color: '#F0BB2B' }} to='https://www.amazon.com/Linodes-Leather-Ballroom-Character-Shoe-Black-10-5M-UPD/dp/B0CQYCJYMN/ref=sr_1_5?crid=12TAPM1H3FHZQ&dib=eyJ2IjoiMSJ9.LRcxeWNtnu2H5Me_Pb41tMQE1u7CEGMkyl9Y8x1hxI9R0uKfGjN1NR9yDCCBE2KsmBw8QwYt548GMmjC2DEUNrqoNUyCuOAZsBML2fAnjh-yXa52ejg6cOfEiPhuohkroztQMcsBRt9ZUH__LgyAM5xf5aCkg6JkL2uHOdJlh5qbu6cabYBUVAb-IEY4QSTEym4ADZZGMDT2SyN1VVNWjLFUiA1Z2WphIO6lZ_oU62OlJFWb-6TLIC8KqLwl08yI7lKzDxyl2EEmZzWMmQ_WiIej3Z-sThogL5FZh7LHJMs.Km5whFiuCEf3hzp0jVfmM1WdXiJPzTw-fcXyMpvzMSk&dib_tag=se&keywords=mens%2Bballroom%2Bdance%2Bshoes&qid=1794211089&sprefix=mens%2Bballroom%2Bdance%2Bsh%2Caps%2C265&sr=8-5&th=1&psc=1'>
                                                Amazon (~$30)
                                            </Link>
                                            <br></br>
                                            <br></br>
                                            Cheaper alternatives are available on Amazon, but may not last as long.
                                        </Col>
                                    </Row>
                                    <br></br>
                                    <br></br>

                                    <h2>
                                        Costumes
                                    </h2>
                                    <br></br>
                                    <p>
                                        You do not need to purchase a costume in order to perform or compete. The club has costumes that are available for borrowing. <b>A $20 cleaning fee will be assessed each time you borrow a costume.</b> Please make sure to take care of the club's costumes, as ballroom attire is very delicate and can be very expensive!
                                    </p>
                                    <br></br>
                                    <br></br>

                                    <h2>
                                        Hair and Grooming
                                    </h2>
                                    <br></br>
                                    <p>
                                        Leads will be expected to take care of their own appearance on performance days. <b>Please do not expect others, especially follows, to be ready to help you last-minute</b> as everyone is responsible for their own dressing. This includes having your tie prepared. <b>Forming small groups and getting ready together is encouraged.</b>
                                    </p>
                                    <p>
                                        Team members will usually hold a <b>Leads' Grooming Workshop</b> a few weeks before performances. In these workshops, we will go over expectations, answer questions, and walk through tutorials. <b>Attendance is highly encouraged for new leads.</b> The ballroom look is very different from street/trendy styles, so it is recommended to practice before the show.
                                        <br></br>
                                        <br></br>

                                        <Link className='h5' style={{ textAlign: '-khtml-right', color: '#F0BB2B' }} to='https://www.youtube.com/watch?v=STaLPeaW7ak'>
                                            Ballroom Hair Example - BallroomVibez on Youtube
                                        </Link>
                                        <br></br>
                                        <br></br>
                                        <Link className='h5' style={{ textAlign: '-khtml-right', color: '#F0BB2B' }} to='https://www.youtube.com/watch?v=cOLrXTzTkF4'>
                                            Ballroom Slick Bun Example - Hair by Sonya on Youtube
                                        </Link>
                                    </p>
                                    <br></br>
                                    <br></br>

                                    <h2>
                                        General Packing/Supplies List
                                    </h2>
                                    <br></br>
                                    <p>
                                        Please use this checklist, created for Nationals Competitors, as a guideline of items you might need for performance and competition.
                                    </p>
                                    <Link className='h5' style={{ textAlign: '-khtml-right', color: '#F0BB2B' }} to='https://docs.google.com/document/d/1dS-5ErJHbj8oYNlpNzXXyKwshcK-2OmtANoKGu-bOp4/edit?usp=sharing'>
                                        Leads' Packing List
                                    </Link>
                                </Col>
                            </Tab>
                        </Tabs>
                    </Col>
                </Row>
            </Container>


        </Container>
    )
}
export default ForNewPerformers;