import MainLayout from "@components/Layout/Layout";
import CountdownTimer from "../CountdownTimer/CountdownTimer";
import styles from "./styles.module.scss";
import CountdownBanner from "@components/CountdownBanner/CountdownBanner";
import ProductItem from "../ProductItem/ProductItem";

function HeadingListProducts({ data }) {
  const { container, containerItem } = styles;

  const targetDate = "2025-12-31T23:59:59";

  return (
    <MainLayout>
      <div className={container}>
        <CountdownBanner />
        <div className={containerItem}>
          {data.map((item) => (
            <ProductItem
              key={item.id}
              src={item.images[0]}
              prevSrc={item.images[1]}
              name={item.name}
              price={item.price}
            />
          ))}
        </div>
      </div>
    </MainLayout>
  );
}

export default HeadingListProducts;
