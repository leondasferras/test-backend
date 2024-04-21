export enum RequestStatus {
  NEW = 'новая',
  INWORK = 'в работе',
  COMPLETE = 'завершена'
}


export const ResponseTypeRequestObject = {
  schema: {
    type: 'object',
    properties: {
      id:{type: 'number'},
      createdAt: {type: 'string'},
      updatedAt: {type: 'string'},
      companyName: {type: 'string'},
      driverName: {type: 'string'},
      driverPhoneNumber: {type: 'string'},
      commentary: {type: 'string'},
      requestStatus: {type: 'string'},
      atiCode: {type: 'string'}
    }
  }
}

export const ResponseTypeRequestsArray = {
  schema: {
    type: 'array',
    items: {
      type: 'object',
      properties: {
        id:{type: 'number'},
        createdAt: {type: 'string'},
        updatedAt: {type: 'string'},
        companyName: {type: 'string'},
        driverName: {type: 'string'},
        driverPhoneNumber: {type: 'string'},
        commentary: {type: 'string'},
        requestStatus: {type: 'string'},
        atiCode: {type: 'string'}
      }
    }
  }
}