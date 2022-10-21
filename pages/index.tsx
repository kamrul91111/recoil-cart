import type { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";

// types
import { CartItemType } from "../interfaces/CartItemType";
import { ProductType } from "../interfaces/ProductTypes";

// api
import { baseUrl } from "../api/fakeRest";

// components
import ProductsTile from "../layouts/Home/ProductsTile";
import Page from "../components/Page";

// recoil
import { useRecoilState } from "recoil";
import { cartState } from "../recoil/cartState/cartState";

interface IHomeProps {
  data: ProductType[];
}

const Home: NextPage<IHomeProps> = ({ data }) => {
  const [cart, setCart] = useRecoilState<CartItemType[] | undefined>(cartState);

  const onAdd = (i: ProductType): void => {
    if (!cart) return;

    setCart([...cart, { ...i, quantity: 1 }]);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Recoil Cart</title>
        <meta
          name="description"
          content="Simple cart application with Next JS and Recoil"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Page>
        <div className={styles.main}>
          <div className={styles.mainContainer}>
            <h2>Products</h2>
            <ProductsTile data={data} onAdd={onAdd} />
          </div>
        </div>
      </Page>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const response = await fetch(`${baseUrl}/products`);
  const { products } = await response.json();

  const data: ProductType[] = products;

  return {
    props: {
      data,
    },
  };
};

export default Home;
