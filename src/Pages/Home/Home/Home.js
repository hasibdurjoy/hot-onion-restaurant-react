import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Banner from '../Banner/Banner';
import Dinners from '../Dinners/Dinners';
import Breakfasts from '../FoodMenu/Breakfasts/Breakfasts';
import Dinner from '../FoodMenu/Dinner/Dinner';
import FoodMenu from '../FoodMenu/FoodMenu/FoodMenu';
import Lunch from '../FoodMenu/Lunch/Lunch';
import Service from '../Service/Service';

const Home = () => {
    return (
        <div>
            <Router>
                <Banner></Banner>
                <FoodMenu></FoodMenu>
                {/* <Switch>
                    <Route exact path="/">
                        <Breakfasts></Breakfasts>
                    </Route>
                    <Route exact path="/home">
                        <Breakfasts></Breakfasts>
                    </Route>
                    <Route exact path="/home/breakfast">
                        <Breakfasts></Breakfasts>
                    </Route>
                    <Route path="/home/lunch">
                        <Breakfasts></Breakfasts>
                    </Route>
                    <Route path="/home/dinner">
                        <Dinners></Dinners>
                    </Route>
                </Switch> */}
                <Service></Service>
            </Router>
        </div >
    );
};

export default Home;