import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import Register from './Components/Register/Register';
import Login from './Components/Login/Login';
import Dashboard from './Components/BaseComponents/Dashboard/Dashboard';
import Blog from './Components/BaseComponents/Blog/Blog';
import ProfileViewPage from './Components/BaseComponents/ProfileViewPage/ProfileViewPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Login />}></Route>
        <Route path='/register' element={<Register/>}></Route>
        <Route path='/dashboard' element={<Dashboard />}></Route>
        <Route path='/user-profile' element={<ProfileViewPage/>}></Route>
        <Route path='/blog-page' element={<Blog />}></Route>
      </Routes>
    </div>
  );
}

export default App;
