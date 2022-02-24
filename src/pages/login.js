import { Form, Input, Button, Checkbox } from 'antd';
const Login = () => {
  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <div className="page-wrapper section-login">
      <Form
        className="login-form"
        style={{
          maxWidth: "500px",
          margin: "0 auto",
          border: "1px solid #F3F7F6",
          background: "#F3F7F6",
          padding: "40px"
        }}
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button
            type="primary"
            htmlType="submit"
            style={{
              color: "#fff",
              fontWeight: "bold",
              background: "linear-gradient(90deg, #017CB7 0%, #00B776 100%)",
              border: "none"
            }}
          >
          Submit
          </Button>
        </Form.Item>
      </Form>
    </div >
  )
}

export default Login;