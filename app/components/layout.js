import React from 'react'
import ReactDom from 'react-dom'
import Navbar from '../components/navbar'
import Row from '../components/row'
import Button from '../components/button'
import ZMQ from 'zmq'

class Layout extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
    };
  }


  connectToServer() {
    // console.log('Connecting to Server...');
    // connection logic goes here
    // <Row samples={this.getProfileData()} />
  }

  componentDidMount() {
    console.log('mounted');

    var requester = ZMQ.socket('req');
    requester.connect("tcp://localhost:5556");

    console.log("Sending 'objectspace_snapshot'");
    requester.send("objectspace_snapshot");
    

    var x = 0;
    requester.on("message", function(reply) {
      console.log("Received reply", x, ": [", reply.toString(), ']');
    });    

    process.on('SIGINT', function() {
      requester.close();
    });
  }

  render() {
    return(
      <div>
        <Navbar/>
        <div className="container">
          <div className="starter-template">
            <h1>Bootstrap starter template</h1>
            <p className="lead">Use this document as a way to quickly start any new project.</p>
          </div>
        </div>

        <Button onClick={this.connectToServer} />
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

}

window.onload = function(){
  ReactDOM.render(<Layout/>, document.getElementById('layout-container'));
}
