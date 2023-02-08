import { Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import Auth from './components/Auth.js';
import Posts from './components/Posts.js';

function App() {
  return (
    <div className="App">
      {/* <Switch>
        <Route path="/posts" component={Posts} />
        <Route path="/auth/:type" component={Auth} />
        <Route path="*" />
        <Redirect to="/auth/sign-in" />
      </Switch> */}
      <Auth />
    </div>
  );
}

export default App;
