export interface IProduct {
    title: string;
    type: string;
    price: number;
    rating: number[];
    img: string;
    id?: any
}

export interface IProductState {
    products:IProduct[],
    product: IProduct | null ,
}

export interface IState {
    products: IProductState
}