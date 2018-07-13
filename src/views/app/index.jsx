import React from "react"
import {connect} from 'react-redux'
import {bindActionCreators} from "redux"
import {Layout, Menu, Icon, Avatar } from "antd"
import SideBar from "components/SideBar"

const { Header, Sider, Content } = Layout;

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state={
      collapsed: false,
    }
  }
  componentDidMount(){


  }
  toggle(){
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }
  render(){
    return (
      <Layout>
        <SideBar></SideBar>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }}>
            <div style={{float: 'left'}}>
              <Avatar icon="user" />
            </div>
          </Header>
          <Content style={{ margin: '24px 16px', padding: 24, background: '#fff', minHeight: 780 }}>
            {this.props.children}
          </Content>
        </Layout>
      </Layout>
    )
  }
}

function mapDispathToProps(dispath){
  return {
    actions: bindActionCreators({}, dispath)
  }
}

function mapStateToProps(state){
  return {

  }
}

export default connect(mapStateToProps, mapDispathToProps)(App)
