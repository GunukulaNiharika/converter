import { Route, Switch, withRouter } from 'react-router-dom';
import Home from './Home'
import Common from './Common';

function Main(){
    

    return(
        <>
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/common" exact component={Common}/>
            </Switch>
        </>
    );
}
export default withRouter(Main);