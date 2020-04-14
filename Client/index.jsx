import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, HashRouter, Route, withRouter, useHistory } from 'react-router-dom';

import Initia_first from './components/prime';
import Second from './components/second';



import * as serviceWorker from './serviceWorker';

import Sidebar from "react-sidebar";

// import { FocusStyleManager, Popover, Menu, MenuItem, Position, Button } from "@blueprintjs/core";

import { Colors, Button, Intent, Spinner,Popover,Position, Menu, MenuItem, MenuDivider, Classes, Icon } from "@blueprintjs/core";
import "@blueprintjs/core/lib/css/blueprint.css";
import "@blueprintjs/icons/lib/css/blueprint-icons.css";
import "normalize.css";

import './css/index.css';
import './css/main_svg.css';




import Sidenav from 'react-sidenav'




// using JSX:
const mySpinner = <Spinner intent={Intent.PRIMARY} />;

// use React.createElement if you're not using JSX.
const myButton = React.createElement(Button, { intent: Intent.SUCCESS }, "button content");

class Initia extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hello:'lll',
       sidebarOpen: false,
    };
  }


handleClick() {
      this.setState({hello:'jkd'})
    }



render(){


  function HomeButton() {
    let history = useHistory();

    function handleClick() {
      history.push("/Prime");
    }

    return (
      <button type="button" onClick={handleClick}>
        Go home
      </button>
    );
  }

    return(
<Router >

  <Route exact path="/"/>
  <Route path="/Prime/" component={Initia_first} />
  <Route  path="/Second" component={Second} />

<div style={{'position':'fixed','height':'100%','width':'100%'}}>
  <div className="svg-wrapper" >
    <svg height="60" width="320" xmlns="http://www.w3.org/2000/svg" >
      <a href="Prime/">
        <rect className="shape" height="60" width="320" />
      </a>
    </svg>
     <div className="text" >
       <a href="Prime/">
         <p x="10" y="25">
         ENTER</p>
     </a>
   </div>

  </div>

</div>


</Router>







    )
  }
}


ReactDOM.render(<Initia />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
