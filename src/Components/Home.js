import './home.css'
import {Button, Col, Row} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import convert from 'convert-units';

const Home = (props) => {
    let measures = convert().measures();
    return(
        <>
            <h1 id="head">Converter</h1>
            <h3 id='caption'>What do you want to convert?</h3>
            <div >
                <Row >
                    {
                        measures.map((unit)=>(
                            <Col key={unit} xs={12} className='center'><Link to={{pathname:'/common', state:unit}}><Button variant='outline-warning' className='button'>{unit}</Button></Link></Col>
                        ))
                    }
                </Row>

            </div>
            
        </>
    );

}
export default Home;