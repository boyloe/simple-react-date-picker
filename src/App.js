import React, { useState } from 'react';
import { DatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers'
import MomentUtils from '@date-io/moment';
import './App.css'




function App() {
  const [selectedDate, setselectedDate] = useState(new Date())

  const calculateAge = (dateStr) => {
      const today = new Date()
      const birthDate = new Date(dateStr)
      let age = today.getFullYear() - birthDate.getFullYear()
      const month = today.getMonth() - birthDate.getMonth()
      if ( month < 0 || ( month === 0 && today.getDate() < birthDate.getDate())) {
        age--
      }
      return age

  }
  return (
    <div className="app">
      <div className="birthdate-input-container">
          <MuiPickersUtilsProvider utils={MomentUtils}>
            <DatePicker 
              disableFuture
              openTo="year"
              format='dd/MM/yyyy'
              label='Date of Birth'
              views={["year", 'month', 'date']}
              value={selectedDate}
              onChange={(dateObj) => setselectedDate(dateObj._d)}
            />  
        </MuiPickersUtilsProvider>
      </div>
      <div>
        <p className="age-display">
          {`Age: ${calculateAge(selectedDate)}`}
        </p>
      </div>

    </div>
  );

}
  export default App;
