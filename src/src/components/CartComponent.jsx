import React, {Component} from 'react';
import {FaCcMastercard, FaTrash} from "react-icons/fa";
import CartService from "../services/CartService";
import OrderService from "../services/OrderService";

class CartComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            cartItems: [],
            price: 0,
        }

        this.changeNameHandler = this.changeNameHandler.bind(this);
        this.addOrder =this.addOrder.bind(this);
    }

    componentDidMount() {
            CartService.getCart().then((res) => {
            this.setState({cartItems: res.data})
            console.log(this.state.cartItems)

            this.state.cartItems.map(items => {
                let a = items.bookId.price * items.quantity;
                this.state.price += a
            })
        })
    }


    changeNameHandler = (event,quantity, price) => {

        this.setState({
            price: this.state.price - (quantity.quantity-event.target.value) * price
        })
        console.log(quantity.quantity);
        console.log(event.target.value)
        quantity.quantity = Number(event.target.value);
        console.log(quantity);
    }

    addOrder(){
        if (this.state.price<=10000){

        let books = [];
        let quantity = [];

        this.state.cartItems.map(item=>{
            console.log(item.bookId.id)
            books.push(item.bookId.id);
            quantity.push(item.quantity);
        })
        let order= {
            id: "",
            user_id: "",
            status: "",
            books: books,
            quantity: quantity
        }
        console.log(JSON.stringify(order));
        OrderService.postOrder(order).then(res=>{
            console.log(res.data);
            CartService.deleteFromCart().catch(res=>{
                alert("Your order is accepted")
                window.location.reload();
            })
        });
        }else {
            alert("Your order amount exceeds 10,000 KZT, please change your order");
        }

    }







    render() {
        const onClickDelete = (id) => {
            CartService.delete(id).then(res => {
                window.location.reload()
            })
        }
        return (
            <div>
                <div className="container py-5 h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col">
                            <div className="card">
                                <div className="card-body p-4">
                                    <div className="row">
                                        <div className="col-lg-7">
                                            <h5 className="mb-3"><a href="#!" className="text-body"><i
                                                className="fas fa-long-arrow-alt-left me-2"/>Continue shopping</a>
                                            </h5>
                                            <hr/>

                                            <div className="d-flex justify-content-between align-items-center mb-4">
                                                <div>
                                                    <p className="mb-1">Shopping cart</p>
                                                    <p className="mb-0">You have {this.state.cartItems.length} items in
                                                        your cart</p>
                                                </div>

                                            </div>
                                            {this.state.cartItems.map(
                                                item =>
                                                    <div className="card mb-3" style={{
                                                        boxShadow: " rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                                                        borderRadius: "10px"
                                                    }}>
                                                        <div className="card-body">
                                                            <div className="d-flex justify-content-between">
                                                                <div className="d-flex flex-row align-items-center">
                                                                    <div>
                                                                        <img
                                                                            src={item.bookId.bookImage}
                                                                            className="img-fluid rounded-3"
                                                                            alt="Shopping item"
                                                                            style={{width: "80px"}}/>
                                                                    </div>
                                                                    <div className="ms-3" style={{marginLeft: "10px"}}>
                                                                        <h5 title={item.bookId.name}>{item.bookId.name.length > 10 ? `${item.bookId.name.substring(0, 20)}...` : item.bookId.name}</h5>
                                                                        {item.bookId.authors.map(author =>
                                                                            <p className="small mb-0">{author.fullName}</p>
                                                                        )}
                                                                    </div>
                                                                </div>
                                                                <div className="d-flex flex-row align-items-center">
                                                                    <div style={{width: "100px"}}>
                                                                        <input type="number" id="quantity"
                                                                               name="quantity" min="1"
                                                                               onChange={(event)=>this.changeNameHandler(event,item,item.bookId.price)}
                                                                               defaultValue={item.quantity} style={{
                                                                            border: "1px solid #ccc",
                                                                            borderRadius: "5px",
                                                                            fontWeight: "bold",
                                                                            textAlign: "center",
                                                                            width: "50px",
                                                                            padding: "5px"
                                                                        }}/>
                                                                    </div>
                                                                    <div style={{width: "110px"}}>
                                                                        <h5 className="mb-0">{item.bookId.price} KZT</h5>
                                                                    </div>
                                                                    <a  onClick={()=>onClickDelete(item.id)}
                                                                       style={{color: "#afaeae",cursor:"pointer"}}><FaTrash
                                                                        className="fas fa-trash-alt"/></a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                            )
                                            }

                                        </div>
                                        <div className="col-lg-5">
                                            <div className="card  text-white rounded-3"
                                                 style={{backgroundColor: "#44b89d"}}>
                                                <div className="card-body">
                                                    <div
                                                        className="d-flex justify-content-between align-items-center mb-4">
                                                        <h5 className="mb-0">Card
                                                            details</h5>
                                                    </div>

                                                    <p className="small mb-2">Card type</p>
                                                    <a href="#" type="submit"
                                                       className="text-white"><FaCcMastercard/></a>
                                                    <a href="#" type="submit"
                                                       className="text-white"><i
                                                        className="fab fa-cc-visa fa-2x me-2"/></a>
                                                    <a href="#" type="submit"
                                                       className="text-white"><i
                                                        className="fab fa-cc-amex fa-2x me-2"/></a>
                                                    <a href="#" type="submit"
                                                       className="text-white"><i
                                                        className="fab fa-cc-paypal fa-2x"/></a>

                                                    <form className="mt-4">
                                                        <div
                                                            className="form-outline form-white mb-4">
                                                            <input type="text" id="typeName"
                                                                   className="form-control form-control-lg"
                                                                   siez="17"
                                                                   placeholder="Cardholder's Name"/>
                                                            <label className="form-label"
                                                                   htmlFor="typeName">Cardholder's
                                                                Name</label>
                                                        </div>

                                                        <div
                                                            className="form-outline form-white mb-4">
                                                            <input type="text" id="typeText"
                                                                   className="form-control form-control-lg"
                                                                   siez="17"
                                                                   placeholder="1234 5678 9012 3457"
                                                                   minLength="19"
                                                                   maxLength="19"/>
                                                            <label className="form-label"
                                                                   htmlFor="typeText">Card
                                                                Number</label>
                                                        </div>

                                                        <div className="row mb-4">
                                                            <div className="col-md-6">
                                                                <div
                                                                    className="form-outline form-white">
                                                                    <input type="text"
                                                                           id="typeExp"
                                                                           className="form-control form-control-lg"
                                                                           placeholder="MM/YYYY"
                                                                           size="7" id="exp"
                                                                           minLength="7"
                                                                           maxLength="7"/>
                                                                    <label
                                                                        className="form-label"
                                                                        htmlFor="typeExp">Expiration</label>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-6">
                                                                <div
                                                                    className="form-outline form-white">
                                                                    <input type="password"
                                                                           id="typeText"
                                                                           className="form-control form-control-lg"
                                                                           placeholder="&#9679;&#9679;&#9679;"
                                                                           size="1"
                                                                           minLength="3"
                                                                           maxLength="3"/>
                                                                    <label
                                                                        className="form-label"
                                                                        htmlFor="typeText">Cvv</label>
                                                                </div>
                                                            </div>
                                                        </div>

                                                    </form>
                                                    <hr className="my-4"/>
                                                    <div
                                                        className="d-flex justify-content-between mb-4">
                                                        <p className="mb-2">Total : </p>
                                                        <p className="mb-2">{this.state.price} KZT</p>
                                                    </div>

                                                    <button type="button" onClick={this.addOrder}
                                                            className="btn btn-info btn-block btn-lg">
                                                        <div
                                                            className="d-flex justify-content-between">
                                                            <span>{this.state.price} KZT</span>
                                                            <span>Checkout <i
                                                                className="fas fa-long-arrow-alt-right ms-2"/></span>
                                                        </div>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CartComponent;