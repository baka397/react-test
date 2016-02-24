/**
 * Reducer - login
 * 登录
 * 生成变量:login
 */
//导入action常量
import { LOGIN_REQUEST, LOGIN_RECEIVE, LOGIN_ERROR, LOGOUT_REQUEST, LOGOUT_RECEIVE, LOGOUT_ERROR,LOGIN_STATUS_OUT,LOGIN_STATUS_IN,LOGIN_STATUS_LOAD,LOGIN_STATUS_ERROR } from '../actions/login';

//初始化state
let init_state = {
    status: LOGIN_STATUS_OUT,
    info: {
        name: '',
        role: ''
    },
    msg: ''
}

export default function login(state = init_state, action) {
    switch (action.type) {
        case LOGIN_REQUEST:
            return Object.assign({}, state, {
                status: LOGIN_STATUS_LOAD
            });
            break;
        case LOGIN_RECEIVE:
            return Object.assign({}, state, {
                status: LOGIN_STATUS_IN,
                info: action.info
            });
            break;
        case LOGIN_ERROR:
            return Object.assign({}, state, {
                status: LOGIN_STATUS_ERROR,
                msg: action.msg
            });
            break;
        case LOGOUT_REQUEST:
            return Object.assign({}, state, {
                status: LOGIN_STATUS_LOAD
            });
            break;
        case LOGOUT_RECEIVE:
            return Object.assign({}, state, init_state);
            break;
        case LOGOUT_ERROR:
            return Object.assign({}, state, {
                status:LOGIN_STATUS_ERROR,
                msg: action.msg
            });
            break;
        default:
            return state;
    }
}
