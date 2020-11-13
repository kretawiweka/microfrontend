/**  @jsx h **/

import { h } from 'preact'
import { mount } from 'enzyme'
import { Provider } from 'stacks/services/user/context'
import { provision } from 'tests/mocks/component'

import Float from 'views/user/components/float'

const component = mount(
    <Provider>
        <Float />
    </Provider>
)

describe('element', () => {
    provision('section', component)
})
