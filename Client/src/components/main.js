import React from 'react';
import logo from '../logo.svg';
import '../css/App.css';

import { Animate, AnimateKeyframes, AnimateGroup } from 'react-simple-animate';

const props = {
    startStyle: { opacity: 0 },
    endStyle: { opacity: 1 }
};

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      test: 'testprint',
    }
  }

   render() {

     return (


       <div style={{'position':'absolute','height':'100%','width':'100%'}}>
         <div class="svg-wrapper" >
           <svg height="60" width="320" xmlns="http://www.w3.org/2000/svg" >
             <a href="Prime/">
               <rect class="shape" height="60" width="320" />
             </a>
           </svg>
            <div class="text" >
              <a href="Prime/">
                <text x="10" y="25">
                ENTER</text>
            </a>
          </div>
          </div>

          </div>

     )
   }
}


export default Main
;
