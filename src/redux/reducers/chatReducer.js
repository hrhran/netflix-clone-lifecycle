const initialState = {
    userInput: []
}

const chatbotReducer = (state = initialState, action) => {
    console.log(action)
    switch(action.type) {
        case "PUSH":
            return { ...state , userInput : [...state.userInput , action.payload]};
        default:
            return state
    }
}

export default chatbotReducer