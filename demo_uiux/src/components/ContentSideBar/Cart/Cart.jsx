import styles from "./styles.module.scss";
import HeaderSideBar from "@components/ContentSideBar/components/HeaderSideBar/HeaderSideBar";
import ItemProduct from "@components/ContentSideBar/components/ItemProduct/ItemProduct";
import { BsCart2 } from "react-icons/bs";
import Button from "@components/Button/Button";

function Cart() {
  const { container, boxBtn, total } = styles;

  return (
    <div className={container}>
      <div>
        <HeaderSideBar
          icon={
            <BsCart2
              style={{
                fontSize: "30px",
              }}
            />
          }
          title="CART"
        />

        <ItemProduct />
      </div>

      <div>
        <div className={total}>
          <p>SUBTOTAL:</p>
          <p>220.000 VND</p>
        </div>

        <div className={boxBtn}>
          <Button content={"VIEW CART"} />
          <Button content={"CHECKOUT"} isPrimary={false} />
        </div>
      </div>
    </div>
  );
}

export default Cart;
