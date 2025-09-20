import BoxIcon from "./BoxIcon/BoxIcon";
import Menu from "./Menu/Menu";
import { dataBoxIcon, dataMenu } from "./constant";
import styles from "./styles.module.scss";
import reloadIcon from "@icons/svgs/reloadIcon.svg";
import heartIcon from "@icons/svgs/heartIcon.svg";
import cartIcon from "@icons/svgs/cartIcon.svg";
import useScrollHandling from "@/hooks/useScrollHandling";
import { useContext, useEffect, useState } from "react";
import classNames from "classnames";
import { SideBarContext } from "@/contexts/SideBarProvider";

function MyHeader() {
  const {
    container,
    containerHeader,
    containerBoxIcon,
    containerBox,
    containerMenu,
    fixedHeader,
    topHeader,
  } = styles;

  const { scrollPosition } = useScrollHandling();
  const [fixedPosition, setFixedPosition] = useState(false);

  const { isOpen, setIsOpen } = useContext(SideBarContext);
  console.log(isOpen);

  useEffect(() => {
    // if (scrollPosition > 87) {
    //   setFixedPosition(true);
    // } else {
    //   setFixedPosition(false);
    // }

    // setFixedPosition(scrollPosition > 87 ? true : false);

    setFixedPosition(scrollPosition > 87);
  }, [scrollPosition]);

  return (
    <div
      className={classNames(container, topHeader, {
        [fixedHeader]: fixedPosition,
      })}
    >
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
            {dataMenu.slice(3, dataMenu.length).map((item) => (
              <Menu
                key={item.content}
                content={item.content}
                href={item.href}
                setIsOpen={setIsOpen}
              />
            ))}
          </div>

          <div className={containerBoxIcon}>
            <img
              width={26}
              height={26}
              src={reloadIcon}
              alt="reload"
              onClick={() => setIsOpen(true)}
              style={{ cursor: "pointer" }}
            />
            <img
              width={26}
              height={26}
              src={heartIcon}
              alt="heart"
              onClick={() => setIsOpen(true)}
              style={{ cursor: "pointer" }}
            />
            <img
              width={26}
              height={26}
              src={cartIcon}
              alt="cart"
              onClick={() => setIsOpen(true)}
              style={{ cursor: "pointer" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
export default MyHeader;
