import { Request, Response } from 'express'
import { Controller, HttpRequest, HttpResponse } from '../../../shared/protocols'

export const adaptRoute = (controller: Controller) => {
  return async (request: Request, response: Response) => {
    const httpRequest: HttpRequest = {
      body: request.body
    }
    const httpResponse: HttpResponse = await controller.handle(httpRequest)
    if(httpResponse.statusCode == 200) {
      return response.status(httpResponse.statusCode).json(httpResponse.body)
    } else {
      return response.status(httpResponse.statusCode).json({
        error: httpResponse.body.message
      })
    }
  }
}
