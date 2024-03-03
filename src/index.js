import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
// import store  from '../src/Redux/Redux2/Redux/store/Store'
import {store} from './Redux Movie app 17/redux features from redux toolkit/store';
import {ownMovieStore} from './50 own projects/own movie app/redux-toolkit/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* we should pass only one redux store to one react project,so removed another store */}
    {/* <Provider store={store} ownMovieStore={ownMovieStore}> */}
    {/* pass variable as store to Provider,otherwise,redux won't work */}

    <Provider store={ownMovieStore}>
    <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
