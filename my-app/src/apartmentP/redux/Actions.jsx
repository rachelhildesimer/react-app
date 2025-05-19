export const setCurrentUser=(user,email)=>{
    return {type:'SET_CURRENT_USER' , payload:{user,email}}
}