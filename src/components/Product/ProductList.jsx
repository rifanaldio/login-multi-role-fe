import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { IconBase } from "react-icons";
import Alert from "../Alert/Alert";
import Swal from "sweetalert2"

const ProductList = () => {

  let navigate = useNavigate()
  const alert = new Alert()
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    const response = await axios.get("http://localhost:5000/products");
    setProducts(response.data);
  };

  const deleteProduct = async (productId) => {
    Swal.fire({
      title: "Apa kamu yakin?",
      text: "Anda tidak akan dapat mengembalikan ini!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await axios.delete(`http://localhost:5000/products/${productId}`);
          getProducts();
        } catch (error) {
          console.log(error);
        }
        Swal.fire("Terhapus!", "Data anda berhasil dihapus.", "success");
      } else if (result.isDenied) {
        Swal.fire("Terhapus!", "Error", "error");
      }
    });
  };

  const handleEdit = (value) => {
    navigate(
      "/products/add",
      {
        state: {
          value
        }
      }
    )
  }

  return (
    <div>
      <h1 className="title">Products</h1>
      <h2 className="subtitle">List of Products</h2>
      <Link to="/products/add" className="button is-primary mb-2">
        Add New
      </Link>
      <div className="table-container">
        <table className="table is-striped is-fullwidth">
          <thead>
            <tr>
              <th>No</th>
              <th>Actions</th>
              <th>Product Name</th>
              <th>Price</th>
              <th>Description</th>
              <th>Created By</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr key={product.uuid}>
                <td>{index + 1}</td>
                <td className="is-flex is-flex-direction-row">
                  <div className="pr-1">
                    <button className="button is-small is-responsive  is-info" onClick={() => handleEdit(product)}>
                      <i className="fa fa-edit" ></i>
                    </button>
                    {/* <Link
                    to={`/products/edit/${product.uuid}`}
                    className="button is-small is-responsive  is-info"
                  >
                    Edit
                  </Link> */}
                  </div>

                  <div>
                    <button
                      onClick={() => deleteProduct(product.uuid)}
                      className="button is-small is-responsive is-danger"
                    >
                      <i class="fa fa-trash" aria-hidden="true"></i>
                    </button>
                  </div>
                </td>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>{product.description}</td>
                <td>{product.user.name}</td>

              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductList;
