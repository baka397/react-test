/**
 * Page - index
 * 首页
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';

//加载组件
import Login from '../components/login';

//加载action
import { authLoginStatus } from '../actions/auth';
import { loginPost,LOGIN_STATUS_IN } from '../actions/login';

//加载reducer
import {propMap} from '../reducers/index';

//封装组件
class Home extends Component {
    componentDidMount(){
        const { login,dispatch } = this.props;
        //检测是否登录
        dispatch(authLoginStatus(login.status,false));
    }
    render() {
        const { login,dispatch } = this.props;
        var LoginBlock=<Login onLoginSubmit={ (data) =>dispatch(loginPost(data)) } status={login.status} msg={login.msg} />;
        return (
        	<div>
        		<p> 这是一个测试程序,当前登录状态 {login.status}</p>
        		{LoginBlock}
        	</div>
        );
    }
}
export default connect(propMap)(Home);