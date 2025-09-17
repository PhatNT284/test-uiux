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
      <div>
        <MyHeader />
        <Banner />
        <Info />
        <AdvanceHeadling />
        <HeadingListProducts />
      </div>
    </>
  );
}

export default HomePage;
