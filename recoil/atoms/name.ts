import { atom } from "recoil";
import { CartItemType } from "../../interfaces/CartItemType";

export const cartState = atom<CartItemType[] | undefined>({
  key: "cartState",
  default: [],
});
