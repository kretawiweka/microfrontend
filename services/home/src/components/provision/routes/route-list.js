import Home from 'views/home'
import Response from 'views/response'

const routes = [
    {
        path: '/virtual-account',
        component: Home,
    },
    {
        path: '/virtual-account/response',
        component: Response,
    },
]

export { routes }
