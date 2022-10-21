import { ProductType } from "./ProductTypes";

export interface CartItemType extends ProductType {
  quantity: number;
}
