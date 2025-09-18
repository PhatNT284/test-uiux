import MainLayout from "@components/Layout/Layout";
import CountdownTimer from "../CountdownTimer/CountdownTimer";
import styles from "./styles.module.scss";
import CountdownBanner from "@components/CountdownBanner/CountdownBanner";

function HeadingListProducts() {
  const { container, containerItem } = styles;

  const targetDate = "2025-12-31T23:59:59"; // Set your target date here

  return (
    <MainLayout>
      {/* <CountdownTimer targetDate={targetDate} /> */}
      <div className={container}>
        <CountdownBanner />
        <div className={containerItem}>
          <div>1</div>
          <div>2</div>
        </div>
      </div>
    </MainLayout>
  );
}

export default HeadingListProducts;
