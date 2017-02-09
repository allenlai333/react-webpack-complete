import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunkMiddleware from 'redux-thunk'
import AppContainer from './containers/AppContainer.jsx'
import AppReducers from './reducers/combineReducers'
import AsyncApp from './containers/AsyncApp.jsx'
import { Router, Route, browserHistory } from 'react-router'

let store = createStore(
  AppReducers,
  applyMiddleware(thunkMiddleware) // 允许我们 dispatch() 函数
);

console.log(store.getState());

let appElement = document.getElementById('app');
let postsElement = document.getElementById('posts');

//有store中的內容被改，則AsyncApp就會重新render一次
ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={AsyncApp}> 
      </Route>
    </Router>
  </Provider>,
  postsElement
)

/*
ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <Route path="foo" component={Foo}/>
        <Route path="bar" component={Bar}/>
      </Route>
    </Router>
  </Provider>,
  document.getElementById(appElement)
)
*/

/*
render(
  <Provider store={store}>
    <AppContainer />
  </Provider>,
  appElement
)*/