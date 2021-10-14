import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Banner from '../Banner/Banner';
import Breakfasts from '../Breakfasts/Breakfasts';
import Dinners from '../Dinners/Dinners';
import FoodMenu from '../FoodMenu/FoodMenu';
import Lunches from '../Lunches/Lunches';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Router>
                <Banner></Banner>
                <FoodMenu></FoodMenu>
                <Switch>
                    <Route exact path="/">
                        <Breakfasts></Breakfasts>
                    </Route>
                    <Route path="/home">
                        <Breakfasts></Breakfasts>
                    </Route>
                    <Route path="/home-breakfast">
                        <Breakfasts></Breakfasts>
                    </Route>
                    <Route path="/home-lunch">
                        <Lunches></Lunches>
                    </Route>
                    <Route path="/home-dinner">
                        <Dinners></Dinners>
                    </Route>
                </Switch>
                <Services></Services>
            </Router>
        </div >
    );
};

export default Home;