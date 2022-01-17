import './home.css'
import {Button, Col, Row} from 'react-bootstrap';
import { Link } from 'react-router-dom';
const Home = (props) => {
    return(
        <>
            <h1 id="head">Converter</h1>
            <h3 id='caption'>What do you want to convert?</h3>
            <div >
                <Row >
                   <Col xs={12} className='center'><Link to='/temperature'><Button variant='outline-warning' className='button'>Temperature</Button></Link></Col>
                   <Col xs={12} className='center'><Link to='/currency'><Button variant='outline-warning' className='button'>Currency</Button></Link></Col>
                   <Col xs={12} className='center'><Link to='/length'><Button variant='outline-warning' className='button'>Length</Button></Link></Col>
                   <Col xs={12} className='center'><Link to='/weight'><Button variant='outline-warning' className='button'>Weight</Button></Link></Col>
                   <Col xs={12} className='center'><Link to='/time'><Button variant='outline-warning' className='button'>Time</Button></Link></Col>
                   <Col xs={12} className='center'><Link to='/digital'><Button variant='outline-warning' className='button'>Digital</Button></Link></Col>
                   <Col xs={12} className='center'><Link to='/volume'><Button variant='outline-warning' className='button'>Volume</Button></Link></Col>
                </Row>

            </div>
            
        </>
    );

}
export default Home;