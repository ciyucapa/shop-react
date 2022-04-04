import Layout from '../containers/Layout';
import Login from '../containers/Login';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
import RecoveryPassword from '../containers/RecoveryPassword';
import {Routes, Route, BrowserRouter} from 'react-router-dom';


const Dashboard = () => {
  return(
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='login' element={<Login/>}/>
          <Route path='recovery' element={<RecoveryPassword/>} />
          <Route path='*' element={<NotFound/>}/>
        </Routes>
    </Layout>
  </BrowserRouter>
        
  )
}

export default Dashboard;
