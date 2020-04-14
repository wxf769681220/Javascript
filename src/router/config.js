const Welcome = () => import('views/welcome')

const routes = [
  {
    path: '/',
    redirect: '/welcome'
  },
  {
    path: '/welcome',
    component: Welcome
  }
]

export default routes
