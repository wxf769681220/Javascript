const DataType1 = () => import('views/dataType-1')

const Operator1 = () => import('views/operator-1')
const Operator2 = () => import('views/operator-2')

const Statement1 = () => import('views/statement-1')
const Statement2 = () => import('views/statement-2')
const Statement3 = () => import('views/statement-3')

const ReferenceType1 = () => import('views/reference-type-1')
const ReferenceType2 = () => import('views/reference-type-2')
const ReferenceType3 = () => import('views/reference-type-3')
const ReferenceType4 = () => import('views/reference-type-4')

const Object1 = () => import('views/object-1')
const Object2 = () => import('views/object-2')
const Object3 = () => import('views/object-3')

const Array1 = () => import('views/array-1')
const Array2 = () => import('views/array-2')
const Array3 = () => import('views/array-3')

const Function1 = () => import('views/function-1')
const Function2 = () => import('views/function-2')
const Function3 = () => import('views/function-3')
const Function4 = () => import('views/function-4')
const Function5 = () => import('views/function-5')
const Function6 = () => import('views/function-6')
const Function7 = () => import('views/function-7')

const Bom1 = () => import('views/bom-1')

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
    path: '/operator-2',
    component: Operator2
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
    path: '/statement-3',
    component: Statement3
  },
  {
    path: '/reference-type-1',
    component: ReferenceType1
  },
  {
    path: '/reference-type-2',
    component: ReferenceType2
  },
  {
    path: '/reference-type-3',
    component: ReferenceType3
  },
  {
    path: '/reference-type-4',
    component: ReferenceType4
  },
  {
    path: '/object-1',
    component: Object1
  },
  {
    path: '/object-2',
    component: Object2
  },
  {
    path: '/object-3',
    component: Object3
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
    path: '/function-4',
    component: Function4
  },
  {
    path: '/function-5',
    component: Function5
  },
  {
    path: '/function-6',
    component: Function6
  },
  {
    path: '/function-7',
    component: Function7
  },
  {
    path: '/bom-1',
    component: Bom1
  },
  {
    path: '/supplement-1',
    component: Supplement1
  }
]

export default routes
