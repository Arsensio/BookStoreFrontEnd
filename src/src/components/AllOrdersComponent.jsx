import React, {Component} from 'react';
import {FaEdit} from "react-icons/fa";
import OrderService from "../services/OrderService";

class AllOrdersComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            orders: [],
            books:[],
            quantity:[]
        }
        this.changeStatus = this.changeStatus.bind(this);
    }

    componentDidMount() {

        OrderService.getAdminOrders().then(res => {
            this.setState({
                orders: res.data.content,
            })
        });

    }

    changeStatus=(event,id)=>{

        console.log(id);
        let status = {
            status:event.target.value
        }
        console.log(String(event.target.value));
        OrderService.putStatus(id,JSON.stringify(status)).then(res=>{
            console.log(res.data)
            window.location.reload();
        })
    }

    render() {
        return (
            <div>
                <section className="layout_padding2">
                    <div className="small-container cart-page">
                        <table className="table table-hover" style={{verticalAlign:"middle"}}>
                            <tr>
                                <th>#</th>
                                <th>Username</th>
                                <th>Books</th>
                                <th>Status</th>
                            </tr>
                            {
                                this.state.orders.map((order, index) => (
                                    <tr style={{paddingBottom:0}}>
                                        <td style={{verticalAlign:"middle"}}>{index+1}</td>
                                        <td style={{verticalAlign:"middle"}}>{order.username}</td>
                                        <td style={{textAlign: "left",padding:0,paddingBottom:-5}}>
                                            <table style={{borderTopStyle:"none",borderBottomStyle:"none",borderRightStyle:"none"}}>

                                                {
                                                    order.books.map((book,index)=>(
                                                        <tr>
                                                            <td style={{width:180,textAlign: "left"}} title={book.name}>{book.name.length >20 ? `${book.name.substring(0, 18)}...` : book.name }</td>
                                                            <td>X</td>
                                                            <td>{order.bookQuantity[index]}</td>
                                                        </tr>
                                                    ))
                                                }
                                            </table>
                                        </td>
                                        <td style={{verticalAlign:"middle"}}>
                                            <select onChange={(event)=>this.changeStatus(event,order.id)}
                                                className="form-group col-md-7" style={{marginBottom:0}}
                                                aria-label="Default select example" defaultValue={order.status}>
                                                <option value="Заказ создан">Заказ создан</option>
                                                <option value="В обработке">В обработке</option>
                                                <option value="Выполнен">Выполнен</option>
                                                <option value="Отменен">Отменен</option>
                                            </select>
                                        </td>
                                    </tr>
                                ))
                            }

                        </table>
                    </div>
                </section>
            </div>
        );
    }
}

export default AllOrdersComponent;