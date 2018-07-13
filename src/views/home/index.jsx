import React from "react"
import {bindActionCreators} from "redux"
import {connect} from "react-redux"
import {Button} from "antd"
import {selectKey} from "actions/appAction"
import {getList} from "actions/smallproAction"

class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state={

    }
  }
  componentWillMount(){

  }
  componentDidMount(){

    this.props.actions.getList({getList: ["1"]})
    this.props.actions.selectKey(this.props.route)
  }
  render(){
    return (
      <div>Home</div>
    )
  }
}

function mapDispathToProps(dispatch){
  return {
    actions: bindActionCreators({selectKey, getList}, dispatch)
  }
}

function mapStateToProps(state){
  console.log(state);
  return {

  }
}

export default connect(mapStateToProps, mapDispathToProps)(Home)
