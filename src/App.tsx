import React, { Component } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import './App.css';
import EmployeeForm from './components/EmployeeForm/EmployeeForm';
import { MuiPickersUtilsProvider } from 'material-ui-pickers';
import DateFnsUtils from '@date-io/date-fns';
import EmployeeInfo from './components/EmployeeInfo/EmployerInfo';

class App extends Component {
  render() {
    return (
      <>
        <CssBaseline />
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <div className="App">
            <EmployeeInfo />
          </div>
        </MuiPickersUtilsProvider>
      </>
    );
  }
}

export default App;
