import convert from 'convert-units';
import './home.css'
import Common from '../Layout/Common';


const Digital = () =>{
     const fetch =() =>{
        var list=[], symbol=[];
        convert().list('digital').map((dig => {
           list.push(dig.singular);
           symbol.push(dig.abbr);
        }))
        return [list,symbol];
    }
    return(
        <Common fetchData={fetch} name="Digital" />
    );
}

export default Digital;