import { dataMenu } from "./constants";
import styles from "./styles.module.scss";

function MyFooter() {
  const { container, boxNav } = styles;

  return (
    <div className={container}>
      <div>
        <img
          src="https://media.istockphoto.com/id/1371079009/vi/vec-to/thi%E1%BA%BFt-k%E1%BA%BF-bi%E1%BB%83u-t%C6%B0%E1%BB%A3ng-d%C3%B2ng-%C4%91%E1%BB%81-xu%E1%BA%A5t-c%E1%BB%A7a-%C4%91%E1%BA%A7u-b%E1%BA%BFp.jpg?s=612x612&w=0&k=20&c=3tm-9si9B5jbUrNiUu9bAwNxGhWtIQNPzbtJH8KVx8o="
          alt=""
          width={100}
          height={100}
        />
      </div>
      <div className={boxNav}>
        {dataMenu.map((item) => (
          <div>{item.content}</div>
        ))}
      </div>
      <div>
        <p
          style={{
            textAlign: "center",
          }}
        >
          Guaranted safe checkout
        </p>
        <img
          src="https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/elementor/thumbs/Icons-123-pzks3go5g30b2zz95xno9hgdw0h3o8xu97fbaqhtb6.png"
          alt=""
        />
      </div>

      <div
        style={{
          textAlign: "center",
          marginTop: "20px",
        }}
      >
        Copyright 2025 ISP392 theme. Created by ISP392_G1
      </div>
    </div>
  );
}

export default MyFooter;
