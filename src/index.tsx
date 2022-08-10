import React from 'react';
//
// import App from './App';
// import {BrowserRouter} from "react-router-dom";
// import { Provider } from 'react-redux';
// import { store } from './store';
// import * as serviceWorker from './serviceWorker';
// import './assets/scss/style.scss';
// import config from './config';
import {createRoot} from 'react-dom/client';

// third party
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';

// project imports
import * as serviceWorker from './serviceWorker';
import App from './App';
import {store} from './store';

// style + assets
import './assets/scss/style.scss';
import config from './config';

// let baiscState = [
//     {id: 0, name: 'white bag', quan: 2},
//     {id: 1, name: 'black bag', quan: 5},
// ]
// let alertState = true;
// let store = createStore(combineReducers({reducer, reducer2}));
//
// function reducer(state = baiscState, action: any) {
//     let copyArr = [...state];
//     switch (action.type) {
//         case "수량증가":
//             copyArr[action.payload.data].quan++;
//             return copyArr;
//         case "수량감소":
//             copyArr[action.payload.data].quan--;
//             return copyArr;
//         case "항목추가":
//             console.log(copyArr);
//             copyArr.push(action.payload);
//             return copyArr;
//         default:
//             return state;
//     }
// }
//
// function reducer2(state = alertState, action: any) {
//     if (action.type === "alertClose") {
//         state = false;
//         return state;
//     } else {
//         return state;
//     }
// }
const root = createRoot(document.getElementById('root') as Element); // createRoot(container!) if you use TypeScript
root.render(
    <Provider store={store}>
        <BrowserRouter basename={config.basename}>
            <App/>
        </BrowserRouter>
    </Provider>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();