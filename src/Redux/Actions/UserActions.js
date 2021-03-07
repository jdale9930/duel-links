export const SET_CURRENT_NAME = "Add to deck"
export const SET_CURRENT_ID = "Remove from deck"

export function setCurrentUser(name){
    return{type: SET_CURRENT_NAME, name: name}
}

export function setCurrentId(id){
    return{type: SET_CURRENT_ID, id: id}
}