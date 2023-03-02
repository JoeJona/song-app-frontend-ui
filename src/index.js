import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import songsReducer from './redux/songs'
import createSagaMiddleware from "redux-saga";
import { configureStore } from '@reduxjs/toolkit';
import songSaga from './redux/song_data';

const saga = createSagaMiddleware();
const store = configureStore({
  reducer: {
    songs: songsReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(saga)
});

saga.run(songSaga);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
