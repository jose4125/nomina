import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import EmployeeList from '../containers/employee-list/employee-list'

const App = (props) => (
  <BrowserRouter>
    <div>
      <div>layout</div>
      <Route exact path='/nomina' component={EmployeeList} />
    </div>
  </BrowserRouter>
)

export default App
