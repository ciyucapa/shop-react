import Layout from '../containers/Layout';
import LoginContainer from '../pages/LoginContainer'
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
import Header from '../components/Header/Header';
import RecoveryPassword from '../containers/RecoveryPassword';
import {Routes, Route, BrowserRouter} from 'react-router-dom';
import Checkout from '../pages/Checkout';
import CreateAccount from '../pages/CreateAccount';
import MyAccount from '../pages/Myaccount';
import Orders from '../pages/Orders';
import SendEmails from '../pages/SendEmail';
import NewPassword from '../pages/PasswordNew'


const Dashboard = () => {
  return(
    <BrowserRouter>
      <Layout>
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<LoginContainer/>}/>
          <Route path='/recovery' element={<RecoveryPassword/>} />
          <Route path='/checkout' element={<Checkout/>} />
          <Route path='/create-account' element={<CreateAccount/>} />
          <Route path='/my-account' element={<MyAccount/>} />
          <Route path='/new-password' element={<NewPassword/>} />
          <Route path='/orders' element={<Orders/>} />
          <Route path='/send-email' element={<SendEmails/>} />
          <Route path='*' element={<NotFound/>}/>
        </Routes>
    </Layout>
  </BrowserRouter>
        
  )
}

export default Dashboard;
