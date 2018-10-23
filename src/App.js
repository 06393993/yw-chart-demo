import React, { Component } from 'react';
import { Provider } from 'react-intl-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter } from 'react-router-dom';
import { withRouter } from 'react-router';
import thunk from 'redux-thunk';

import './App.css';
import reducer from './reducer';
import Home from './Home';
import ReportCharts from './ReportCharts';

const store = createStore(
  reducer,
  applyMiddleware(thunk),
);

const Routes = withRouter(({ location, history }) => {
  if(location.search) {
    return <ReportCharts location={location} />;
  }
  return <Home location={location} history={history}/>;
});

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
            <Routes/>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
