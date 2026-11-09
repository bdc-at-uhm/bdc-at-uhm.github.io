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
                    <Nav.Link>
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
                                        <Link className='h5' style={{ textAlign: '-khtml-right', color: '#F0BB2B' }} to='https://discord.gg/z3A2dX9Vfn'>Join our Discord here!
                                        </Link>
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
                                            There are many different options available depending on your budget/foot size. Shoes should fit tightly (usually 1/2 to 1 size smaller than street shoe size) and conform to your foot as you break them in. <b>It is highly recommended to talk to team members to try on shoes before buying anything.</b>
                                        </p>

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
                                                This vendor is recommended by our instructors. Buy tan/bronze color only (no silver, gold, or white color).
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
                                                This vendor is popular among the team. Buy tan/bronze color only (no silver, gold, or white color).
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
                                                Cheaper alternatives are available on Amazon, but may not last as long. Buy tan/bronze color only (no silver, gold, or white color).
                                            </Col>
                                        </Row>

                                        <br></br>

                                        <h2>
                                            Hair and Makeup
                                        </h2>
                                        <br></br>
                                        <p>
                                            Follows will be expected to do their own hair and makeup on performance days. Please do not expect others to be ready to help you last-minute as everyone is responsible for their own dressing. <b>Forming small groups and getting ready together is encouraged.</b>
                                        </p>

                                        <p>
                                            Team members will usually hold a <b>Hair and Makeup Workshop</b> a few weeks before performances. In these workshops, we will go over expectations, answer questions, and walk through a hair tutorial. <b>Attendance is highly encouraged for new follows.</b>
                                        </p>
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
                                        <br></br>
                                        <br></br>
                                        <br></br>
                                        <h2>
                                            General Packing/Supplies List
                                        </h2>
                                        <br></br>
                                        <p>
                                            Please use this checklist, created for Nationals Competitors, as a guideline of items you might need for performance and competition.
                                        </p>
                                        <Link className='h5' style={{ textAlign: '-khtml-right', color: '#F0BB2B' }} to='https://docs.google.com/document/d/1dQ9TWEtA4uPiTMysOw43pjwqfw_HFtGS6GNp9r0kCNI/edit?tab=t.0#heading=h.p2p7y42ki00t'>
                                            Follows' Packing List
                                        </Link>
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
                                    <Link className='h5' style={{ textAlign: '-khtml-right', color: '#F0BB2B' }} to='https://discord.gg/z3A2dX9Vfn'>Join our Discord here!
                                    </Link>
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
                                        There are many different options available depending on your budget/foot size. Shoes should fit tightly (usually 1/2 to 1 size smaller than street shoe size) and conform to your foot as you break them in. <b>It is highly recommended to talk to team members to try on shoes before buying anything.</b>
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
                                            Cheaper alternatives are available on Amazon, but may not last as long. Buy tan/bronze color only (no silver, gold, or white color).
                                        </Col>
                                    </Row>
                                    <br></br>
                                    <h2>
                                        General Packing/Supplies List
                                    </h2>
                                    <p>
                                        Please use this checklist, created for Nationals Competitors, as a guideline of items you might need for performance and competition.
                                    </p>
                                    <Link className='h5' style={{ textAlign: '-khtml-right', color: '#F0BB2B' }} to='https://docs.google.com/document/d/1oV2h2sdvhnw2yOr4c7yQMphmyoIC1RRgA4vTSD6ClpE/edit?tab=t.0#heading=h.95imkhisx7xy'>
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