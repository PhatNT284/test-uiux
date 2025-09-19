import Button from "@components/Button/Button";
import styles from "./styles.module.scss";
import useTranslateXImage from "@/hooks/useTranslateXImage";

function SaleHomePage() {
  const { container, title, des, boxBtn, boxImg } = styles;

  const { translateXPosition } = useTranslateXImage();

  return (
    <>
      <div className={container}>
        <div
          className={boxImg}
          style={{
            transform: `translateX(${translateXPosition}px)`,
            transition: "transform 0.6s ease",
          }}
        >
          <img
            src="https://media.istockphoto.com/id/1095319880/vi/anh/m%C3%AC-trung-qu%E1%BB%91c-v%E1%BB%9Bi-s%C6%B0%E1%BB%9Dn-heo-om.jpg?s=612x612&w=0&k=20&c=GoysVCiIypc3ZscXlh2gZjl7Fy_dZTjjPyL6_tjsS-k="
            alt=""
          />
        </div>
        <div>
          <h2 className={title}>Sale Of The Month</h2>
          <p className={des}>For your best choice and good deal</p>
          <div className={boxBtn}>
            <Button content={"Read more"} isPrimary={false} />
          </div>
        </div>
        <div
          className={boxImg}
          style={{
            transform: `translateX(-${translateXPosition}px)`,
            transition: "transform 0.6s ease",
          }}
        >
          <img
            src="https://media.istockphoto.com/id/1473906544/vi/anh/c%E1%BA%ADn-c%E1%BA%A3nh-chi%E1%BA%BFc-b%C3%A1nh-pizza-tr%C3%B2n-ngon-mi%E1%BB%87ng-v%E1%BB%9Bi-l%C3%A1-prosciutto-mozzarella-v%C3%A0-h%C3%BAng-qu%E1%BA%BF-%E1%BB%9F-tr%C3%AAn-%C4%91%C6%B0%E1%BB%A3c.jpg?s=612x612&w=0&k=20&c=mXjMocwdRCrWm3weelQJWieXfigc9mGPuYlqKlNJl8w="
            alt=""
          />
        </div>
      </div>
    </>
  );
}

export default SaleHomePage;
