
import Loginx from './pages/Login/Login'
import React from 'react'
// import Login from './components/Login'
import { Redirect, Route,Switch } from 'react-router-dom';
import Home from './pages/home/Home';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getuser } from './redux/utils/common';
import Private from './priivate';
import Public from './public';
// import socketClient from 'socket.io-client';

const App = () => {
  // const socket = socketClient();
  // const storage=getuser()
  return (
    <div>
      <ToastContainer/>
      <Switch>
        <Route exact path="/login" Component={()=><Loginx/>}/>
        {/* <Private exact path="/home" component={Home}/>
        <Public exact path="/login" component={Loginx}/> */}
  <Route exact path="/" Component={()=><Home/>
}/>

</Switch>

       </div>
  )
}
export default App;