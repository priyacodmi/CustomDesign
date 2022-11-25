
import { Route, Routes } from 'react-router-dom';
import { Dashboard } from './AdminDashboard/Dashboard';
import './App.css';
import { Footer } from './components/Footer';
import { Navbar } from './components/Navbar';
import RequiredAuth from './HOC/RequiredAuth';
import { Home } from './Pages/Home';
import { SignIn } from './Pages/SignIn';
import { SignUp } from './Pages/SignUp';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<SignIn/>}/>
        <Route path='/register' element={<SignUp/>}/>
        <Route path='/admin' element={
          <RequiredAuth>
          <Dashboard/>
        </RequiredAuth>
        }/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
