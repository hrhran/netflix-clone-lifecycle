import './styles/global.scss'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import store from './redux/store'
import { Provider } from 'react-redux'
// import { createStore, applyMiddleware } from 'redux'

import App from './components/App'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
    <BrowserRouter>
        <Provider store={store}>
            <App />
        </Provider>
    </BrowserRouter>
)