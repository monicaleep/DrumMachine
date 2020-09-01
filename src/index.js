import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

const DrumInfo = ['Q','W','E','A','S','D','Z','X','C']
//Parent Component
class Machine extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      turnedOn : true,
    }
  }
  render(){
    const drums = [];
    for (let i =0;i<9;i++){
      drums.push(<Drum id={DrumInfo[i]} name={DrumInfo[i]}/>)
    }
    return(
      <div id="machine">
       {drums}
      </div>
    )
  }
}

const Drum = (props)=> {
    return(
      <div className="drummer">Drummer {props.name}</div>
    )
}
ReactDOM.render(
  <Machine/>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
