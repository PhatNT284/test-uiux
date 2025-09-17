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
          <img src={Logo} alt="Logo" width={185} height={139} />
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
