import { Iproduct, productstatus} from "../models/products";


    export const productsArray : Array<Iproduct>=[
    {
      pName: 'Samsung M31',
      pId: '1',
      pStatus: productstatus.InProgress,
      canReturn : 1
    },
    {
      pName: 'Samsung TV LED',
      pId: '2',
      pStatus:productstatus.Delivered,
      canReturn : 1
    },
    {
      pName: 'Iphone 14',
      pId: '3',
      pStatus:productstatus.Delivered,
      canReturn : 0
    },
    {
      pName: 'Sony Headphone',
      pId: '4',
      pStatus: productstatus.Dispathched,
      canReturn : 0
    }
  ];









