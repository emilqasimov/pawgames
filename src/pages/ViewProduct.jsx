import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function ViewProduct() {
  const [product, setProduct] = useState({});

  const { id } = useParams();

  useEffect(() => {
    fetch(`https://djangoapicodersproject-production.up.railway.app/api/v1/products/detail/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id]);

  return (
    <div className="container h-100">
      <div className="col-12 d-flex justify-content-end">
        <Link to="/admin/products" className="btn btn-primary">
          Go Back
        </Link>
      </div>
      <div className="asd d-flex h-100 justify-items-center align-items-center">
        <div className="row">
          <div className="col-4">
            <div className="img">
              <img src={product?.image} alt={product?.title} />
            </div>
          </div>
          <div className="col-8 admin-text">
            <h5>Product name: {product?.title}</h5>
            <p>General info: <br />  <br />{product?.description}</p>
            <p>Price: {product?.price} $</p>
            <p>Platform: {product?.platform}</p>
            <p>Tag: {product?.tag}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ViewProduct;
