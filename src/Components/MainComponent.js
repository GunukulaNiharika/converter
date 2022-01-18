import { Route, Switch, withRouter } from 'react-router-dom';
import Home from './Home'
import Common from './Common';
import Currency from './Currency';

function Main(){
    

    return(
        <>
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/common"  component={Common}/>
                <Route path='/currency' component={Currency}/> 
            </Switch>
        </>
    );
}
export default withRouter(Main);