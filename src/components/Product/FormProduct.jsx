import React, { useEffect, useLayoutEffect, useState } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import Alert from "../Alert/Alert";

const FormProduct = () => {

  let location = useLocation()
  let data = location.state?.value
  const alert = new Alert()
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [total, setTotal] = useState("");
  const [description, setDescription] = useState("");
  const [msg, setMsg] = useState("");
  const [isError, setIsError] = useState(false)
  const navigate = useNavigate();

  const saveProduct = async (e) => {
    e.preventDefault();
    let postData = {
      name: name,
      price: price,
      description: description,
      qty: quantity
    }
    try {
      !data ? await axios.post("http://localhost:5000/products", postData) : axios.patch(`http://localhost:5000/products/${data.uuid}`, postData)
      navigate("/products");
      !data ? alert.successCreate() : alert.successEdit()
    } catch (error) {
      alert.errorCreate("Pastikan semua data terisi dengan benar")
    }
  };

  useEffect(() => {
    setTotal(quantity * price)
  }, [price, quantity])

  useEffect(() => {
    if (data) {
      setName(data.name)
      setPrice(data.price)
      setDescription(data.description)
      setQuantity(data.qty)
    }
  }, [data])


  return (
    <div>
      <h1 className="title">Products</h1>
      <h2 className="subtitle">{!data ? "Add New Product" : "Update Product"}</h2>
      <div className="card is-shadowless">
        <div className="card-content">
          <div className="content">
            <form defaultValue={data} onSubmit={saveProduct}>
              <div className="field">
                <label className="label">Name</label>
                <div className="control">
                  <input
                    required={true}
                    type="text"
                    key={"name"}
                    className="input"
                    value={name}
                    maxLength={100}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Product Name"
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Quantity</label>
                <div className="control">
                  <input
                    required={true}
                    min={1}
                    defaultValue={1}
                    maxLength={1000}
                    type="number"
                    className="input"
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                    placeholder="quantity"
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Price</label>
                <div className="control">
                  <input
                    required={true}
                    type="number"
                    id="rupiah"
                    className="input is-5"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    placeholder="Price"
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Total</label>
                <div className="control">
                  <input
                    disabled={true}
                    required={true}
                    type="number"
                    id="rupiah"
                    className="input is-5"
                    value={total}
                    // onChange={(e) => setPrice(e.target.value)}
                    placeholder="Price"
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Description</label>
                <div className="control">
                  <textarea
                    required={true}
                    maxLength={250}
                    type="text"
                    className="textarea"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Price"
                  />
                </div>
              </div>

              <div className="field">
                <div className="control">
                  <button type="submit" className="button is-success">
                    Save
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormProduct;
