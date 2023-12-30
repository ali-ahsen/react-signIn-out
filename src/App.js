import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import SignIn from './account/SignIn'
import SignUp from './account/SignUp'
import  Home  from './pages/Home';
function App() {
  return (
    <Router>
      <div className="App">
        <div className="auth-wrapper">
          <div className="auth-inner">
            <Routes>
            <Route exact path="/" element={<SignUp />} />
              <Route path="/sign-in" element={<SignIn />} />
              <Route path="/home/*" element={<Home />} />
            </Routes>
          </div>
        </div>

        
      </div>
    </Router>
  );
}

export default App;
