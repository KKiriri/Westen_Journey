import React from 'react';
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';
import FloatingActionButtonZoom from './reactbutton';
import Button from '@material-ui/core/Button';

import Blank from './blank';
import { createBrowserHistory } from "history";

var history = require("history").createBrowserHistory;

const ButtonWithLink = () => (
      <div>
        <Router history={history}>
          <div>
            <Redirect to="/" />
            <Route path="/" exact component={Blank} />
            <Route path="/to1" exact component={FloatingActionButtonZoom} />


          </div>
        </Router>



        {/*<Router>
        <button
          type='button'
          onClick={() => { history.push('/reactbutton') }}
        >
          Click Me!
        </button>
      )
      </Router>*/}


      </div>
)



export default ButtonWithLink;
