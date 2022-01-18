import { Form,  Card, Button } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import convert from 'convert-units';
import '../Components/home.css'
import { HiSwitchHorizontal } from 'react-icons/hi';


const Common = (props) =>{
    const [info, setInfo] = useState([]);   
    const [Value, setValue] = useState(0);
    const [From, setFrom] = useState(0);
    const [To, setTo] = useState(0);
    const [options, setOptions] = useState([]);
    const [Answer, setAnswer] = useState("");
    const name= props.location.state;
    useEffect(() => {
        // const [list, symbol] = props.fetchData();
        
       
            var list=[], symbol=[];
            convert().list(name).map((mass => {
               list.push(mass.singular);
               symbol.push(mass.abbr);
            }))
    
        setOptions(list);
        setInfo(symbol);
    },[])

   function flip() {
        var temp = From;
        setFrom(To);
        setTo(temp);
   }
   function conv(){
       console.log(options[To]);
    setAnswer(`${Value} ${info[From]} = ${convert(Value).from(info[From]).to(info[To])} ${info[To]}`)
   }
   console.log(props.name)


    return(
        <>  
        <h1 id="head">{`${props.name} Converter`}</h1>

        <Card className='center-card card'>
            <Form >
                <Form.Group  className='value'>
                    <Form.Label>Enter Value</Form.Label>
                    <Form.Control 
                        className='input'
                        value={Value}
                        onChange={(e)=>setValue(e.target.value)}
                        type='text' 
                        size='md' 
                        placeholder='Enter Weight You want to convert'/>
                </Form.Group>

                <Form.Group  className='value'>
                    <Form.Label>From</Form.Label>
                    <Form.Select
                        className='input'
                        placeholder='From'
                        value={From}
                        onChange={(e)=>{setFrom(e.target.value); console.log(To)}
                        }>
                        {options.map((opt,index)=>(<option value={index} key={`F${index}`}>{opt}</option>))}
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
                        onChange={(e)=>{setTo(e.target.value); console.log(To)}
                        }>
                        {options.map((opt,index)=>(<option value={index} key={`F${index}`}>{opt}</option>))}
                    </Form.Select>
                </Form.Group>
                <Button variant='outline-warning' className='button value input' onClick={() => conv()}>Convert</Button>
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

export default Common;