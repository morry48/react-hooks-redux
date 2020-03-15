import React, { useReducer } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Events from './Events'

import EventForm from './EventForm'
import AppContext from '../contexts/AppContext'
import reducer from '../reducers/index';

console.log({AppContext})

const App =() => {
  
  const initialState = {
    events: []
  }
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <AppContext.Provider value={{state, dispatch}}>
      <div className="container-fluid">
        <EventForm />
        <Events />
      </div>
    </AppContext.Provider>
  );
}

export default App;
