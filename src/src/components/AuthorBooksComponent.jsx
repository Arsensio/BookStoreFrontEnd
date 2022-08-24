import React, {Component} from 'react';
import BookService from "../services/BookService";
import {FaEdit, FaExpand, FaHeart, FaShoppingCart} from "react-icons/fa";

class AuthorBooksComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id: this.props.match.params.id,
            books:[],
            role: localStorage.getItem("role"),

        }

    }

    componentDidMount() {
        BookService.getBookByAuthorId(this.state.id).then(res=>{
            // console.log(res.data);
            this.setState({books:res.data});
        })
    }

    render() {
        const divStyle = (src) => ({
            background: 'url(' + src + ') no-repeat center',
            backgroundSize: 'contain'
        })

        const getHref = (id) => {
            return "/books/" + id;
        }

        const editHref = (id) => {
            return "/edit/" + id;
        }



        return (
            <section className="section-products">


                <div className="container">
                    <h2 className="text-center" style={{marginBottom:"40px"}}>Search results</h2>
                    <div className="row">
                        {
                            this.state.books.map(
                                book =>
                                    <div key={book.id} className="col-md-6 col-lg-4 col-xl-3 " >
                                        <div id={book.id} className="single-product">
                                            <div className="part-1" style={divStyle(book.bookImage)}>
                                                <ul>
                                                    <li><a href="#"><FaShoppingCart className="fas fa-heart"/></a></li>
                                                    <li><a ><FaHeart className="fas fa-heart"/></a></li>
                                                    {
                                                        this.state.role ==="ADMIN"?(
                                                            <li><a href={editHref(book.id)}><FaEdit className="fas fa-heart"/></a></li>
                                                        ):(<></>)
                                                    }
                                                    <li><a href={getHref(book.id)}><FaExpand className="fas fa-heart"/></a></li>
                                                </ul>
                                            </div>
                                            <div className="part-2">
                                                <h3 className="product-title" >  {book.name.length > 20 ?
                                                    `${book.name.substring(0, 18)}...` : book.name
                                                }</h3>
                                                <h4 className="product-old-price">{book.price+500}</h4>
                                                <h4 className="product-price">{book.price} KZT</h4>
                                            </div>
                                        </div>
                                    </div>
                            )
                        }
                    </div>
                </div>
            </section>
        );
    }
}

export default AuthorBooksComponent;