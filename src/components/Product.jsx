const Product = ({ name, price, description }) => {
  return (
    <>
      <div className="product">
        <h3>Product name: {name}</h3>
        <h4>Price: £{price}</h4>
        <h4>Description: {description}</h4>
      </div>
    </>
  );
};

export default Product;
