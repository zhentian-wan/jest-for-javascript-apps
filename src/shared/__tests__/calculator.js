import 'react-testing-library/cleanup-after-each'
import React from 'react'
import {render} from 'react-testing-library'
import CalculatorDisplay from '../calculator-display'
import {createSerializer} from 'jest-emotion';
import * as emotion from 'emotion';

expect.addSnapshotSerializer(createSerializer(emotion));

test('mounts', () => {
  const {container} = render(<CalculatorDisplay value="0" />)
  expect(container.firstChild).toMatchSnapshot()
})