import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Hook to programmatically navigate

  const handleLogin = () => {
    if (username === 'user123' && password === '12345') {
      alert("Login successful!");
      navigate('/MovieDetails'); // Redirect to MovieDetails
    } else {
      alert("Invalid username or password");
    }
  };

  return (
    <div className="login-container"> 
      <label>Username: </label>
      <input
        type="text"
        id="username"
        placeholder="Enter Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <label>Password: </label>
      <input
        type="password"
        id="password"
        placeholder="Enter Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;
