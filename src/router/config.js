const Welcome = () => import('views/welcome')
const Statement1 = () => import('views/statement-1')
const Statement2 = () => import('views/statement-2')

const routes = [
  {
    path: '/welcome',
    component: Welcome
  },
  {
    path: '/statement-1',
    component: Statement1
  },
  {
    path: '/statement-2',
    component: Statement2
  }
]

export default routes
