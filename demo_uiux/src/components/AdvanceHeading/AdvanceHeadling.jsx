import MainLayout from "@components/Layout/Layout";
import styles from "./styles.module.scss";

function AdvanceHeadling() {
  const { container, headline, containerMiddleBox, title, des } = styles;

  return (
    <MainLayout>
      <div className={container}>
        <div className={headline}></div>
        <div className={containerMiddleBox}>
          <p className={des}>don't miss super order</p>
          <p className={title}>Our Best Sellers</p>
        </div>
        <div className={headline}></div>
      </div>
    </MainLayout>
  );
}

export default AdvanceHeadling;
