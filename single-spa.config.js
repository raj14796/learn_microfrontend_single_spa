import { registerApplication, start } from 'single-spa'

registerApplication(
    'counter',
    () => import('./applications/counter'),
    location => location.pathname === '/counter'
)

registerApplication(
    'todo-list',
    () => import('./applications/todo-list'),
    location => location.pathname === '/todo-list'
)

start()