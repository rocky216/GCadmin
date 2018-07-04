import React from "react"
import {connect} from 'react-redux'
import {bindActionCreators} from "redux"
import {Button} from "antd"
import {getList} from "actions/smallproAction"

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state={

    }
  }
  componentDidMount(){
    this.props.actions.getList({bb: 11})
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

function mapDispathToProps(dispath){
  return {
    actions: bindActionCreators({getList}, dispath)
  }
}

function mapStateToProps(state){
  console.log(state);
  return {

  }
}

export default connect(mapStateToProps, mapDispathToProps)(App)
