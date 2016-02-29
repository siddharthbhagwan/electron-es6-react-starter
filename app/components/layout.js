import React from 'react'
import ReactDom from 'react-dom'
import Navbar from '../components/navbar'
import Row from '../components/row'

class Layout extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      processedData: {}
      //sampleIndex:0
    };
  }

  componentWillMount() {
    // generic ajax call to backend 
    // if call fails - retry,
    // if theres no data.

    // success data - map no a client side
    // model - correspnding to data expected

    // this.getSamples(0);
  }

  componentDidMount(){
    // console.profile();
    this.large();
    this.small();
    this.medium();
    this.large();
    // console.profileEnd();
  }

  render() {
    return(
      <div>
        <Navbar/>
        <div className="container">
          <div className="starter-template">
            <h1>Bootstrap starter template</h1>
            <p className="lead">Use this document as a way to quickly start any new project.<br/> All you get is this text and a mostly barebones HTML document.</p>
          </div>
        </div>

        <Row samples={this.getProfileData()}/>
      </div>
    )
  }

  getProfileData() {
    return ([
      { // requset id 
        // timestamp 
        event_type: 'cpu_sample',
        timestamp: 24022015070000100,
        payload: [
          {
            method_name: 'large',
            label: 'largeLabel',
            file: 'layout.js'
          },
          {
            method_name: 'small',
            label: 'smallLabel',
            file: 'layout.js'
          },
          {
            method_name: 'medium',
            label: 'mediumLabel',
            file: 'layout.js'
          }
        ]
      },
      {
        event_type: 'cpu_sample',
        timestamp: 24022015070000130,
        payload: [
          {
            method_name: 'small',
            label: 'smallLabel',
            file: 'layout.js'
          }
        ]
      },
      {
        event_type: 'cpu_sample',
        timestamp: 24022015070000140,
        payload: [
          {
            method_name: 'medium',
            label: 'mediumLabel',
            file: 'layout.js'
          }
        ]
      },
      {
        event_type: 'cpu_sample',
        timestamp: 24022015070000160,
        payload: [
          {
            method_name: 'large',
            label: 'largeLabel',
            file: 'layout.js'
          },
          {
            method_name: 'medium',
            label: 'mediumLabel',
            file: 'layout.js'
          }
        ]
      },
      {
        event_type: 'cpu_sample',
        timestamp: 24022015070000170,
        payload: [
          {
            method_name: 'small',
            label: 'smallLabel',
            file: 'layout.js'
          },
          {
            method_name: 'medium',
            label: 'mediumLabel',
            file: 'layout.js'
          }
        ]
      }
    ])
  }

  small() {
    for(var i=0; i<30000; i++){
      Math.pow(i,2);
    }
  }

  medium() {
    for(var i=0; i<30000; i++){
      Math.sqrt(i);
    }
  }

  large() {
    for(var i=0; i<30000; i++){
      Math.cbrt(i);
    }
  }

  getSamples() {
    that = this;
    $.ajax({
      url: '/api/sample/' + this.state.sampleIndex,
      type: 'GET',
      success: function(data){
        var newSampleIndex = that.state.sampleindex + 100;
        this.setState({sampleindex: newSampleIndex});
      },
      complete: function(data){

      },
      error: function() {

      }

    })
  }

}

window.onload = function(){
  ReactDOM.render(<Layout/>, document.getElementById('layout-container'));
}
