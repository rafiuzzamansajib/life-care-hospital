import {Switch,Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import NotFound from './components/NotFound/NotFound';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import ServiceDitelse from './components/ServicesDitelse/ServiceDitelse';
import AuthProvider from './contexts/AuthProvider';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
      <Header></Header>
    <Switch>
      <Route exact path="/">
       <Home></Home>
      </Route>
      <Route path="/home">
        <Home></Home>
      </Route>
      <Route path="/login">
        <Login></Login>
      </Route>
      <PrivateRoute path="/service/:serviceId">
        <ServiceDitelse></ServiceDitelse>
      </PrivateRoute>
      <Route path="*">
        <NotFound></NotFound>
      </Route>
    </Switch>
    </BrowserRouter>
   </AuthProvider>
  );
}

export default App;
