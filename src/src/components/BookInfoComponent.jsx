import React, {Component} from 'react';
import BookService from "../services/BookService";
import CartService from "../services/CartService";
import { useHistory } from "react-router-dom";

class BookInfoComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id: this.props.match.params.id,
            authorName: [],
            bookImage: '',
            genres: [],
            name: '',
            numOfpage: '',
            price: '',
            publisher: '',
            yearOfIssue: '',
            bookQuantity: '',


            counter:1
        }
        this.onChange = this.onChange.bind(this);
        this.addToCart = this.addToCart.bind(this);
    }

    componentDidMount() {
        BookService.getBooksById(this.state.id).then((res) => {
            console.log(res.data)
            let book = res.data;
            this.setState({
                id:book.id,
                authorName: book.authorName,
                bookImage: book.bookImage,
                genres: book.genres,
                name: book.name,
                numOfpage: book.numOfpages,
                price: book.price,
                publisher: book.publisher,
                yearOfIssue: book.yearOfIssue,
                bookQuantity: book.bookQuantity,

                currentUser:localStorage.getItem("username")
            })
        })
    }

    addToCart = (e) =>{
        console.log(this.state.currentUser)
        if (this.state.currentUser!==null){
            console.log("here")

        let cart = {
            bookId: this.state.id,
            quantity:this.state.counter
        }
        console.log(JSON.stringify(cart))
        CartService.addToCart(JSON.stringify(cart)).then(res=>{
            alert('Added to a Cart');
            this.props.history.push('/books');
            window.location.reload()
        });
        }else {
            this.props.history.push("/login");
            window.location.reload()
        }

    }

    onChange = (event)=>{
        this.setState({counter:event.target.value});
        console.log(this.state.counter);
    }

    render() {
        return (
            <div className="container" style={{marginTop: "70px", marginBottom: "100px"}}>
                <div className="row" style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                }}>
                    <div className="col-md-5">
                        <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img className="d-block w-100" src={this.state.bookImage} alt="First slide"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-7 ">
                        <h1>{this.state.name.length > 20 ?
                            `${this.state.name.substring(0, 55)}...` : this.state.name
                        }</h1>
                        <p style={{
                            color: "#FE980F",
                            fontSize: "26px",
                            fontWeight: "bold",
                            paddingTop: "20px"
                        }}>Price: {this.state.price} KZT</p>
                        <p><b>Authors : </b>{this.state.authorName.join(", ")}</p>
                        <p><b>Number of page : </b> {this.state.numOfpage} </p>
                        <p><b>Publisher : </b> {this.state.publisher} </p>
                        <p><b>Genres : </b>{this.state.genres.join(", ")}</p>
                        <p><b>In stock : </b>{this.state.bookQuantity}</p>
                        <form>
                            <input type="number" id="quantity" name="quantity" min="1" max={this.state.bookQuantity}
                                   defaultValue="1" onChange={this.onChange} style={{
                                border: "1px solid #ccc",
                                borderRadius: "5px",
                                fontWeight: "bold",
                                textAlign: "center",
                                width: "50px",
                                padding: "5px"
                            }}/>
                            <button type="button" onClick={()=>this.addToCart(this)} className="btn " style={{
                                backgroundColor: "#44b89d",
                                borderRadius: "50px",
                                marginLeft: "5px",
                                color: "white"
                            }}> Add to Cart</button>
                        </form>

                    </div>
                </div>

            </div>
        );
    }
}

export default BookInfoComponent;