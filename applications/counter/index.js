import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import SingleSpaReact from 'single-spa-react'


const reactLifecycles = SingleSpaReact({
    React,
    ReactDOM,
    rootComponent: App,
})

export const bootstrap = reactLifecycles.bootstrap
export const mount = reactLifecycles.mount
export const unmount = reactLifecycles.unmount