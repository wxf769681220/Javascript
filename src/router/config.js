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
const Bom2 = () => import('views/bom-2')
const Bom3 = () => import('views/bom-3')
const Bom4 = () => import('views/bom-4')
const Bom5 = () => import('views/bom-5')

const Dom1 = () => import('views/dom-1')
const Dom2 = () => import('views/dom-2')
const Dom3 = () => import('views/dom-3')
const Dom4 = () => import('views/dom-4')
const Dom5 = () => import('views/dom-5')
const Dom6 = () => import('views/dom-6')
const Dom7 = () => import('views/dom-7')
const Dom8 = () => import('views/dom-8')

const DomEvent1 = () => import('views/dom-event-1')
const DomEvent2 = () => import('views/dom-event-2')
const DomEvent3 = () => import('views/dom-event-3')
const DomEvent4 = () => import('views/dom-event-4')
const DomEvent5 = () => import('views/dom-event-5')

const Form1 = () => import('views/form-1')
const Form2 = () => import('views/form-2')
const Form3 = () => import('views/form-3')
const Form4 = () => import('views/form-4')

const Json1 = () => import('views/json-1')
const Ajax1 = () => import('views/ajax-1')

const Canvas1 = () => import('views/canvas-1')
const Canvas2 = () => import('views/canvas-2')

const Timer1 = () => import('views/timer-1')
const ClientDetection1 = () => import('views/client-detection-1')

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
    path: '/bom-2',
    component: Bom2
  },
  {
    path: '/bom-3',
    component: Bom3
  },
  {
    path: '/bom-4',
    component: Bom4
  },
  {
    path: '/bom-5',
    component: Bom5
  },
  {
    path: '/dom-1',
    component: Dom1
  },
  {
    path: '/dom-2',
    component: Dom2
  },
  {
    path: '/dom-3',
    component: Dom3
  },
  {
    path: '/dom-4',
    component: Dom4
  },
  {
    path: '/dom-5',
    component: Dom5
  },
  {
    path: '/dom-6',
    component: Dom6
  },
  {
    path: '/dom-7',
    component: Dom7
  },
  {
    path: '/dom-8',
    component: Dom8
  },
  {
    path: '/dom-event-1',
    component: DomEvent1
  },
  {
    path: '/dom-event-2',
    component: DomEvent2
  },
  {
    path: '/dom-event-3',
    component: DomEvent3
  },
  {
    path: '/dom-event-4',
    component: DomEvent4
  },
  {
    path: '/dom-event-5',
    component: DomEvent5
  },
  {
    path: '/form-1',
    component: Form1
  },
  {
    path: '/form-2',
    component: Form2
  },
  {
    path: '/form-3',
    component: Form3
  },
  {
    path: '/form-4',
    component: Form4
  },
  {
    path: '/json-1',
    component: Json1
  },
  {
    path: '/ajax-1',
    component: Ajax1
  },
  {
    path: '/canvas-1',
    component: Canvas1
  },
  {
    path: '/canvas-2',
    component: Canvas2
  },
  {
    path: '/timer-1',
    component: Timer1
  },
  {
    path: '/client-detection-1',
    component: ClientDetection1
  },
  {
    path: '/supplement-1',
    component: Supplement1
  }
]

export default routes
