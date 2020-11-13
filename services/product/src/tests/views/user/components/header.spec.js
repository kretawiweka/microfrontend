/**  @jsx h **/

import { h } from 'preact'
import { shallow } from 'enzyme'
import { provision } from 'tests/mocks/component'

import Header from 'views/user/components/header'

describe('element', () => {
    provision('header', shallow(<Header />))
})
