
import convert from 'convert-units';
import './home.css'
import Common from '../Layout/Common';


const Length = () =>{
    
    const fetch =() =>{
        var list=[], symbol=[];
        convert().list('length').map((len => {
           list.push(len.singular);
           symbol.push(len.abbr);
        }))
        return [list,symbol];
    }
    return(
        <Common fetchData={fetch}/>
    );
}

export default Length;