import { combineReducers } from "redux"
import chatReducer from "./chatReducer"
import loginReducer from "./loginReducer"
import titleReducer from "./titleReducer"

const rootReducer = combineReducers({
    auth: loginReducer,
    titles: titleReducer,
    chatbot: chatReducer
})

export default rootReducer