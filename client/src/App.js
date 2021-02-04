import './App.css';
import Post from './Post';
import Orders from './Orders';
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <>
      <Switch>
        <Route path="/" component={Post} exact />
        <Route path="/orders" component={Orders} />
      </Switch>
    </>
  );
}

export default App;
