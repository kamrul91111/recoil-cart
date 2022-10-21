import { GetServerSideProps, NextPage } from "next";
import styles from "./styles.module.css";
import React from "react";
import { baseUrl } from "../../api/fakeRest";
import Image from "next/image";

// types
import { ProductType } from "../../interfaces/ProductTypes";

// components
import Page from "../../components/Page";

interface IProductDetailsProps {
  data: ProductType;
}

const ProductDetails: NextPage<IProductDetailsProps> = ({ data }) => {
  const {
    thumbnail,
    title,
    description,
    images,
    price,
    rating,
    stock,
    brand,
    category,
  } = data;

  return (
    <Page>
      <div className={styles.container}>
        {/* product image */}
        <div className={styles.leftContainer}>
          <Image
            src={thumbnail}
            alt={title}
            width={400}
            height={400}
            objectFit="contain"
            className={styles.thumbnail}
          />
          {/* images */}
          <div className={styles.imagesContainer}>
            {images?.map(a => (
              <div key={a} className={styles.imageItem}>
                <Image src={a} alt={title} layout="fill" />
              </div>
            ))}
          </div>
          <p>{description}</p>
        </div>
        {/* description */}
        <div>
          <h2>{title}</h2>
          <div className={styles.price}>$ {price?.toFixed(2)}</div>
          <button className={styles.cartButton}>Add to Cart</button>
          {/* details */}
          <div className={styles.detailsContainer}>
            <span>Rating: {rating}</span>
            <span>Stock: {stock}</span>
            <span>Brand: {brand}</span>
            <span>Category: {category}</span>
          </div>
        </div>
      </div>
    </Page>
  );
};

export const getServerSideProps: GetServerSideProps = async context => {
  const { id } = context?.query;

  const response = await fetch(`${baseUrl}/products/${id}`);
  const data: ProductType = await response.json();

  return {
    props: {
      data,
    },
  };
};

export default ProductDetails;
