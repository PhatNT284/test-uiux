import Button from "../Button/Button";
import styles from "./styles.module.scss";

function Banner() {
  const { container, content, title, des } = styles;

  return (
    <div className={container}>
      <div className={content}>
        <h1 className={title}>Restaurant Control Demo</h1>
        <div className={des}>
          Make your choice to be healthy and more special individual
        </div>
        <Button content={"Go to Restaurant"} />
      </div>
    </div>
  );
}

export default Banner;
