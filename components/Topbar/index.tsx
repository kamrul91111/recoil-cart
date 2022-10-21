import React from "react";
import styles from "./styles.module.css";
import Link from "next/link";

// recoil
import { useRecoilValue } from "recoil";
import { cartState } from "../../recoil/cartState/cartState";

const Topbar = () => {
  const cart = useRecoilValue(cartState);

  return (
    <header className={styles.container}>
      <Link href="/">
        <div style={{ cursor: "pointer" }}>Recoil Cart</div>
      </Link>
      {/* only show if cart has items */}
      {cart && cart?.length > 0 && (
        <div className={styles.length}>
          <Link href="/cart">
            <button className={styles.cartButton}>Cart</button>
          </Link>
          <div>{cart?.length}</div>
        </div>
      )}
    </header>
  );
};

export default Topbar;
