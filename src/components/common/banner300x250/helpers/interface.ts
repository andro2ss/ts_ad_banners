export interface Offers {
  name: string;
  price: string;
  currency: string;
  imgURL: string;
}
export interface AdData {
  offers: Offers[];
}
