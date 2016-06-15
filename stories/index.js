import React from 'react';
import { storiesOf, action } from '@kadira/storybook';

import Breadcrumb from '../src';

storiesOf('Breadcrumb', module)
  .add('Basic', () => (
    <Breadcrumb/>
  ));
