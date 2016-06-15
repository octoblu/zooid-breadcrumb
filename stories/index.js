import React from 'react'
import { storiesOf } from '@kadira/storybook'

import Breadcrumb from '../src'

storiesOf('Breadcrumb', module)

const array = [
  { label: 'Breadcrumb', link: 'somelink' },
]

  .add('Basic', () => (
    <Breadcrumb fragments={array} />
  ))
