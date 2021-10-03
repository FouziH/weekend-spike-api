import React, {useState} from 'react'
import DatePicker from 'react-date-picker'

export default function RequestInfo() {
    const [startDate, setStartDate] = useState(new Date())
    const [endDate, setEndDate] = useState(new Date())
    const [selectOption, setSelectOption] = useState('')
    console.log("get date is", startDate)
    console.log("end date is", endDate)
    console.log("selected option is", selectOption)

    const onSubmit = (event) => {
        event.preventDefault()

        const data = {
            startDate, 
            endDate,
            selectOption
        }

        console.log("data is", data)


    }
    return (
      <div>
        <form onSubmit={onSubmit}>
          <label htmlFor="">Select Offense: </label>
          <select onChange={(event) => setSelectOption(event.target.value)}>
            <option value="">Select</option>
            <option value="Aggravated-Assault">Aggravated-Assault</option>
            <option value="Burglary">Burglary</option>
            <option value="Larceny">Larceny</option>
            <option value="Motor-Vehicle-Theft">Motor-Vehicle-Theft</option>
            <option value="Homicide">Homicide</option>
            <option value="Rape">Rape</option>
            <option value="Robbery">Robbery</option>
            <option value="Arson">Arson</option>
            <option value="Violent-Crime">Violent-Crime</option>
            <option value="Property-crime">Property-crime</option>
          </select>
          <label htmlFor="">Start Date :</label>
          <DatePicker onChange={setStartDate} value={startDate} />
          <label htmlFor="">End Date: </label>
          <DatePicker onChange={setEndDate} value={endDate} />
          <button>Submit</button>
        </form>
      </div>
    );
}
