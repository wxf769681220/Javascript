const DataType1 = () => import('views/data-type/dataType-1')
const DataType2 = () => import('views/data-type/dataType-2')
const DataType3 = () => import('views/data-type/dataType-3')

const Operator1 = () => import('views/operator/operator-1')
const Operator2 = () => import('views/operator/operator-2')
const Operator3 = () => import('views/operator/operator-3')

const Statement1 = () => import('views/statement/statement-1')
const Statement2 = () => import('views/statement/statement-2')
const Statement3 = () => import('views/statement/statement-3')

const ReferenceType1 = () => import('views/reference-type/reference-type-1')
const ReferenceType2 = () => import('views/reference-type/reference-type-2')
const ReferenceType3 = () => import('views/reference-type/reference-type-3')
const ReferenceType4 = () => import('views/reference-type/reference-type-4')

const Object1 = () => import('views/object/object-1')
const Object2 = () => import('views/object/object-2')
const Object3 = () => import('views/object/object-3')
const Object4 = () => import('views/object/object-4')

const Array1 = () => import('views/array/array-1')
const Array2 = () => import('views/array/array-2')
const Array3 = () => import('views/array/array-3')
const Array4 = () => import('views/array/array-4')

const Function1 = () => import('views/function/function-1')
const Function2 = () => import('views/function/function-2')
const Function3 = () => import('views/function/function-3')
const Function4 = () => import('views/function/function-4')
const Function5 = () => import('views/function/function-5')
const Function6 = () => import('views/function/function-6')

const FunctionHight1 = () => import('views/function-hight/function-hight-1')
const FunctionHight2 = () => import('views/function-hight/function-hight-2')
const FunctionHight3 = () => import('views/function-hight/function-hight-3')

const Bom1 = () => import('views/bom/bom-1')
const Bom2 = () => import('views/bom/bom-2')
const Bom3 = () => import('views/bom/bom-3')
const Bom4 = () => import('views/bom/bom-4')
const Bom5 = () => import('views/bom/bom-5')

const Dom1 = () => import('views/dom/dom-1')
const Dom2 = () => import('views/dom/dom-2')
const Dom3 = () => import('views/dom/dom-3')
const Dom4 = () => import('views/dom/dom-4')
const Dom5 = () => import('views/dom/dom-5')
const Dom6 = () => import('views/dom/dom-6')
const Dom7 = () => import('views/dom/dom-7')
const Dom8 = () => import('views/dom/dom-8')

const DomEvent1 = () => import('views/dom-event/dom-event-1')
const DomEvent2 = () => import('views/dom-event/dom-event-2')
const DomEvent3 = () => import('views/dom-event/dom-event-3')
const DomEvent4 = () => import('views/dom-event/dom-event-4')

const DomEventType1 = () => import('views/dom-event-type/dom-event-type-1')
const DomEventType2 = () => import('views/dom-event-type/dom-event-type-2')
const DomEventType3 = () => import('views/dom-event-type/dom-event-type-3')
const DomEventType4 = () => import('views/dom-event-type/dom-event-type-4')
const DomEventType5 = () => import('views/dom-event-type/dom-event-type-5')
const DomEventType6 = () => import('views/dom-event-type/dom-event-type-6')
const DomEventType7 = () => import('views/dom-event-type/dom-event-type-7')

const Form1 = () => import('views/form/form-1')
const Form2 = () => import('views/form/form-2')
const Form3 = () => import('views/form/form-3')
const Form4 = () => import('views/form/form-4')

const Json1 = () => import('views/json/json-1')

const Ajax1 = () => import('views/ajax/ajax-1')
const Ajax2 = () => import('views/ajax/ajax-2')
const Ajax3 = () => import('views/ajax/ajax-3')
const Ajax4 = () => import('views/ajax/ajax-4')
const Ajax5 = () => import('views/ajax/ajax-5')
const Ajax6 = () => import('views/ajax/ajax-6')

const Storage1 = () => import('views/storage/storage-1')
const Storage2 = () => import('views/storage/storage-2')

const OfflineApp1 = () => import('views/offline-app/offline-app-1')

const Network1 = () => import('views/network/network-1')
const Network2 = () => import('views/network/network-2')

const Timer1 = () => import('views/timer/timer-1')
const Timer2 = () => import('views/timer/timer-2')

const Api1 = () => import('views/api/api-1')
const Api2 = () => import('views/api/api-2')
const Api3 = () => import('views/api/api-3')
const Api4 = () => import('views/api/api-4')
const Api5 = () => import('views/api/api-5')
const Api6 = () => import('views/api/api-6')

const Page1 = () => import('views/page/page-1')
const WebWorks1 = () => import('views/web-works/web-works-1')

const Client1 = () => import('views/client/client-1')
const Client2 = () => import('views/client/client-2')
const Client3 = () => import('views/client/client-3')
const Client4 = () => import('views/client/client-4')

const Best1 = () => import('views/best/best-1')
const Best2 = () => import('views/best/best-2')
const Best3 = () => import('views/best/best-3')

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
    path: '/dataType-3',
    component: DataType3
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
    path: '/operator-3',
    component: Operator3
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
    path: '/function-hight-1',
    component: FunctionHight1
  },
  {
    path: '/function-hight-2',
    component: FunctionHight2
  },
  {
    path: '/function-hight-3',
    component: FunctionHight3
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
    path: '/dom-event-type-1',
    component: DomEventType1
  },
  {
    path: '/dom-event-type-2',
    component: DomEventType2
  },
  {
    path: '/dom-event-type-3',
    component: DomEventType3
  },
  {
    path: '/dom-event-type-4',
    component: DomEventType4
  },
  {
    path: '/dom-event-type-5',
    component: DomEventType5
  },
  {
    path: '/dom-event-type-6',
    component: DomEventType6
  },
  {
    path: '/dom-event-type-7',
    component: DomEventType7
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
    path: '/ajax-6',
    component: Ajax6
  },
  {
    path: '/page-1',
    component: Page1
  },
  {
    path: '/web-works-1',
    component: WebWorks1
  },
  {
    path: '/offline-app-1',
    component: OfflineApp1
  },
  {
    path: '/network-1',
    component: Network1
  },
  {
    path: '/network-2',
    component: Network2
  },
  {
    path: '/storage-1',
    component: Storage1
  },
  {
    path: '/storage-2',
    component: Storage2
  },
  {
    path: '/timer-1',
    component: Timer1
  },
  {
    path: '/timer-2',
    component: Timer2
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
    path: '/client-4',
    component: Client4
  },
  {
    path: '/best-1',
    component: Best1
  },
  {
    path: '/best-2',
    component: Best2
  },
  {
    path: '/best-3',
    component: Best3
  },
  {
    path: '/supplement-1',
    component: Supplement1
  }
]

export default routes
