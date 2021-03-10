export const SET_CURRENT_NAME = "Set current name"
export const SET_CURRENT_ID = "Set current id"
export const CLEAR_USER = "Clear user"

export function setCurrentUser(name){
    return{type: SET_CURRENT_NAME, name: name}
}

export function setCurrentId(id){
    return{type: SET_CURRENT_ID, id: id}
}

export function clearUser(){
    return{type: CLEAR_USER}
}