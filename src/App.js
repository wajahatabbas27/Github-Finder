import axios from 'axios';
import { Fragment, useState } from 'react';
import Alert from './components/layout/Alert';
import Navbar from './components/layout/Navbar'
import Search from './components/users/Search';
import Users from './components/users/Users';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import About from './components/pages/About';
import User from './components/users/User';
import GithubState from './context/github/GithubState';

function App() {

  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState(null);
  const [user, setUser] = useState({});
  const [repos, setRepos] = useState([]);


  const searchUsers = async (text) => {
    setLoading(true);
    const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.EACT_APP_GITHUB_CLIENT_SECRET}`);
    setUsers(res.data.items);
    setLoading(false);
  }

  //this function is called from the User item component to display user details from github
  const getUser = async (username) => {
    setLoading(true);
    const res = await axios.get(`https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.EACT_APP_GITHUB_CLIENT_SECRET}`);
    console.log(res.data);
    setUser(res.data);
    setLoading(false);
  }

  //This function is called from the User.js component to display the latest repos from GitHub
  const getUserRepos = async (username) => {
    setLoading(true);
    const res = await axios.get(`https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.EACT_APP_GITHUB_CLIENT_SECRET}`);
    console.log(res.data);
    setRepos(res.data);
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
    <GithubState>
      <Router>
        <div className="App">
          <Navbar />
          <div className="container">
            <Alert alert={alert} />
            <Switch>
              {/*Route for the home page */}
              <Route exact path="/" render={props => (
                <>
                  <Search
                    searchUsers={searchUsers}
                    clearUsers={clearUsers}
                    showClear={users.length > 0 ? true : false}
                    setAlert={displayAlert}
                  />
                  < Users loading={loading} users={users} />
                </>
              )} />

              {/*Route for the About page */}
              <Route exact path="/about" component={About} />

              {/*Route for the Profile of the user */}
              <Route exact path="/user/:login" render={(props) => (
                <User {...props} getUser={getUser} user={user} loading={loading} getUserRepos={getUserRepos} repos={repos} />
              )} />

            </Switch>
          </div>
        </div>
      </Router>
    </GithubState>
  );
}

export default App;
