import * as SessionApiUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER'
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER'
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS'
export const CLEAR_ERRORS = 'CLEAR_ERRORS'
export const RECEIVE_USER = 'RECEIVE_USER'
export const RECEIVE_ALL_USERS = 'RECEIVE_ALL_USERS'

export const receiveUser = user => ({
    
        type: RECEIVE_USER,
        user
})

export const receiveUsers = users => ({
    
        type: RECEIVE_ALL_USERS,
        users
    
})
export const receiveCurrentUser = (currentUser) => ({
    type: RECEIVE_CURRENT_USER,
    currentUser
})
export const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER
})
export const receiveErrors = (errors) => ({
    type: RECEIVE_SESSION_ERRORS,
    errors
})
export const clearErrors = () => ({
    type: CLEAR_ERRORS
})

export const login = (user) => dispatch => {
    return SessionApiUtil.login(user)
        .then(user => dispatch(receiveCurrentUser(user)),
        err => (dispatch(receiveErrors(err.responseJSON))))
}

export const logout = () => dispatch => {
    return SessionApiUtil.logout()
        .then(user => dispatch(logoutCurrentUser(user)))
}

export const signup = (user) => dispatch => {
    return SessionApiUtil.signup(user)
        .then(user => dispatch(receiveCurrentUser(user)),
        err => (dispatch(receiveErrors(err.responseJSON))))
}

export const fetchUser = userId => dispatch => {
    return SessionApiUtil.fetchUser(userId)
        .then(userId => dispatch(receiveUser(userId)))
}

export const updateUser = user => dispatch => {
    return SessionApiUtil.updateUser(user)
        .then(user => dispatch(receiveUser(user))
        )
}


export const fetchUsers = () => dispatch => {
    return SessionApiUtil.fetchUsers()
        .then(users => dispatch(receiveUsers(users)))
}