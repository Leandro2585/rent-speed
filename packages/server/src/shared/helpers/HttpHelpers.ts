import { HttpResponse } from '../protocols/Http';

export const badRequest = (error: Error): HttpResponse => ({
  statusCode: 400,
  body: error
})