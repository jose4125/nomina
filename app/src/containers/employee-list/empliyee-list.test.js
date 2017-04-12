import React from 'react'
import {Unwrapped as UnwrappedEmployeeList} from './employee-list'
import employees from '../../reducers/employees-reducer'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'

test('Employee list >> App snapshot test', () => {
  const employeesArr = employees()
  const component = shallow(<UnwrappedEmployeeList employees={employeesArr} />)
  const tree = shallowToJson(component)
  expect(tree).toMatchSnapshot()
})
