import React from "react"
import {connect} from "react-redux"
import {Form, Icon, Button, Input, Row, Col, Card } from "antd"
const FormItem = Form.Item

class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state={}
  }
  handleSubmit(e){
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log(values);
      }
    });
  }
  render(){
    const {getFieldDecorator} = this.props.form
    return (
      <Row style={{marginTop: 100}}>
        <Col offset={8} span={8}>
          <Card title="登录" hoverable type="inner">
           <Form onSubmit={this.handleSubmit.bind(this)} className="login-form">
              <FormItem>
                {getFieldDecorator('userName', {
                  rules: [{ required: true, message: 'Please input your username!' }],
                })(
                  <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
                )}
              </FormItem>
              <FormItem>
               {getFieldDecorator('password', {
                 rules: [{ required: true, message: 'Please input your Password!' }],
               })(
                 <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
               )}
             </FormItem>
             <FormItem>
              <Button type="primary" htmlType="submit" >
                Log in
              </Button>
             </FormItem>
          </Form>
         </Card>
        </Col>
      </Row>
    )
  }
}

function mapStateToProps(state){
  return {

  }
}

export default connect(mapStateToProps)(Form.create()(Login))
