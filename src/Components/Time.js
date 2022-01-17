import { Form,  Card, Button } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import convert from 'convert-units';
import './home.css'
import { HiSwitchHorizontal } from 'react-icons/hi';
import Common from '../Layout/Common';


const Time = () =>{

    const fetch =() =>{
        var list=[], symbol=[];
        convert().list('time').map((time => {
           list.push(time.singular);
           symbol.push(time.abbr);
        }))
        return [list,symbol];
    }

    return(
        <Common  fetchData={fetch} name="Time"/>
    );
}

export default Time;