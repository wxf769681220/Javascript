import Js from './jsRoutes'
import Es from './es6Routes'

const routes = [
  {
    path: '/',
    redirect: '/javascript/dateType-1'
  },
  {
    path: '/javascript',
    component: Js.Javascript,
    children: [
      {
        path: '/javascript/dateType-1',
        component: Js.DataType1
      },
      {
        path: '/javascript/dataType-2',
        component: Js.DataType2
      },
      {
        path: '/javascript/dataType-3',
        component: Js.DataType3
      },
      {
        path: '/javascript/operator-1',
        component: Js.Operator1
      },
      {
        path: '/javascript/operator-2',
        component: Js.Operator2
      },
      {
        path: '/javascript/operator-3',
        component: Js.Operator3
      },
      {
        path: '/javascript/statement-1',
        component: Js.Statement1
      },
      {
        path: '/javascript/statement-2',
        component: Js.Statement2
      },
      {
        path: '/javascript/statement-3',
        component: Js.Statement3
      },
      {
        path: '/javascript/reference-type-1',
        component: Js.ReferenceType1
      },
      {
        path: '/javascript/reference-type-2',
        component: Js.ReferenceType2
      },
      {
        path: '/javascript/reference-type-3',
        component: Js.ReferenceType3
      },
      {
        path: '/javascript/reference-type-4',
        component: Js.ReferenceType4
      },
      {
        path: '/javascript/object-1',
        component: Js.Object1
      },
      {
        path: '/javascript/object-2',
        component: Js.Object2
      },
      {
        path: '/javascript/object-3',
        component: Js.Object3
      },
      {
        path: '/javascript/object-4',
        component: Js.Object4
      },
      {
        path: '/javascript/array-1',
        component: Js.Array1
      },
      {
        path: '/javascript/array-2',
        component: Js.Array2
      },
      {
        path: '/javascript/array-3',
        component: Js.Array3
      },
      {
        path: '/javascript/array-4',
        component: Js.Array4
      },
      {
        path: '/javascript/function-1',
        component: Js.Function1
      },
      {
        path: '/javascript/function-2',
        component: Js.Function2
      },
      {
        path: '/javascript/function-3',
        component: Js.Function3
      },
      {
        path: '/javascript/function-4',
        component: Js.Function4
      },
      {
        path: '/javascript/function-5',
        component: Js.Function5
      },
      {
        path: '/javascript/function-6',
        component: Js.Function6
      },
      {
        path: '/javascript/function-hight-1',
        component: Js.FunctionHight1
      },
      {
        path: '/javascript/function-hight-2',
        component: Js.FunctionHight2
      },
      {
        path: '/javascript/function-hight-3',
        component: Js.FunctionHight3
      },
      {
        path: '/javascript/bom-1',
        component: Js.Bom1
      },
      {
        path: '/javascript/bom-2',
        component: Js.Bom2
      },
      {
        path: '/javascript/bom-3',
        component: Js.Bom3
      },
      {
        path: '/javascript/bom-4',
        component: Js.Bom4
      },
      {
        path: '/javascript/bom-5',
        component: Js.Bom5
      },
      {
        path: '/javascript/dom-1',
        component: Js.Dom1
      },
      {
        path: '/javascript/dom-2',
        component: Js.Dom2
      },
      {
        path: '/javascript/dom-3',
        component: Js.Dom3
      },
      {
        path: '/javascript/dom-4',
        component: Js.Dom4
      },
      {
        path: '/javascript/dom-5',
        component: Js.Dom5
      },
      {
        path: '/javascript/dom-6',
        component: Js.Dom6
      },
      {
        path: '/javascript/dom-7',
        component: Js.Dom7
      },
      {
        path: '/javascript/dom-8',
        component: Js.Dom8
      },
      {
        path: '/javascript/dom-event-1',
        component: Js.DomEvent1
      },
      {
        path: '/javascript/dom-event-2',
        component: Js.DomEvent2
      },
      {
        path: '/javascript/dom-event-3',
        component: Js.DomEvent3
      },
      {
        path: '/javascript/dom-event-4',
        component: Js.DomEvent4
      },
      {
        path: '/javascript/dom-event-type-1',
        component: Js.DomEventType1
      },
      {
        path: '/javascript/dom-event-type-2',
        component: Js.DomEventType2
      },
      {
        path: '/javascript/dom-event-type-3',
        component: Js.DomEventType3
      },
      {
        path: '/javascript/dom-event-type-4',
        component: Js.DomEventType4
      },
      {
        path: '/javascript/dom-event-type-5',
        component: Js.DomEventType5
      },
      {
        path: '/javascript/dom-event-type-6',
        component: Js.DomEventType6
      },
      {
        path: '/javascript/dom-event-type-7',
        component: Js.DomEventType7
      },
      {
        path: '/javascript/form-1',
        component: Js.Form1
      },
      {
        path: '/javascript/form-2',
        component: Js.Form2
      },
      {
        path: '/javascript/form-3',
        component: Js.Form3
      },
      {
        path: '/javascript/form-4',
        component: Js.Form4
      },
      {
        path: '/javascript/json-1',
        component: Js.Json1
      },
      {
        path: '/javascript/ajax-1',
        component: Js.Ajax1
      },
      {
        path: '/javascript/ajax-2',
        component: Js.Ajax2
      },
      {
        path: '/javascript/ajax-3',
        component: Js.Ajax3
      },
      {
        path: '/javascript/ajax-4',
        component: Js.Ajax4
      },
      {
        path: '/javascript/ajax-5',
        component: Js.Ajax5
      },
      {
        path: '/javascript/ajax-6',
        component: Js.Ajax6
      },
      {
        path: '/javascript/page-1',
        component: Js.Page1
      },
      {
        path: '/javascript/web-works-1',
        component: Js.WebWorks1
      },
      {
        path: '/javascript/offline-app-1',
        component: Js.OfflineApp1
      },
      {
        path: '/javascript/network-1',
        component: Js.Network1
      },
      {
        path: '/javascript/network-2',
        component: Js.Network2
      },
      {
        path: '/javascript/storage-1',
        component: Js.Storage1
      },
      {
        path: '/javascript/storage-2',
        component: Js.Storage2
      },
      {
        path: '/javascript/timer-1',
        component: Js.Timer1
      },
      {
        path: '/javascript/timer-2',
        component: Js.Timer2
      },
      {
        path: '/javascript/api-1',
        component: Js.Api1
      },
      {
        path: '/javascript/api-2',
        component: Js.Api2
      },
      {
        path: '/javascript/api-3',
        component: Js.Api3
      },
      {
        path: '/javascript/api-4',
        component: Js.Api4
      },
      {
        path: '/javascript/api-5',
        component: Js.Api5
      },
      {
        path: '/javascript/api-6',
        component: Js.Api6
      },
      {
        path: '/javascript/client-1',
        component: Js.Client1
      },
      {
        path: '/javascript/client-2',
        component: Js.Client2
      },
      {
        path: '/javascript/client-3',
        component: Js.Client3
      },
      {
        path: '/javascript/client-4',
        component: Js.Client4
      },
      {
        path: '/javascript/best-1',
        component: Js.Best1
      },
      {
        path: '/javascript/best-2',
        component: Js.Best2
      },
      {
        path: '/javascript/best-3',
        component: Js.Best3
      },
      {
        path: '/javascript/supplement-1',
        component: Js.Supplement1
      }
    ]
  },
  {
    path: '/es6',
    component: Es.Es6,
    children: [
      {
        path: '/es/es6-1',
        component: Es.Es61
      },
      {
        path: '/es/es6-2',
        component: Es.Es62
      },
      {
        path: '/es/es6-3',
        component: Es.Es63
      },
      {
        path: '/es/es6-4',
        component: Es.Es64
      },
      {
        path: '/es/es6-5',
        component: Es.Es65
      },
      {
        path: '/es/es6-6',
        component: Es.Es66
      },
      {
        path: '/es/es6-7',
        component: Es.Es67
      },
      {
        path: '/es/es6-8',
        component: Es.Es68
      },
      {
        path: '/es/es6-9',
        component: Es.Es69
      },
      {
        path: '/es/es6-10',
        component: Es.Es610
      },
      {
        path: '/es/es6-11',
        component: Es.Es611
      },
      {
        path: '/es/es6-12',
        component: Es.Es612
      },
      {
        path: '/es/es6-13',
        component: Es.Es613
      },
      {
        path: '/es/es6-14',
        component: Es.Es614
      },
      {
        path: '/es/es6-15',
        component: Es.Es615
      },
      {
        path: '/es/es6-16',
        component: Es.Es616
      },
      {
        path: '/es/es6-17',
        component: Es.Es617
      },
      {
        path: '/es/es6-18',
        component: Es.Es618
      },
      {
        path: '/es/es6-19',
        component: Es.Es619
      },
      {
        path: '/es/es6-20',
        component: Es.Es620
      }
    ]
  }
]

export default routes
