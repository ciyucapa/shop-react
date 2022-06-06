import Layout from '../containers/Layout';
import LoginContainer from '../pages/LoginContainer'
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
import Header from '../components/Header/Header';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Checkout from '../pages/Checkout';
import CreateAccount from '../pages/CreateAccount';
import MyAccountContainer from '../pages/Myaccount';
import Orders from '../pages/Orders';
import SendEmails from '../pages/SendEmail';
import NewPasswordContainer from '../pages/PasswordNew'
import PasswordRecovery from '../pages/PasswordRecovery';
import AppContext from '../context';
import useInitialState from '../hooks/useInitialState';
import OthersContainers from '../pages/OthersContainer';
import ElectronicsContainer from '../pages/ElectronicsContainer';
import ClothesContainer from '../pages/ClothesContainers';
import FurnitureContainer from '../pages/FurnitureContainers';
import ShoesContainer from '../pages/ShoesContainer';
import {AuthProvider} from '../context/authContext'

const Dashboard = () => {
  const hook1 = useInitialState();
  return (
    <AuthProvider>
      <AppContext.Provider value={{...hook1}} >
      <BrowserRouter>
        <Layout>
          <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<LoginContainer />} />
            <Route path='/recovery' element={<PasswordRecovery />} />
            <Route path='/checkout' element={<Checkout />} />
            <Route path='/create-account' element={<CreateAccount />} />
            <Route path='/my-account' element={<MyAccountContainer />} />
            <Route path='/new-password' element={<NewPasswordContainer />} />
            <Route path='/orders' element={<Orders />} />
            <Route path='/send-email' element={<SendEmails />} />
            <Route path='/Clothes' element={<ClothesContainer />} />
            <Route path='/Electronics' element={<ElectronicsContainer />} />
            <Route path='/Others' element={<OthersContainers />} />
            <Route path='/Furniture' element={<FurnitureContainer />} />
            <Route path='/Shoes' element={<ShoesContainer />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </AppContext.Provider>
    </AuthProvider>

  )
}

export default Dashboard;
