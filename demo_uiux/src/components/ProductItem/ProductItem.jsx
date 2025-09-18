import styles from "./styles.module.scss";
import infoIcon from "@icons/svgs/infoIcon.svg";
import cart2Icon from "@icons/svgs/cart2Icon.svg";
import reload2Icon from "@icons/svgs/reload2Icon.svg";

function ProductItem({ src, prevSrc, name, price }) {
  const {
    boxImg,
    showImgWhenHover,
    showFncWhenHover,
    boxIcon,
    title,
    priceCl,
  } = styles;

  return (
    <div>
      <div className={boxImg}>
        <img
          src="https://media.istockphoto.com/id/530650573/vi/anh/ph%E1%BB%9F-b%C3%B2.jpg?s=612x612&w=0&k=20&c=AsQ_5rac8KZEaWXhh_u0kXFXssPGQm8gsomHJD7cRJE="
          alt=""
        />
        <img
          src="https://media.istockphoto.com/id/1048350058/vi/anh/s%C3%BAp-truy%E1%BB%81n-th%E1%BB%91ng-vi%E1%BB%87t-nam-ph%E1%BB%9F-b%E1%BA%A1c-v%E1%BB%9Bi-th%E1%BB%8Bt-b%C3%B2-v%C3%A0-rau-m%C3%B9i-t%C6%B0%C6%A1i-tr%C3%AAn-b%C3%A0n-g%E1%BB%97-m%E1%BB%99c-m%E1%BA%A1c.jpg?s=612x612&w=0&k=20&c=hCMI0hLedG-A_n9itfB0s8-VsSM0c0HPViUMrWN-sTY="
          alt=""
          className={showImgWhenHover}
        />

        <div className={showFncWhenHover}>
          <div className={boxIcon}>
            <img src={cart2Icon} alt="cart2Icon" />
          </div>
          <div className={boxIcon}>
            <img src={infoIcon} alt="infoIcon" />
          </div>
          <div className={boxIcon}>
            <img src={reload2Icon} alt="reload2Icon" />
          </div>
        </div>
      </div>
      <div className={title}>Pho Tai Nam</div>
      <div className={priceCl}>210.000 VND</div>
    </div>
  );
}

export default ProductItem;
