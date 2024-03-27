import Description from "./Description";
import Image from "./Image";
import Name from "./Name";
import Price from "./Price";
import product from "./product";

function App() {
  const { name, price, description, image } = product;
  console.log(product);
  return (
    <div className="">
      <Name name={name} />
      <Price price={price} />
      <Description description={description} />
      <Image image={image} />
    </div>
  );
}

export default App;
