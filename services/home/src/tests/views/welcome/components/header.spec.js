/**  @jsx h **/

import { h } from 'preact'
import { shallow } from 'enzyme'
import { provision } from 'tests/mocks/component'

import Header from 'views/welcome/components/header'

describe('element', () => {
    provision('header', shallow(<Header />))
})
