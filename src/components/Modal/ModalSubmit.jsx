import { Modal, Card, Footer, Button } from "react-bulma-components"
import "../Product/product.css"
const ModalSubmit = ({
    visible = false,
    item,
    onRequestClose = null
}) => {
    console.log(item);

    return (
        <>
            <div className={`modal ${visible.showModal ? "is-active" : ""}`}>
                <div className="modal-background" onClick={() => onRequestClose()}></div>
                <div className="modal-card">
                    {/* <-- Header --> */}
                    <header className="modal-card-head">
                        <p className="modal-card-title">Invoice</p>
                        <button className="delete" aria-label="close" onClick={() => onRequestClose()}></button>
                    </header>
                    {/* <-- Header --> */}

                    {/* <-- Body --> */}
                    <section className="modal-card-body has-text-justified">
                        <div className="is-flex-direction-column">
                            <div className="is-size-1 pb-5 has-text-weight-bold">INVOICE</div>
                            <div style={{
                                display: "flex",
                                flexDirection: "row",
                                justifyContent: "space-between"
                            }}>
                                <span className="is-size-4 is-uppercase">{item?.user?.name}</span>
                                <span className="is-size-4">{item?.user?.email}</span>
                            </div>
                            <div className="content is-small pt-5"
                                style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    justifyContent: "space-evenly"
                                }}
                            >
                                <div
                                    style={{
                                        display: "flex",
                                        flexDirection: "column",
                                        justifyContent: "center",
                                        fontWeight : "bold"
                                    }}>
                                    <div>Product Name</div>
                                    <div>Quantity</div>
                                    <div>Price Per Item</div>
                                    <div>Total Price</div>
                                </div>
                                <div>
                                    <div>:</div>
                                    <div>:</div>
                                    <div>:</div>
                                    <div>:</div>
                                </div>
                                <div
                                    style={{
                                        display: "flex",
                                        flexDirection: "column",
                                        justifyContent: "center",
                                        fontWeight : "bold"
                                    }}>
                                    <div className="invoiceTable">{item?.name}</div>
                                    <div className="invoiceTable">{item?.qty}</div>
                                    <div className="invoiceTable">Rp.{item?.price}</div>
                                    <div className="invoiceTable">Rp.{(item?.qty * item?.price)}</div>
                                </div>
                                {/* <table className="table is-striped is-fullwidth">
                                    <thead>
                                        <tr>
                                            <th>Product Name</th>
                                            <th>Quantity</th>
                                            <th>Price Per Item</th>
                                            <th>Total Price</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr key={item?.uuid}>
                                            <td>{item?.name}</td>
                                            <td>{item?.qty}</td>
                                            <td>Rp.{item?.price}</td>
                                            <td>Rp.{(item?.qty * item?.price)}</td>

                                        </tr>
                                    </tbody>
                                </table> */}
                            </div>
                            {/* <div className="is-flex direction-row is-justify-content-space-between">
                                <div className="is-size-3 is-uppercase">{item?.user?.name}</div>
                                <div className="is-size-5">{item?.user?.email}</div>
                            </div>
                            <div className="is-flex direction-row">

                            </div> */}
                        </div>
                    </section>
                    {/* <-- Body --> */}

                    {/* <-- Footer --> */}
                    <footer className="modal-card-foot">
                        <div>
                            <Button className="button is-warning ">
                                <span className="has-text-weight-bold pr-2">
                                    PRINT
                                </span>
                                <i className="fa fa-print has-text-white"></i>
                            </Button>
                        </div>
                    </footer>
                    {/* <-- Footer --> */}

                </div>


            </div >
        </>
    )
}

export default ModalSubmit;