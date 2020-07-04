const DataType1 = () => import('views/dataType-1')
const DataType2 = () => import('views/dataType-2')

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
const Object4 = () => import('views/object-4')

const Array1 = () => import('views/array-1')
const Array2 = () => import('views/array-2')
const Array3 = () => import('views/array-3')
const Array4 = () => import('views/array-4')

const Function1 = () => import('views/function-1')
const Function2 = () => import('views/function-2')
const Function3 = () => import('views/function-3')
const Function4 = () => import('views/function-4')
const Function5 = () => import('views/function-5')
const Function6 = () => import('views/function-6')
const Function7 = () => import('views/function-7')
const Function8 = () => import('views/function-8')

const HighFunction1 = () => import('views/high-function-1')

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
const DomEvent6 = () => import('views/dom-event-6')

const Form1 = () => import('views/form-1')
const Form2 = () => import('views/form-2')
const Form3 = () => import('views/form-3')
const Form4 = () => import('views/form-4')

const Json1 = () => import('views/json-1')

const Ajax1 = () => import('views/ajax-1')
const Ajax2 = () => import('views/ajax-2')
const Ajax3 = () => import('views/ajax-3')
const Ajax4 = () => import('views/ajax-4')
const Ajax5 = () => import('views/ajax-5')

const OfflineApp1 = () => import('views/offline-app-1')
const OfflineApp2 = () => import('views/offline-app-2')
const OfflineApp3 = () => import('views/offline-app-3')

const Canvas1 = () => import('views/canvas-1')
const Canvas2 = () => import('views/canvas-2')

const Drag1 = () => import('views/drag-1')

const Media1 = () => import('views/media-1')
const Media2 = () => import('views/media-2')

const Timer1 = () => import('views/timer-1')
const Api1 = () => import('views/api-1')
const Api2 = () => import('views/api-2')
const Api3 = () => import('views/api-3')
const Api4 = () => import('views/api-4')
const Api5 = () => import('views/api-5')
const Api6 = () => import('views/api-6')

const Client1 = () => import('views/client-1')
const Client2 = () => import('views/client-2')
const Client3 = () => import('views/client-3')

const Practice1 = () => import('views/practice-1')
const Practice2 = () => import('views/practice-2')
const Practice3 = () => import('views/practice-3')

const Supplement1 = () => import('views/supplement-1')

const routes = [
  {
    path: '/dataType-1',
    component: DataType1
  },
  {
    path: '/dataType-2',
    component: DataType2
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
    path: '/object-4',
    component: Object4
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
    path: '/array-4',
    component: Array4
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
    path: '/function-8',
    component: Function8
  },
  {
    path: '/high-function-1',
    component: HighFunction1
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
    path: '/dom-event-6',
    component: DomEvent6
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
    path: '/ajax-2',
    component: Ajax2
  },
  {
    path: '/ajax-3',
    component: Ajax3
  },
  {
    path: '/ajax-4',
    component: Ajax4
  },
  {
    path: '/ajax-5',
    component: Ajax5
  },
  {
    path: '/offline-app-1',
    component: OfflineApp1
  },
  {
    path: '/offline-app-2',
    component: OfflineApp2
  },
  {
    path: '/offline-app-3',
    component: OfflineApp3
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
    path: '/drag-1',
    component: Drag1
  },
  {
    path: '/media-1',
    component: Media1
  },
  {
    path: '/media-2',
    component: Media2
  },
  {
    path: '/timer-1',
    component: Timer1
  },
  {
    path: '/api-1',
    component: Api1
  },
  {
    path: '/api-2',
    component: Api2
  },
  {
    path: '/api-3',
    component: Api3
  },
  {
    path: '/api-4',
    component: Api4
  },
  {
    path: '/api-5',
    component: Api5
  },
  {
    path: '/api-6',
    component: Api6
  },
  {
    path: '/client-1',
    component: Client1
  },
  {
    path: '/client-2',
    component: Client2
  },
  {
    path: '/client-3',
    component: Client3
  },
  {
    path: '/practice-1',
    component: Practice1
  },
  {
    path: '/practice-2',
    component: Practice2
  },
  {
    path: '/practice-3',
    component: Practice3
  },
  {
    path: '/supplement-1',
    component: Supplement1
  }
]

export default routes
