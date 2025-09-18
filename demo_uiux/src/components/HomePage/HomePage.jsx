import Banner from "@components/Banner/Banner";
import MyHeader from "@components/Header/Header";
import styles from "./styles.module.scss";
import Info from "@components/Info/Info";
import AdvanceHeadling from "@components/AdvanceHeading/AdvanceHeadling";
import HeadingListProducts from "@components/HeadingListProduct/HeadingListProducts";

function HomePage() {
  const { container } = styles;

  return (
    <>
      <MyHeader />
      <Banner />
      <Info />
      <AdvanceHeadling />
      <HeadingListProducts />
      <div
        style={{
          height: "200px",
        }}
      ></div>
    </>
  );
}

export default HomePage;
