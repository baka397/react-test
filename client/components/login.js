/**
 * Page - index
 * 首页
 */
import React, {PropTypes,Component} from 'react';
import { LOGIN_STATUS_OUT,LOGIN_STATUS_IN,LOGIN_STATUS_LOAD,LOGIN_STATUS_ERROR } from '../actions/login';

//封装app组件
class Login extends Component {
    render() {
        const {status,msg} = this.props;
        var Tip='',Button=<button type="submit">登录</button>;
        switch(status){
            case LOGIN_STATUS_ERROR:
                Tip=<div>提示信息:{msg}</div>
                break;
            case LOGIN_STATUS_LOAD:
                Button=<button type="submit" disabled>登录中</button>;
                break;
        }
        return (
            <form onSubmit={(e) => this.handleSubmit(e)}>
                {Tip}
                <p><input type="text" ref="name" /></p>
                <p><input type="password" ref="password" /></p>
                <p>{Button}</p>
            </form>
        );
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.onLoginSubmit({
            name:this.refs.name.value,
            password:this.refs.password.value
        });
    }
}
//组件限制
Login.propTypes={
    onLoginSubmit:PropTypes.func.isRequired,
    status:PropTypes.string.isRequired,
    msg:PropTypes.string
}
export default Login;