import MainLayout from "@components/Layout/Layout";
import styles from "./styles.module.scss";

function AdvanceHeadling() {
  const { container } = styles;

  return (
    <MainLayout>
      <div className={container}>Test</div>
    </MainLayout>
  );
}

export default AdvanceHeadling;
