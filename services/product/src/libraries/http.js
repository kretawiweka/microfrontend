import axios from 'axios'
import buildUrl from 'build-url'

export const environment = 'development'
export const endpoint = {
    main: {
        development: 'http://5e88d19219f5190016fed7e9.mockapi.io/hooks/',
    },
}

export const request = (endpoint, service, method = 'get', body) => {
    let options = {},
        servicepoint = endpoint[environment] + service

    switch (method) {
        case 'list':
            {
                options = {
                    method: 'get',
                    url: buildUrl(servicepoint, { queryParams: body }),
                    headers: {
                        accept: '*/*',
                        'content-type': 'application/json',
                    },
                }
            }
            break

        case 'get':
        case 'delete':
            {
                let { identity } = body

                options = {
                    method: method,
                    url: buildUrl(servicepoint, { path: identity }),
                    headers: {
                        accept: '*/*',
                        'content-type': 'application/json',
                    },
                }
            }
            break

        case 'post':
            {
                options = {
                    method: method,
                    url: buildUrl(servicepoint),
                    data: body,
                    headers: {
                        accept: '*/*',
                        'content-type': 'application/json',
                    },
                }
            }
            break

        case 'put':
        case 'patch':
            {
                let { identity, field } = body

                options = {
                    method: method,
                    url: buildUrl(servicepoint, { path: identity }),
                    data: field,
                    headers: {
                        accept: '*/*',
                        'content-type': 'application/json',
                    },
                }
            }
            break
    }

    return axios(options).then((response) => {
        return response
    })
}
