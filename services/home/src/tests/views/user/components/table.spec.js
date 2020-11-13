/**  @jsx h **/

import { h } from 'preact'
import { mount } from 'enzyme'
import { Provider } from 'stacks/services/user/context'
import { provision } from 'tests/mocks/component'

import Table from 'views/user/components/table'

const component = mount(
    <Provider>
        <Table />
    </Provider>
)

describe('element', () => {
    provision('section', component)
})
