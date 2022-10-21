import React from "react";
import styles from "./styles.module.css";

// recoil
import { useRecoilValue } from "recoil";
import { cartState } from "../../recoil/atoms/name";

const Topbar = () => {
  const cart = useRecoilValue(cartState);

  return (
    <header className={styles.container}>
      <div>Recoil Cart</div>
      <div>{cart?.length}</div>
    </header>
  );
};

export default Topbar;
