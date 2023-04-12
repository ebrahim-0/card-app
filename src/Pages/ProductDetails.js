import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function ProductDetails() {
  let { productId } = useParams();

  const [product, setProduct] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:9000/products/${productId}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);

  return (
    <>
      {product && (
        <div className="card m-5" style={{ width: "22rem" }}>
          <img src={product.image} className="card-img-top p-3" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{product.title}</h5>
            <p className="card-text">{product.description}</p>
          </div>
        </div>
      )}
    </>
  );
}

export default ProductDetails;
