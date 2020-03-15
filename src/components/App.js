import React, { useReducer } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Events from './Events'
import OperationLogs from './OperationLogs';
import EventForm from './EventForm';
import AppContext from '../contexts/AppContext'
import reducer from '../reducers/index';


const App =() => {
  
  const initialState = {
    events: [],
    operationLogs: [] 
  }
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <AppContext.Provider value={{state, dispatch}}>
      <div className="container-fluid">
        <EventForm />
        <Events />
        <OperationLogs />
      </div>
    </AppContext.Provider>
  );
}

export default App;
