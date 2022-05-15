import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import React from 'react';
import './index.css';
import Navbar from './Navbar'
import Home from './Home'
import Create from './Create';
import BlogDetails from './BlogDetails';
import NotFound from './NotFound';

function App() {
  // const title = 'Welcome To The New Blog', likes = 50, obj = {name: 'deji', age: 22}, arr = [5,2,6,17], degree = 12.637356, googleLink = 'https://www.google.com'


  return (
    <Router>
        <div className='App'>
          <Navbar />
          <div className="content">
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/create">
                <Create />
              </Route>
              <Route path="/blog/:id">
                <BlogDetails />
              </Route>
              <Route path="*">
                <NotFound />
              </Route>
            </Switch>
            {/* <h1>{title}</h1> */}
            {/* <p>This blog has {likes} likes</p> */}
            {/* <p>I got the package {2**3}days ago!</p> */}
            {/* <p>{obj}</p> */}
            {/* <h2>{arr}</h2> */}
            {/* <h3>{Math.ceil(13.848232)}</h3> */}
            {/* <h4>{'Today was a wonderful day. To GOD be the GLORY!'}</h4> */}
            {/* <p>Fredy: <h2>{degree/3.5}</h2></p> */}
            {/* <a href={googleLink}>Google HomePage</a> //Usig dyamic values as attriute values */}
          </div>
        </div>
    </Router>
  );
}

export default App;
