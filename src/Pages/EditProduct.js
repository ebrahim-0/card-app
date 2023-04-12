import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

function EditProduct() {
  let navigate = useNavigate();

  let { productId } = useParams();

  const [product, setProduct] = useState([]);

  const [editProduct, setEditProduct] = useState([]);

  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0);

  useEffect(() => {
    fetch(`http://localhost:9000/products/${productId}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        setEditProduct(data);
      });
  }, []);

  const formSubmit = (e) => {
    e.preventDefault();

    axios
      .put(`http://localhost:9000/products/${productId}`, {
        title,
        price,
      })
      .then((data) => {
        console.log(data);
        navigate("/products");
      });
  };
  return (
    <>
      <h1>Edit Product</h1>
      <form style={{ width: "40em" }} onSubmit={formSubmit}>
        <div className="mb-3">
          <label htmlFor="productTitle" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="productTitle"
            placeholder="Product Title"
            aria-describedby="product title"
            value={`${editProduct.title}`}
            onChange={(e) => {
              setEditProduct({ editProduct, title: e.target.value });
              setTitle(e.target.value);
            }}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="productPrice" className="form-label">
            Price
          </label>
          <input
            type="number"
            className="form-control"
            id="productPrice"
            placeholder="Product Price"
            aria-describedby="product price"
            value={`${editProduct.price}`}
            onChange={(e) => {
              setEditProduct({ editProduct, price: e.target.value });
              setPrice(e.target.value);
            }}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Edit Product
        </button>
      </form>
    </>
  );
}

export default EditProduct;
