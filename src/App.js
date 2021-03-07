import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import Navbar from './components/layout/Navbar'
import Users from './components/users/Users';

function App() {

  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  //console.log(users);


  useEffect(() => {
    const fetchData = async () => {
      setLoading({ loading: true });
      const res = await axios.get("https://api.github.com/users");
      //console.log(res);
      setUsers(res.data)
      setLoading(false);
    }
    fetchData();
  }, []);


  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <Users loading={loading} users={users} />
      </div>
    </div>
  );
}

export default App;
