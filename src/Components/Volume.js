import convert from 'convert-units';
import './home.css'
import Common from '../Layout/Common';


const Volume = () =>{
     const fetch =() =>{
        var list=[], symbol=[];
        convert().list('volume').map((volume => {
           list.push(volume.singular);
           symbol.push(volume.abbr);
        }))
        return [list,symbol];
    }
    return(
        <Common fetchData={fetch} name="Volume" />
    );
}

export default Volume;