import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../styles/createAccount.css';
import baseURL from '../baseURL';

function CreateAccount() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [phonenumber, setPhonenumber] = useState('');
  const [password, setPassword] = useState('');
  const [isAdmin, setIsAdmin] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setIsAdmin(e.target.value === 'true');
  };

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${baseURL}/auth/register`, {
        username,
        email,
        password,
        phoneNumber: parseInt(phonenumber),
        isAdmin,
      });
      alert(`${response.data} successfully!, Now login`);
      navigate('/login');
    } catch (err) {
      console.error(err.response.data.message);
      setError(err.response.data.message);
      console.log(typeof error);
    }
  };

  return (
    <div className="register">
      <div className="rContainer">
        <input
          type="text"
          placeholder="username"
          id="username"
          onChange={(e) => setUsername(e.target.value)}
          className="rInput"
        />
        <input
          type="text"
          placeholder="email"
          id="email"
          onChange={(e) => setEmail(e.target.value)}
          className="rInput"
        />
        <input
          type="tel"
          placeholder="phone number"
          id="phone"
          onChange={(e) => setPhonenumber(e.target.value)}
          className="rInput"
        />
        <input
          type="password"
          placeholder="password"
          id="password"
          onChange={(e) => setPassword(e.target.value)}
          autoComplete="off"
          className="rInput"
        />

        <label htmlFor="admin-select" className="rLabel">
          Signing up as an Admin?
        </label>
        <select id="admin-select" value={isAdmin.toString()} onChange={handleChange} className="rSelect">
          <option value="true">True</option>
          <option value="false">False</option>
        </select>
        <button onClick={handleSubmit} className="rButton">
          Create Account
        </button>
        {error && <span className="rError">{typeof error === 'object' ? JSON.stringify(error) : error}</span>}
      </div>
    </div>
  );
}

export default CreateAccount;
