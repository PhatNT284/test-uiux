import styles from "./styles.module.scss";
import { IoMdClose } from "react-icons/io";

function ItemProduct() {
  const { container, boxContent, title, price, boxClose } = styles;

  return (
    <div className={container}>
      <img
        src="https://media.istockphoto.com/id/1095319880/vi/anh/m%C3%AC-trung-qu%E1%BB%91c-v%E1%BB%9Bi-s%C6%B0%E1%BB%9Dn-heo-om.jpg?s=612x612&w=0&k=20&c=GoysVCiIypc3ZscXlh2gZjl7Fy_dZTjjPyL6_tjsS-k="
        alt=""
      />

      <div className={boxClose}>
        <IoMdClose
          style={{
            fontSize: "20px",
            color: "c1c1c1",
          }}
        />
      </div>

      <div className={boxContent}>
        <div className={title}>title of product</div>
        <div className={price}>220.000 VND</div>
      </div>
    </div>
  );
}

export default ItemProduct;
