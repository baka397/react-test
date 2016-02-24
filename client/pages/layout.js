/**
 * Page - layout
 * 框架
 */
import React, { Component } from 'react';

//封装组件
class Layout extends Component {
    render() {
        return (
        	<div>
                <h1>这是一个APP</h1>
                {this.props.children}
            </div>
        );
    }
}
export default Layout;