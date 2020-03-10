import React from 'react';
import axios from 'axios';
import {withRouter} from 'react-router-dom';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
class Login extends React.Component {
  handleSubmit=(event)=>{
    alert('开始登录')
    event.preventDefault();
    this.props.form.validateFields(async(err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
     let result=  await axios.post('/auth/login',{
          username:values.username,
          password:values.password
        })
        console.log(result.data)
        if(result.data.code===100){
          this.props.history.push("/admin")
        }
      }
    })
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div className="login">
        <Form onSubmit={this.handleSubmit} className="login-form">
          <Form.Item>
            {
            getFieldDecorator('username', {
              rules: [{ required: true, message: '请您输入账号，账号不能为空!' }],
            })(
              <Input
                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                placeholder="用户名"
              />,
            )
            }
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('password', {
              rules: [{ required: true, message: '请您输入密码，密码不能为空!!' }],
            })(
              <Input
                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                type="password"
                placeholder="密码"
              />,
            )}
          </Form.Item>
          <Form.Item>


            <Button type="primary" htmlType="submit" className="login-form-button">
              登录
          </Button>


          </Form.Item>
        </Form>
      </div>

    )
  }
}

export default withRouter(Form.create({ name: 'normal_login' })(Login));