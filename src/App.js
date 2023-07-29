import './App.css';
import HomePage from './Home/HomePage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import UserDetails from './UserDetails/UserDetails';
import Profile from './UserDetails/Profile/Profile';
import ComingSoon from './UserDetails/ComingSoon/ComingSoon';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/user/:userId" element={<UserDetails />} >
            <Route exact index path="profile" element={<Profile />} />
            <Route exact index path="gallery" element={<ComingSoon />} />
            <Route exact index path="posts" element={<ComingSoon />} />
            <Route exact index path="todo" element={<ComingSoon />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
