import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";
import {Provider} from 'react-redux';
import {combineReducers, createStore} from "redux";

let baiscState = [
    {id: 0, name: 'white bag', quan: 2},
    {id: 1, name: 'black bag', quan: 5},
]
let alertState = true;
let store = createStore(combineReducers({reducer, reducer2}));

function reducer(state = baiscState, action: any) {
    let copyArr = [...state];
    switch (action.type) {
        case "수량증가":
            copyArr[action.payload.data].quan++;
            return copyArr;
        case "수량감소":
            copyArr[action.payload.data].quan--;
            return copyArr;
        case "항목추가":
            console.log(copyArr);
            copyArr.push(action.payload);
            return copyArr;
        default:
            return state;
    }
}

function reducer2(state = alertState, action: any) {
    if (action.type === "alertClose") {
        state = false;
        return state;
    } else {
        return state;
    }
}


ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
    .render(
        <BrowserRouter>
            <Provider store={store}>
                <App/>
            </Provider>
        </BrowserRouter>
    );
reportWebVitals();
