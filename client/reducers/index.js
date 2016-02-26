/**
 * Reducer - index
 * 汇总
 */
//加载reducers
import login from './login';

import { combineReducers } from 'redux';
import {  routeReducer } from 'react-router-redux';

/**
 * 组织注入的object
 * @param  {object} state state数据
 * @return  {object}          返回的prop数据
 */
export function propMap(state){
	return {
		login:state.login
	}
}

export const reducer = combineReducers({
  login,
  routing: routeReducer
})