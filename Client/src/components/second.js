import React from 'react';
import logo from '../logo.svg';
import '../css/App.css';

import { Colors, Button, Intent, Spinner,Popover,Position, Menu, MenuItem, MenuDivider, Classes, Icon } from "@blueprintjs/core";
import "@blueprintjs/core/lib/css/blueprint.css";
import "@blueprintjs/icons/lib/css/blueprint-icons.css";

import axios from 'axios';

import { ResponsiveLine } from '@nivo/line'
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,ResponsiveContainer
} from 'recharts';

const path = require('path');

const CustomTooltip = ({ active, payload, label }) => {
  if (active) {
    return (
      <div className="custom-tooltip">
        // <p className="label">{`${label} : ${payload[0].value}`}</p>
      </div>
    );
  }

  return null;
};

class Second extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      test: 'testprint',
      data: null,
      symbol:null,
      interval:null,

    }
  }
  _onChange(event) {
  //console.log(value) - just to see what we recive from <Select />
  console.log('valuekjskjs')
  console.log(event.currentTarget.value)
  this.setState({symbol: event.currentTarget.value});
}

   findValue = (array) => {
     var emp=[]
     for (var i in array) {
       emp.push({'Time':i,'Open':array[i]["1. open"]})
      }
      // return emp
      return Object.assign(emp).reverse();

  }

  handleButtonClick = () =>  {
    console.log('lll')
             var xmlhttp = new XMLHttpRequest();

              var optstring = ("https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol="+this.state.symbol+"&outputsize=full&apikey=9MSO78W695J8ASBK")

              axios.get(optstring)
                  .then((response) => {
                    var outs = this.findValue(response.data['Time Series (Daily)'])
              this.setState({data:outs},()=>{console.log(this.state.data)})

                })
     };



   render() {
     let getVal = (x)=>{return 5;}
     		let getName = (x)=>{return Object.keys(x[1]);}

     return (
       <div className="App" style={{'marginLeft':'200px'}}>



         <div className="App-header">
           <p>
             Second Page

           </p>
<div class="bp3-select .modifier">
           <select value={this.state.symbol}
             onChange={this._onChange.bind(this)}>
  <option selected>Choose an item...</option>
  <option value="MSFT">MicroSoft</option>
  <option value="AAPL">Apple</option>
  <option value="3">Three</option>
  <option value="4">Four</option>
</select>
</div>


           <Button icon="refresh" text="Click Here" onClick={() => this.handleButtonClick()} />
           <div style={{'width':'100%','height':'300px'}}>
           <ResponsiveContainer width='100%' >
             <LineChart
                     data={this.state.data}
                     margin={{
                       top: 5, right: 30, left: 20, bottom: 5,
                     }}
                   >
                     <CartesianGrid strokeDasharray="3 3" />
                     <XAxis dataKey='Time' />
                     <YAxis type="number" domain={[0, 500]} />
                     <Tooltip content={<CustomTooltip />} />
                     <Legend />
                     <Line type="monotone" dataKey={'Open'} stroke="#8884d8" activeDot={{ r: 8 }} />
                   </LineChart>
                 </ResponsiveContainer>
               </div>

         </div>

       </div>
     )
   }
}


export default Second;
