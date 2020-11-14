import React, { useState } from 'react';
import { DatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers'
import MomentUtils from '@date-io/moment';
import './App.css'



function App() {
  const [selectedDate, setselectedDate] = useState(new Date())

  return (     
    <div className="birthdate-input">
        <MuiPickersUtilsProvider utils={MomentUtils}>
          <DatePicker 
            disableFuture
            openTo="year"
            format='dd/MM/yyyy'
            label='Date of Birth'
            views={["year", 'month', 'date']}
            value={selectedDate}
            onChange={setselectedDate}
          />  
      </MuiPickersUtilsProvider>
    </div>
  );

}
  export default App;
