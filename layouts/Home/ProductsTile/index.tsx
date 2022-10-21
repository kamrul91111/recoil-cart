import React from "react";
import styles from "./styles.module.css";
import Image from "next/image";
import Link from "next/link";

// types
import { ProductType } from "../../../interfaces/ProductTypes";

interface IProductsTileProps {
  data: ProductType[];
  onAdd: (a: ProductType) => void;
}

const ProductsTile = ({ data, onAdd }: IProductsTileProps) => {
  return (
    <div className={styles.container}>
      {data.map(a => (
        <div className={styles.item} key={a.id}>
          <Link href={`/products/${a?.id}`}>
            <Image
              src={a?.thumbnail}
              alt={a?.title}
              width={250}
              height={150}
              objectFit="cover"
              objectPosition="center"
              style={{ cursor: "pointer" }}
            />
          </Link>
          <h3>{a?.title}</h3>
          <div className={styles.category}>{a?.category}</div>
          <button className={styles.cartButton} onClick={() => onAdd(a)}>
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProductsTile;
