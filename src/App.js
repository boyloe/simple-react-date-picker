import React, { useState, useEffect } from 'react';
import range from 'lodash/range'
import Picker from 'react-mobile-picker-scroll'
import './App.css';

// function App() {
//   const [currentDate, setCurrentDate] = useState('')
//   const [selectedDay, setSelectedDay] = useState('')
//   const [selectedMonth, setSelectedMonth] = useState('')
//   const [selectedYear, setSelectedYear] = useState('')
//   const [isPickerOpen, setisPickerOpen] = useState(false)
//   const [days, setDays] = useState(range(32))
//   const [years, setYears] = useState(range(1900, 2021))
//   const [months, setMonths] = useState([{
//     'Jan':1,
//     'Feb':2, 
//     'Mar':3,
//     'Apr':4, 
//     'May':5, 
//     'Jun':6, 
//     'Jul':7, 
//     'Aug':8, 
//     'Sep':9, 
//     'Oct':10, 
//     'Nov':11, 
//     'Dec':12
// }])

//     const handleOnChange = target => {
//         console.log(target);
//     };
  
//   useEffect(() => {
//     setCurrentDate(new Date())
//   }, [])

//   return (
//     <div className="App">
//       <WheelPicker
//             data={days}
//             onChange={handleOnChange}
//             height={150}
//             width={100}
//             titleText="Enter value same as aria-label"
//             itemHeight={30}
//             selectedID={days[0]}
//             color="#ccc"
//             activeColor="#333"
//             backgroundColor="#fff"
//         />
//     </div>
//   );
// }

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      valueGroups: {
        title: 'Mr.',
        firstName: 'Micheal',
        secondName: 'Jordan'
      }, 
      optionGroups: {
        title: ['Mr.', 'Mrs.', 'Ms.', 'Dr.'],
        firstName: ['John', 'Micheal', 'Elizabeth'],
        secondName: ['Lennon', 'Jackson', 'Jordan', 'Legend', 'Taylor']
      }
    };
  }
  
  // Update the value in response to user picking event
  handleChange = (name, value) => {
    this.setState(({valueGroups}) => ({
      valueGroups: {
        ...valueGroups,
        [name]: value
      }
    }));
  };
  
  render() {
    const {optionGroups, valueGroups} = this.state;
    
    return (
      <Picker
      optionGroups={optionGroups}
      valueGroups={valueGroups}
      onChange={this.handleChange} />
      );
    }
  }
  
  export default App;
