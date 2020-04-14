import React from 'react';
import logo from '../logo.svg';
import '../css/App.css';

import { Animate, AnimateKeyframes, AnimateGroup } from 'react-simple-animate';

const props = {
    startStyle: { opacity: 0 },
    endStyle: { opacity: 1 }
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      test: 'testprint',
    }
  }

   render() {

     return (
       <div className="App" style={{'marginLeft': '200px'}}>
         <header className="App-header">

           <Animate play {...props}>
             <h1>React simple animate</h1>
         </Animate>


         </header>


       </div>
     )
   }
}


export default App;
