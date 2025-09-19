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
        <img src={src} alt="" />
        <img src={prevSrc} alt="" className={showImgWhenHover} />

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
      <div className={title}>{name}</div>
      <div className={priceCl}>${price}</div>
    </div>
  );
}

export default ProductItem;
