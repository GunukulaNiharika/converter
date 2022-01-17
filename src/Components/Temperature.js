import convert from 'convert-units';
import Common from '../Layout/Common';
import './home.css'

const Temperature = () =>{

    const fetch =() =>{
        var list=[], symbol=[];
        convert().list('temperature').map((tem => {
           list.push(tem.singular);
           symbol.push(tem.abbr);
        }))
        return [list,symbol];
    }
    return(
        <Common fetchData={fetch} name="Temperature" />
    );
}

export default Temperature;