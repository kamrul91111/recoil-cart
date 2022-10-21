import { selector } from "recoil";
import { cartState } from "../atoms/name";

export const lengthState = selector({
  key: "cartState",

  get: ({ get }) => {
    const cart = get(cartState);
    const lengthOfCart = cart?.length;

    return lengthOfCart;
  },
});
