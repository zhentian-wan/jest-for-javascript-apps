import React from 'react'
import {render} from 'calculator-test-util'
import CalculatorDisplay from '../shared/calculator-display'

test('mounts', () => {
  const {container} = render(<CalculatorDisplay value="0" />)
  expect(container.firstChild).toMatchSnapshot()
})