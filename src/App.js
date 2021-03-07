import axios from 'axios';
import { useState } from 'react';
import Alert from './components/layout/Alert';
import Navbar from './components/layout/Navbar'
import Search from './components/users/Search';
import Users from './components/users/Users';
import './App.css';

function App() {

  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState(null);


  const searchUsers = async (text) => {
    setLoading(true);
    const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.EACT_APP_GITHUB_CLIENT_SECRET}`);
    setUsers(res.data.items);
    setLoading(false);
  }

  const clearUsers = () => {
    setUsers([]);
    setLoading(false);
  }

  const displayAlert = (msg, type) => {
    setAlert({ msg, type });

    //Remove the alert message after 5s
    setTimeout(() => setAlert(null), 5000);
  }

  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <Alert alert={alert} />
        <Search
          searchUsers={searchUsers}
          clearUsers={clearUsers}
          showClear={users.length > 0 ? true : false}
          setAlert={displayAlert}
        />

        < Users loading={loading} users={users} />
      </div>
    </div>
  );
}

export default App;
