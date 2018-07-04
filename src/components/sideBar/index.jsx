import React from "react"
import {connect} from "react-redux"
import {bindActionCreators} from "redux"
import {Menu, Icon, Button} from "antd"

class SideBar extends React.Component {
  constructor(props) {
    super(props)
    this.state={}
  }
  render(){
    return(
      <div>

      </div>
    )
  }
}

function mapDispathToProps(dispatch){
  return {
    actions: bindActionCreators({}, dispatch)
  }
}
function mapStateToProps(state){
  return {

  }
}

export default connect(mapStateToProps, mapDispathToProps)(SideBar)
