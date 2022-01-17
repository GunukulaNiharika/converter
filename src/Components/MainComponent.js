import { Route, Switch, withRouter } from 'react-router-dom';
import Home from './Home'
import Currency from './Currency';
import Temperature from './Temperature';
import Length from './Length';
import Weight from './Weight';
import Time from './Time';
import Digital from './Digital';
import Volume from './Volume';

function Main(){
    return(
        <>
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/temperature" component={Temperature}/>
                <Route path="/currency" component={Currency}/>
                <Route path="/length" component={Length}/>
                <Route path="/weight" component={Weight}/>
                <Route path="/time" component={Time}/>
                <Route path="/digital" component={Digital}/>
                <Route path="/volume" component={Volume}/>
            </Switch>
        </>
    );
}
export default withRouter(Main);