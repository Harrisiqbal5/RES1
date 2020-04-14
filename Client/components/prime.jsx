import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, HashRouter, Route, useHistory } from 'react-router-dom';
import App from './App';
import Second from './second';

// import * as serviceWorker from './serviceWorker';

import Sidebar from "react-sidebar";

// import { FocusStyleManager, Popover, Menu, MenuItem, Position, Button } from "@blueprintjs/core";

import { Colors, Button, Intent, Spinner,Popover,Position, Menu, MenuItem, MenuDivider, Classes, Icon } from "@blueprintjs/core";
import "@blueprintjs/core/lib/css/blueprint.css";
import "@blueprintjs/icons/lib/css/blueprint-icons.css";
import "normalize.css";

import '../css/index.css';


import Sidenav from 'react-sidenav'

import posed, { PoseGroup } from 'react-pose';

// using JSX:
const mySpinner = <Spinner intent={Intent.PRIMARY} />;

// use React.createElement if you're not using JSX.
const myButton = React.createElement(Button, { intent: Intent.SUCCESS }, "button content");

class Initia_first extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hello:'lll',
       sidebarOpen: false,
    };
    this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
  }


handleClick() {
      this.setState({hello:'jkd'})
    }


 onSetSidebarOpen(open) {
   this.setState({ sidebarOpen: open });
 }
  render() {
    const PalantirLogo: React.SFC = () => (
    <svg className={Classes.ICON} width="16" height="16" viewBox="0 0 18 23" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M16.718 16.653L9 20.013l-7.718-3.36L0 19.133 9 23l9-3.868-1.282-2.48zM9 14.738c-3.297 0-5.97-2.696-5.97-6.02C3.03 5.39 5.703 2.695 9 2.695c3.297 0 5.97 2.696 5.97 6.02 0 3.326-2.673 6.022-5.97 6.022zM9 0C4.23 0 .366 3.9.366 8.708c0 4.81 3.865 8.71 8.634 8.71 4.77 0 8.635-3.9 8.635-8.71C17.635 3.898 13.77 0 9 0z"
            fillRule="evenodd"
        />
    </svg>
);

function HomeButton() {
  let history = useHistory();

  function handleClick() {
    history.push("/Second");
  }

  return (
    <button type="button" onClick={handleClick}>
      Go home
    </button>
  );
}

    return(
<div>
  <div style={{'width':'200px','position':'absolute'}}>

  <Menu className={Classes.MENU_ITEM2}>
              <MenuItem icon={<PalantirLogo />} text="Home" href="#/" />
              <MenuDivider />
              <MenuItem icon="new-text-box" text="Second" href="#/Second"  />
              <MenuItem icon="new-object" text="New object" />
              <MenuItem icon="new-link" text="New link" />
              <MenuDivider />
              <MenuItem icon="cog" labelElement={<Icon icon="share" />} text="Settings..." />
          </Menu>
        </div>

      <HashRouter>
        <Route exact path="/" component={App} />
        <Route  path="/Second" component={Second} />
        {/*

        <Sidebar
        sidebar={<b>Sidebar content</b>}
        open={this.state.sidebarOpen}
onSetOpen={this.onSetSidebarOpen}
        styles={{ sidebar: { background: "#182026" } }}
        sidebar={
          <Menu className={Classes.MENU_ITEM2}>
                      <MenuItem icon={<PalantirLogo />} text="Home" href="#/" />
                      <MenuDivider />
                      <MenuItem icon="new-text-box" text="Second" href="#/Second"  />
                      <MenuItem icon="new-object" text="New object" />
                      <MenuItem icon="new-link" text="New link" />
                      <MenuDivider />
                      <MenuItem icon="cog" labelElement={<Icon icon="share" />} text="Settings..." />
                  </Menu>
  }

      >





    </Sidebar>
    */}

  </HashRouter>
  </div>







    )
  }
}


export default Initia_first;
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
