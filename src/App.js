import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faLinkedin, faGoogle } from '@fortawesome/free-brands-svg-icons';
import logo from './logo.svg';
import './App.css';
import AuthService from './services/AuthService';

function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async  () => {
    const isAuthenticated = await AuthService.login(username, password);
    
    if (isAuthenticated) {
      // Redirect to dashboard or desired page
      console.log('Authentication successful');
    } else {
      // Display error message or handle authentication failure
      console.log('Authentication failed');
  
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <form onSubmit={handleLogin} className="login-form">
          <h4>Login</h4>
          <div>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              placeholder='Username'
            />
          </div>
          <div>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder='Password'
            />
          </div>
          <button type="submit">LOGIN</button>
         
          <div className="social-icons">
            <FontAwesomeIcon icon={faFacebook} className="icon" />
            <FontAwesomeIcon icon={faLinkedin} className="icon" />
            <FontAwesomeIcon icon={faGoogle} className="icon" />
          </div>
        </form>
      </header>
    </div>
  );
}

export default App;
