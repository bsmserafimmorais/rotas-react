import React, {Suspense} from "react";
import {
    BrowserRouter,
    Switch,
    Route,
} from 'react-router-dom';
const Home = React.lazy(() => import( '../pages/Home'))
const About = React.lazy(() => import( '../pages/About'))
const Contact = React.lazy(() => import( '../pages/Contact'))



const Routes = () => (
    <Suspense fallback={<h1>Carregando..........</h1>}>
    <BrowserRouter basename="rota">
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/about" component={About}/>
            <Route path="/contact" component={Contact}/>

        </Switch>
    </BrowserRouter>
    </Suspense>
)

export default Routes