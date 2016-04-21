/**
 * Page - index
 * 首页
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';

//加载action
import { authLoginStatus } from '../actions/auth';
import { logoutPost,LOGIN_STATUS_IN } from '../actions/login';

//加载reducer
import {propMap} from '../reducers/index';

//封装组件
class Dashboard extends Component {
    componentDidMount(){
        const { login,dispatch,routing } = this.props;
        //检测是否未登录
        dispatch(authLoginStatus(login.status,true));
    }
    render() {
        console.log(132);
        const { login,dispatch } = this.props;
        return (
        	<div>
                <p> 欢迎光临控制面板,当前登录用户{login.info.name},当前登录角色{login.info.role}</p>
                <p><a href="#" onClick={(e)=>{e.preventDefault();dispatch(logoutPost());}}>退出</a></p>
        	</div>
        );
    }
}
export default connect(propMap)(Dashboard);