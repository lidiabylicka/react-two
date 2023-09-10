import Product from "./Product";

const ProductList = ({ products }) => {
  return (
    <>
      <div className="product-list">
        <div className="products-title">
          <h2>Products list:</h2>
        </div>
        {products.map((product, index) => (
          <Product
            key={index}
            name={product.name}
            price={product.price}
            description={product.description}
          />
        ))}
      </div>
    </>
  );
};

export default ProductList;
