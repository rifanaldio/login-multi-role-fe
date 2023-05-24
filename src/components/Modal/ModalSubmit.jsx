import { Modal, Card, Footer, Button } from "react-bulma-components"
import "../Product/product.css"
import html2canvas from "html2canvas"
import jsPdf from "jspdf"

const ModalSubmit = ({
    visible = false,
    item,
    onRequestClose = null
}) => {

    let date = new Date()
    let thisDate = date.toLocaleString()

    const downloadPdf = () => {
        const capture = document.querySelector('.invoice')
        html2canvas(capture).then((canvas) => {
            const imgData = canvas.toDataURL('img/png');
            const doc = new jsPdf('p', 'mm', 'a4')
            const componentWidth = doc.internal.pageSize.getWidth()
            const componentHeight = doc.internal.pageSize.getHeight()
            doc.addImage(imgData, 'PNG', 0, 0, componentWidth, componentHeight)
            doc.save(`invoice-${item?.user?.name}.pdf`)
        })
    }

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
                    <div className="invoice">
                        <section className="modal-card-body has-text-justified">
                            <div className="is-flex-direction-column">
                                <div style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    justifyContent: "space-between"
                                }}>
                                    <div className="is-size-1 pb-5 has-text-weight-bold">INVOICE</div>
                                    <div className="is-size-5 pb-5 pt-5">{thisDate}</div>

                                </div>
                                <div style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    justifyContent: "space-between"
                                }}>
                                    <span className="is-size-4 is-uppercase">{item?.user?.name}</span>
                                    <span className="is-size-6">{item?.user?.email}</span>
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
                                            fontWeight: "bold"
                                        }}>
                                        <div>Product Name</div>
                                        <div>Quantity</div>
                                        <div>Price Per Item</div>
                                        {/* <div>Total Price</div> */}
                                    </div>
                                    <div>
                                        <div>:</div>
                                        <div>:</div>
                                        <div>:</div>
                                    </div>
                                    <div
                                        style={{
                                            display: "flex",
                                            flexDirection: "column",
                                            justifyContent: "center",
                                            fontWeight: "bold"
                                        }}>
                                        <div className="invoiceTable">{item?.name}</div>
                                        <div className="invoiceTable">{item?.qty}</div>
                                        <div className="invoiceTable">Rp.{item?.price},-</div>
                                        {/* <div className="invoiceTable">Rp.{(item?.qty * item?.price)}</div> */}
                                    </div>
                                </div>
                                <div style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    justifyContent: "space-evenly",
                                    fontWeight: "bold"
                                }}>
                                    <div>

                                    </div>
                                    <span className="content is-small invoiceTable pr-5 pt-3">Total</span>
                                    <span className="is-size-4 is-uppercase pr-5"><u>Rp.{(item?.qty * item?.price)},-</u></span>

                                </div>
                                <div style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    justifyContent: "flex-start"
                                }}>
                                    <div className="is-size-6 is-uppercase mr-3 mt-3">
                                        Description
                                    </div>
                                    <div style={{
                                        width: "29rem",
                                        height: "100%"
                                    }}>
                                        <textarea className="textarea" value={item?.description}>
                                        </textarea>
                                    </div>
                                </div>
                                <hr style={{ size: "10" }}></hr>
                                <div className="is-uppercase">Inventory App</div>
                                <div className="content is-small" style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    justifyContent: "center"
                                }}>
                                    <span className="has-text-weight-bold mr-1">Name : </span> Ahmad Mahdy ,
                                    <span className="has-text-weight-bold ml-1 mr-1">Email</span> ahmadmahdy@gmail.com
                                </div>
                            </div>
                        </section >
                    </div>
                    {/* <-- Body --> */}

                    {/* <-- Footer --> */}
                    <footer className="modal-card-foot">
                        <div>
                            <Button onClick={downloadPdf} className="button is-warning ">
                                <span className="has-text-weight-bold pr-2">
                                    PRINT
                                </span>
                                <i className="fa fa-print has-text-white"></i>
                            </Button>
                        </div>
                    </footer>
                    {/* <-- Footer --> */}

                </div >


            </div >
        </>
    )
}

export default ModalSubmit;