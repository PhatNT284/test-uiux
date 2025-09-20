import HeaderSideBar from "@components/ContentSideBar/components/HeaderSideBar/HeaderSideBar";
import ItemProduct from "@components/ContentSideBar/components/ItemProduct/ItemProduct";
import { TfiReload } from "react-icons/tfi";
import styles from "./styles.module.scss";

function Compare() {
  const { container } = styles;

  return (
    <div className={container}>
      <HeaderSideBar
        icon={<TfiReload style={{ fontSize: "30px" }} />}
        title="COMPARE"
      />
      <ItemProduct />
    </div>
  );
}

export default Compare;
