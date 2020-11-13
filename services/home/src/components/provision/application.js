/**  @jsx h **/

import { h } from 'preact'
import { Router, Route } from 'preact-router'

import 'assets/styles/application.scss'
import { routes } from './routes/route-list'

const Application = () => {
    return (
        <Router>
            {routes.map((item, index) => (
                <Route
                    key={index}
                    path={item.path}
                    component={item.component}
                />
            ))}
        </Router>
    )
}

export default Application
