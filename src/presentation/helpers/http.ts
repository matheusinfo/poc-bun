export type HttpResponse = {
  statusCode: number
  body: any
}

export const serverError = (error: any): HttpResponse => ({
  statusCode: 500,
  body: error.stack
})

export const success = (data: any): HttpResponse => ({
  statusCode: 200,
  body: data
})
