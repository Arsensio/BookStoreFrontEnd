import React, {Component} from 'react';
import {FaEdit,} from "react-icons/fa";
import OrderService from "../services/OrderService";


class OrderComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            orders: []
        }
    }

    componentDidMount() {
        OrderService.getOrders().then(res => {
            console.log(res.data);
            this.setState({
                orders: res.data
            })
        })
    }

    render() {
        const getHref = (id) => {
            return "/orders/update/" + id;
        }
        return (
            <section className="layout_padding2">
                <div className="small-container cart-page">
                    <table style={{verticalAlign:"middle"}} className="table table-hover">
                        <tr>
                            <th>#</th>
                            <th >Name</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                        {
                            this.state.orders.map((order,index) => (
                                <tr>
                                    <td style={{verticalAlign:"middle"}}>{index+1}</td>
                                    <td style={{padding:0}}>
                                        <table style={{borderTopStyle:"none",borderBottomStyle:"none",borderRightStyle:"none"}}>
                                            {
                                                order.books.map((book,index)=>(
                                                    <tr>
                                                        <td style={{width:180,textAlign: "left",verticalAlign:"middle"}} title={book.name}>{book.name.length > 20 ?
                                                            `${book.name.substring(0, 18)}...` : book.name
                                                        }</td>
                                                        <td style={{verticalAlign:"middle"}}>X</td>
                                                        <td  style={{width:30,verticalAlign:"middle"}}>{order.bookQuantity[index]}</td>
                                                    </tr>
                                                ))
                                            }

                                        </table>
                                    </td>
                                    <td style={{verticalAlign:"middle"}}>{order.status}</td>
                                    <td style={{verticalAlign:"middle"}}>
                                        {
                                            order.status === "Заказ создан" ?(<a href={getHref(order.id)} style={{color: "#44b89d",cursor:"pointer"}} ><FaEdit style={{color: "#44b89d"}}/> </a>)
                                                :(<a style={{color: "#44b89d"}} disabled><FaEdit style={{color: "#c0c0c0"}}/> </a>)
                                        }

                                    </td>
                                </tr>
                            ))
                        }

                    </table>
                </div>
            </section>
        );
    }
}

export default OrderComponent;