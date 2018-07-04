import React from "react"
import {connect} from 'react-redux'
import {bindActionCreators} from "redux"
import {Button} from "antd"

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state={

    }
  }

  render(){
    return (
      <div>
        <div>
          <Button type="primary">sa1s</Button>
        </div>
        <div>{this.props.children}</div>
      </div>
    )
  }
}

function mapDispathToProps(){
  return bindActionCreators({}, dispath)
}

function mapStateToProps(state){
  console.log(state);
  return {

  }
}

export default connect(mapStateToProps, mapDispathToProps)(App)
