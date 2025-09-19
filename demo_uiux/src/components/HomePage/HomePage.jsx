import Banner from "@components/Banner/Banner";
import MyHeader from "@components/Header/Header";
import Info from "@components/Info/Info";
import AdvanceHeadling from "@components/AdvanceHeading/AdvanceHeadling";
import HeadingListProducts from "@components/HeadingListProduct/HeadingListProducts";
import { useEffect, useState } from "react";
import { getProducts } from "../../apis/productsService";
import PopularProduct from "../PopularProduct/PopularProduct";
import SaleHomePage from "../SaleHomePage/SaleHomePage";

function HomePage() {
  const [listProducts, setListProducts] = useState([]);

  useEffect(() => {
    getProducts().then((response) => {
      setListProducts(response.contents);
    });
  }, []);

  return (
    <>
      <MyHeader />
      <Banner />
      <Info />
      <AdvanceHeadling />
      <HeadingListProducts data={listProducts.slice(1, 3)} />
      <PopularProduct data={listProducts.slice(3, listProducts.length)} />
      <SaleHomePage />
      <div
        style={{
          height: "200px",
        }}
      ></div>
    </>
  );
}

export default HomePage;
