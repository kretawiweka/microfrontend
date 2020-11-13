/**  @jsx h **/

import { h } from 'preact'
import { mount } from 'enzyme'
import { Provider } from 'stacks/services/user/context'
import { provision } from 'tests/mocks/component'

import Form from 'views/user/components/table'

const component = mount(
    <Provider>
        <Form />
    </Provider>
)

describe('element', () => {
    provision('section', component)
})
