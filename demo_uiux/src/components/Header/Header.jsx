import BoxIcon from "./BoxIcon/BoxIcon";
import Menu from "./Menu/Menu";
import { dataBoxIcon, dataMenu } from "./constant";
import styles from "./styles.module.scss";
import Logo from "@icons/images/Logo_1.png";
import reloadIcon from "@icons/svgs/reloadIcon.svg";
import heartIcon from "@icons/svgs/heartIcon.svg";
import cartIcon from "@icons/svgs/cartIcon.svg";

function MyHeader() {
  const {
    container,
    containerHeader,
    containerBoxIcon,
    containerBox,
    containerMenu,
  } = styles;

  return (
    <div className={container}>
      <div className={containerHeader}>
        <div className={containerBox}>
          <div className={containerBoxIcon}>
            {dataBoxIcon.map((item) => (
              <BoxIcon key={item.type} type={item.type} href={item.href} />
            ))}
          </div>

          <div className={containerMenu}>
            {dataMenu.slice(0, 3).map((item) => (
              <Menu
                key={item.content}
                content={item.content}
                href={item.href}
              />
            ))}
          </div>
        </div>

        <div>
          <img
            src="https://media.istockphoto.com/id/1371079009/vi/vec-to/thi%E1%BA%BFt-k%E1%BA%BF-bi%E1%BB%83u-t%C6%B0%E1%BB%A3ng-d%C3%B2ng-%C4%91%E1%BB%81-xu%E1%BA%A5t-c%E1%BB%A7a-%C4%91%E1%BA%A7u-b%E1%BA%BFp.jpg?s=612x612&w=0&k=20&c=3tm-9si9B5jbUrNiUu9bAwNxGhWtIQNPzbtJH8KVx8o="
            alt="Logo"
            width={85}
            height={85}
          />
        </div>

        <div className={containerBox}>
          <div className={containerMenu}>
            {dataMenu.slice(3).map((item) => (
              <Menu
                key={item.content}
                content={item.content}
                href={item.href}
              />
            ))}
          </div>

          <div className={containerBoxIcon}>
            <img width={26} height={26} src={reloadIcon} alt="reload" />
            <img width={26} height={26} src={heartIcon} alt="heart" />
            <img width={26} height={26} src={cartIcon} alt="cart" />
          </div>
        </div>
      </div>
    </div>
  );
}
export default MyHeader;
