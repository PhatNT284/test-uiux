import Banner from "@components/Banner/Banner";
import MyHeader from "@components/Header/Header";
import styles from "./styles.module.scss";
import Info from "@components/Info/Info";
import AdvanceHeadling from "@components/AdvanceHeading/AdvanceHeadling";

function HomePage() {
  const { container } = styles;

  return (
    <div>
      <div className={container}>
        <MyHeader />
        <Banner />
        <Info />
        <AdvanceHeadling />
      </div>
    </div>
  );
}

export default HomePage;
