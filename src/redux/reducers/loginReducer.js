const loginReducer = (auth=false, action) => {
    //console.log('look',auth)
    switch(action.type) {
        case "LOGIN":
            return {auth:!auth};
        case "LOGOUT":
            return {auth:!auth}
        default:
            return auth
    }
}

export default loginReducer