/**  @jsx h **/

import { h } from 'preact'
import Body from 'react-body-classname'

const Base = ({ children, sheet }) => {
    return <Body className={sheet}>{children}</Body>
}

export default Base
