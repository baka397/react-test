/**
 * app
 */

//加载依赖
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider,Counter } from 'react-redux';
import { Router, Route, browserHistory,IndexRoute } from 'react-router';
import { syncHistory } from 'react-router-redux';
import thunk from 'redux-thunk';
import {reducer} from './reducers/index';

//加载页面
import Layout from './pages/layout'; //公共组件
import Home from './pages/home'; //首页
import Dashboard from './pages/dashboard'; //首页

// Sync dispatched route actions to the history
const reduxRouterMiddleware = syncHistory(browserHistory);

//插入中间件
let createStoreWithMiddleware = applyMiddleware(
  thunk,
  reduxRouterMiddleware
)(createStore)

if(process.env.NODE_ENV==='production'){
  var store = createStoreWithMiddleware(reducer,{});
}
else{
  //载入redux debug插件
  function configureStore(initialState) {
    const store = createStoreWithMiddleware(reducer, initialState, 
      window.devToolsExtension ? window.devToolsExtension() : undefined
    );
    return store;
  }
  // Store
  var store = configureStore({});
}

//创建路由
ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={Layout}>
          <IndexRoute component={Home}/>
          <Route path="dashboard" getComponents={(nextState, callback)=>{
            let dashboard = require('./pages/dashboard');
            require.ensure([], function (require) {
              callback(null,dashboard.default);
            })
          }} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('page')
)