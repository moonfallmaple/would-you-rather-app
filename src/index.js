import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider} from 'react-redux';
import './index.css';
import App from './components/App';
import reducer from './reducers';
import { BrowserRouter } from "react-router-dom";
const store = createStore(reducer)

ReactDOM.render(

  <Provider store={store}>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <App />
    </BrowserRouter>
  </Provider>
  ,document.getElementById('root'));

