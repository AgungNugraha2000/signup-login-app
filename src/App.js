import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import SignupForm from './component/Signup/SignupForm'
import Login from './component/Login/Login'

function App() {
  return (
    <Router>
      <div className="App">
        <div className="route">
          <button className="link"><Link className="next-page" to="/">Home</Link></button>
          <button className="link"><Link className="next-page" to="/Signup">Sign Up</Link></button>
          <button className="link"><Link className="next-page" to="/Login">Login</Link></button>
        </div>

        <Routes>
          <Route exact path="/"></Route>
          <Route exact path="/Signup" element={<SignupForm />}></Route>
          <Route exact path="/Login" element={<Login />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
