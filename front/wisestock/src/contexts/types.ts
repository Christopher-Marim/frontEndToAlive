interface Prices{
    opening:number;
    low:number;
    high:number;
    closing:number;
    pricedAt:string;
    volume:number
}

export interface Strock {
  name: string;
  lastPrice: number;
  priceAt: string;
  prices?: Prices[];
}
