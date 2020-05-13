const Statement1 = () => import('views/statement-1')
const Statement2 = () => import('views/statement-2')
const Array1 = () => import('views/array-1')
const Array2 = () => import('views/array-2')

const routes = [
  {
    path: '/statement-1',
    component: Statement1
  },
  {
    path: '/statement-2',
    component: Statement2
  },
  {
    path: '/array-1',
    component: Array1
  },
  {
    path: '/array-2',
    component: Array2
  }
]

export default routes
