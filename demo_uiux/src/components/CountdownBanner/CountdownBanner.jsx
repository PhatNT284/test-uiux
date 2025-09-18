import Button from "@components/Button/Button";
import CountdownTimer from "@components/CountdownTimer/CountdownTimer";
import styles from "./styles.module.scss";

function CountdownBanner() {
  const { container, containerTimmer, title, boxBtn } = styles;

  const targetDate = "2025-12-31T00:00:00";

  return (
    <div className={container}>
      <div className={containerTimmer}>
        <CountdownTimer targetDate={targetDate} />
      </div>
      <p className={title}>Good Deal Will Comeback</p>
      <div className={boxBtn}>
        <Button content={"Order now"} />
      </div>
    </div>
  );
}

export default CountdownBanner;
