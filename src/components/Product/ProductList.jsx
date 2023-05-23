import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { IconBase } from "react-icons";
import Alert from "../Alert/Alert";
import Swal from "sweetalert2"
import Button from "../Button/Button";
import ModalSubmit from "../Modal/ModalSubmit";
import MessageError from "../MessageError/MessageError";
import './product.css'
const ProductList = () => {

  let navigate = useNavigate()
  const [products, setProducts] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleModal = (product) => {
    setSelectedItem(product);
    setShowModal(prev => ({ showModal: !prev.showModal }))
  }

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    const response = await axios.get("http://localhost:5000/products");
    setProducts(response.data);
  };

  const deleteProduct = async (productId) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You will not be able to restore this!",
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
      "/products/form",
      {
        state: {
          value
        }
      }
    )
  }

  return (
    <>
      <div>
        <h1 className="title">Products</h1>
        <h2 className="subtitle">List of Products</h2>
        <Link to="/products/form" className="button is-primary mb-2 box-shadow">
          Add New
        </Link>
        <div className="table-container">
          {products.length > 0 ?
            <table className="table is-striped is-fullwidth">
              <thead>
                <tr>
                  <th>No</th>
                  <th>Actions</th>
                  <th>Product Name</th>
                  <th>Quantity</th>
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
                        <Button
                          className={`is-info`}
                          type={"print"}
                          onClick={() => (
                            handleModal(product)
                          )}
                        />
                      </div>
                      <div className="pr-1">
                        <Button
                          className={`is-info`}
                          type={"edit"}
                          onClick={() => handleEdit(product)}
                        />
                      </div>
                      <div>
                        <Button
                          className={`is-danger`}
                          type={"delete"}
                          onClick={() => deleteProduct(product.uuid)}
                        />
                      </div>
                    </td>
                    <td style={{
                      minWidth : "0",
                      maxWidth : "300px",
                      overflow: "hidden",
                      textOverflow : "ellipsis",
                      whiteSpace : "nowrap"
                    }}>{product.name}</td>
                    <td>{product.qty}</td>
                    <td>Rp.{product.price}</td>
                    <td>{product.description}</td>
                    <td>{product.user.name}</td>

                  </tr>
                ))}
              </tbody>
            </table> : <MessageError />
          }

        </div>
      </div>
      <ModalSubmit
        visible={showModal}
        item={selectedItem}
        onRequestClose={() => {
          setShowModal(false)
          setSelectedItem(null)
        }}
      />
    </>
  );
};

export default ProductList;
