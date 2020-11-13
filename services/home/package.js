import path from 'path'

export default (configuration) => {
    const { resolve } = configuration

    resolve.alias['react'] = 'preact/compat'
    resolve.alias['react-dom'] = 'preact/compat'

    resolve.alias.views = path.resolve(__dirname, 'src/views')
    resolve.alias.assets = path.resolve(__dirname, 'src/assets')
    resolve.alias.stacks = path.resolve(__dirname, 'src/stacks')
    resolve.alias.components = path.resolve(__dirname, 'src/components')
    resolve.alias.libraries = path.resolve(__dirname, 'src/libraries')
    resolve.alias.test = path.resolve(__dirname, 'src/tests')
}
