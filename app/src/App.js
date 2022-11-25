
import { Route, Routes } from 'react-router-dom';
import { Dashboard } from './AdminDashboard/Dashboard';
import './App.css';
import { Navbar } from './components/Navbar';
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
        <Route path='/admin' element={<Dashboard/>}/>
      </Routes>
    </div>
  );
}

export default App;
