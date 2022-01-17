import convert from 'convert-units';
import './home.css'
import Common from '../Layout/Common';


const Weight = () =>{
     const fetch =() =>{
        var list=[], symbol=[];
        convert().list('mass').map((mass => {
           list.push(mass.singular);
           symbol.push(mass.abbr);
        }))
        return [list,symbol];
    }
    return(
        <Common fetchData={fetch} name="Weight" />
    );
}

export default Weight;