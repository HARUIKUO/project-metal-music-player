import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
//引入provider后就不需要subscribe以及render了
import { Provider } from 'react-redux'
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { counter } from './index.redux'

// const reduxDevtools = windows.devToolsExtension?windows.devToolsExtension:()=>{}
//加载store以及中间项插件
const store = createStore(counter, compose(
    applyMiddleware(thunk),
    window.devToolsExtension?window.devToolsExtension():()=>{}
))

//Provider传入store
ReactDOM.render(
    (<Provider store={store}>
        <App />
    </Provider>),
    document.getElementById('root')
);

//Connect从外部获取组件参数

// render()
// //手动渲染store
// store.subscribe(render)
