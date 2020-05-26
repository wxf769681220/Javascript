const DataType1 = () => import('views/dataType-1')
const Operator1 = () => import('views/operator-1')

const Statement1 = () => import('views/statement-1')
const Statement2 = () => import('views/statement-2')
const Array1 = () => import('views/array-1')
const Array2 = () => import('views/array-2')
const Array3 = () => import('views/array-3')
const Function1 = () => import('views/function-1')
const Function2 = () => import('views/function-2')
const Function3 = () => import('views/function-3')
const Supplement1 = () => import('views/supplement-1')

const routes = [
  {
    path: '/dataType-1',
    component: DataType1
  },
  {
    path: '/operator-1',
    component: Operator1
  },
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
  },
  {
    path: '/array-3',
    component: Array3
  },
  {
    path: '/function-1',
    component: Function1
  },
  {
    path: '/function-2',
    component: Function2
  },
  {
    path: '/function-3',
    component: Function3
  },
  {
    path: '/supplement-1',
    component: Supplement1
  }
]

export default routes
