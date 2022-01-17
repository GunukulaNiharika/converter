import { Form,  Card, Button, Dropdown } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import { HiSwitchHorizontal } from 'react-icons/hi';
import Axios from 'axios';
import './home.css'

const Currency = () =>{
    const [info, setInfo] = useState([]);   
    const [Currency, setCurrency] = useState(0);
    const [From, setFrom] = useState("usd");
    const [To, setTo] = useState("inr");
    const [options, setOptions] = useState([]);
    const [Answer, setAnswer] = useState(0);

    useEffect(()=>{
        Axios.get(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${From}.json`)
        .then((res)=>{
            setInfo(res.data[From]);
        })
    }, [From]);

    useEffect(()=>{
        setOptions(Object.keys(info));
        //convert();
    }, [info]);

   function convert() {
       var rate = info[To];
       setAnswer(`${Currency} ${From} = ${Currency * rate} ${To}`);
   }

   function flip() {
       var temp = From;
       setFrom(To);
       setTo(temp);
   }

    return(
        <>  
        <h1 id="head">Currency Converter</h1>

        <Card className='center-card card'>
            <Form >
                <Form.Group  className='value'>
                    <Form.Label>Enter Currency</Form.Label>
                    <Form.Control 
                        className='input'
                        value={Currency}
                        onChange={(e)=>setCurrency(e.target.value)}
                        type='text' 
                        size='md' 
                        placeholder='Enter Temperature You want to convert'/>
                </Form.Group>
                <Form.Group  className='value'>
                    <Form.Label>From</Form.Label>
                    <Form.Select
                        className='input'
                        placeholder='From'
                        value={From}
                        onChange={(e)=>setFrom(e.target.value)
                        }>
                        {options.map((opt,index)=>(<option key={index+1}>{opt}</option>))}
                    </Form.Select>
                </Form.Group>
                <Button 
                    variant='outline-warning' 
                    className='button value input'
                    style={{width:'5em'}} 
                    onClick={() => flip()}>
                    <HiSwitchHorizontal size={`${1.5}em`}/></Button>
                <Form.Group  className='value'>
                    <Form.Label>To</Form.Label>
                    <Form.Select
                        className='input'
                        placeholder='To'
                        value={To}
                        onChange={(e)=>setTo(e.target.value)
                        }>
                        {options.map((opt,index)=>(<option key={index+1}>{opt}</option>))}
                    </Form.Select>
                </Form.Group>
                <Button variant='outline-warning' className='button value input' onClick={() => convert()}>Convert</Button>
                <Form.Control 
                    className='value input'
                    value={Answer}
                    readOnly={true}
                    type='text' 
                    size='md' 
                    placeholder='Converted value' />
                
            </Form>
        </Card>
        </>
    );
}

export default Currency;