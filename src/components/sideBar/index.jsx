import React from "react"
import {connect} from "react-redux"
import {bindActionCreators} from "redux"
import {Link} from "react-router"
import {Menu, Icon, Layout} from "antd"
import menu from "./menu"

const { Sider } = Layout;
const {SubMenu} = Menu

class SideBar extends React.Component {
  constructor(props) {
    super(props)
    this.state={
      collapsed: false
    }
  }
  render(){
    return(
      <Sider
        trigger={null}
        collapsible
        collapsed={this.state.collapsed}
      >
        <div className="logo" >11</div>
        <Menu theme="dark" mode="inline" defaultOpenKeys={["1"]} defaultSelectedKeys={['101']}>

          {menu.map(item=>{
            return <SubMenu
                    key={item.key}
                    title={<span><Icon type={item.icon}/>{item.name}</span>}
                  >
                    {item.children?item.children.map(elem=>(
                        <Menu.Item key={elem.key}>
                          <Link to="/home">{elem.name}</Link>
                        </Menu.Item>
                    )):''}
                  </SubMenu>
          })}

        </Menu>
      </Sider>
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
