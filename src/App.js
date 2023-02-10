import { Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import Auth from './components/Auth.js';
import EditPost from './components/EditPost.js';
import Header from './components/Header.js';
import NewPost from './components/NewPost.js';
import Posts from './components/Posts.js';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/posts" component={Posts} />
        <Route exact path="/posts/edit/:id" component={EditPost} />
        <Route exact path="/auth/:type" component={Auth} />
        <Route exact path="/posts/new" component={NewPost} />
        <Route exact path="*">
          <Redirect to="/auth/sign-in" />
        </Route>
        <Route exact path="/posts/new" component={NewPost} />
      </Switch>
    </div>
  );
}

export default App;
