import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import AuthProvider from './context/AuthProvider';
import CartProvider from './context/CartProvider';
import Cart from './Pages/Home/Cart/Cart';
import FoodDetails from './Pages/Home/FoodDetails/FoodDetails';
import Home from './Pages/Home/Home/Home';
import OrderPlaced from './Pages/Home/OrderPlaced/OrderPlaced';
import PrivateRoute from './Pages/Home/PrivateRoute/PrivateRoute';
import Shipping from './Pages/Home/Shipping/Shipping';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Register/Register';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';
import NotFound from './Pages/Shared/NotFound/NotFound';

function App() {
  return (
    <div>
      <AuthProvider>
        <CartProvider>
          <Router>
            <Header></Header>
            <Switch>
              <Route exact path="/"><Home /></Route>
              <Route exact path="/home"><Home /></Route>
              <Route path="/login"><Login /></Route>
              <Route path="/register"><Register /></Route>
              <Route path="/details/:foodID"><FoodDetails /></Route>
              <PrivateRoute path="/cart"><Cart /></PrivateRoute>
              <PrivateRoute path="/shipping"><Shipping /></PrivateRoute>
              <PrivateRoute path="/ordered"><OrderPlaced /></PrivateRoute>
              <Route path="*"><NotFound /></Route>
            </Switch>
            <Footer></Footer>
          </Router>
        </CartProvider>
      </AuthProvider>
    </div >
  );
}

export default App;
