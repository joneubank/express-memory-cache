declare namespace Express {
  export interface Response {
    __send?(body: any): Send;
    __end?(
      chunk?: any | Function,
      encoding?: string | Function,
      cb?: Function,
    ): void;
  }
}
