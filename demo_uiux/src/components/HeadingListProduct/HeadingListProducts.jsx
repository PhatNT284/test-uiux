import MainLayout from "@components/Layout/Layout";
import CountdownTimer from "../CountdownTimer/CountdownTimer";

function HeadingListProducts() {
  const targetDate = "2025-12-31T23:59:59"; // Set your target date here

  return (
    <MainLayout>
      <CountdownTimer targetDate={targetDate} />
    </MainLayout>
  );
}

export default HeadingListProducts;
