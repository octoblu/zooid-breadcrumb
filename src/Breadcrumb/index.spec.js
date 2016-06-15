import chai, { expect } from 'chai'
import chaiEnzyme from 'chai-enzyme'
import React from 'react'
import sinonChai from 'sinon-chai'
import { shallow } from 'enzyme'

import Breadcrumb from './'

chai.use(chaiEnzyme())
chai.use(sinonChai)

describe('<Breadcrumb />', () => {
  it('should render nothing', () => {
    const sut = shallow(<Breadcrumb />)
    expect(sut).to.be.empty
  })
})
