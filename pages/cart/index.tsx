import { NextPage } from "next";
import React from "react";

// recoil
import { useRecoilValue } from "recoil";
import Page from "../../components/Page";
import { CartItemType } from "../../interfaces/CartItemType";
import { cartState } from "../../recoil/cartState/cartState";

const Cart: NextPage = () => {
  const cart: CartItemType[] | undefined = useRecoilValue(cartState);

  return (
    <Page>
      <p>{JSON.stringify(cart)}</p>
    </Page>
  );
};

export default Cart;
