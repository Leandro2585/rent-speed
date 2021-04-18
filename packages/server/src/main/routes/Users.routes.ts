import { Router } from 'express'
import { adaptRoute } from '../adapters/express/ExpressRouteAdapter'
import { makeLoginFactory } from '../factories/LoginFactory'

export default (router: Router) => {
  router.post('/login', adaptRoute(makeLoginFactory()))
}