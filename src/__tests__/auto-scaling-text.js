import React from 'react'
import {render} from 'calculator-test-util'
import AutoScalingText from '../shared/auto-scaling-text'

test('renders', () => {
    const {container} = render(<AutoScalingText />)
    console.log(container.innerHTML)
})