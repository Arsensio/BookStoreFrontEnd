import React, {Component} from 'react';
import BookService from "../services/BookService";
import AuthorService from "../services/AuthorService";
import {FaHeart, FaExpand, FaShoppingCart, FaPlus, FaEdit, FaAngleDown} from "react-icons/fa";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {Typeahead} from "react-bootstrap-typeahead";
import PublisherService from "../services/PublisherService";
import GenreService from "../services/GenreService";
import 'react-confirm-alert/src/react-confirm-alert.css';
import CartService from "../services/CartService";
import {Collapse} from "react-bootstrap";

class BooksListComponent extends Component {

    constructor(props) {

        super(props);
        this.state = {
            books: [],
            show: false,
            listAuthors: [],
            listGenres: [],
            listPublishers: [],
            role: localStorage.getItem("role"),
            id: '',
            price: '',
            publisherId: '',
            name: '',
            numOfpage: '',
            bookQuantity: '',
            bookImage: '',
            yearOfIssue: 2022,
            authors: [],
            genres: [],

            bookPerPage: 20,
            currentPage: 1,
            totalPages: 1,
            pageArray: [],

            collapseMenu: true,

            genreFilter: [],

            hidePagination:false
        }

        this.changeNameHandler = this.changeNameHandler.bind(this);
        this.changePriceHandler = this.changePriceHandler.bind(this);
        this.handleTypeaheadAuthorSelected = this.handleTypeaheadAuthorSelected.bind(this);
        this.changeNumberOfPageHandler = this.changeNumberOfPageHandler.bind(this);
        this.changeQuantityHandler = this.changeQuantityHandler.bind(this);
        this.changeYearHandler = this.changeYearHandler.bind(this);
        this.handleTypeaheadGenreSelected = this.handleTypeaheadGenreSelected.bind(this);
        this.handleTypeaheadPublisherSelected = this.handleTypeaheadPublisherSelected.bind(this);
        this.changeImageHandler = this.changeImageHandler.bind(this);
        this.addToCart = this.addToCart.bind(this);
        this.genreFilter = this.genreFilter.bind(this);
    }


    componentDidMount() {
        BookService.getBooks(this.state.currentPage, this.state.bookPerPage).then((res) => {
            this.setState({
                books: res.data.content,
                currentPage: res.data.pageNumber + 1,
                totalPages: res.data.totalPages,
                pageArray: Array.from(Array(this.state.totalPages).keys())
            });
        })
    }

    nextPage = (next) => {
        BookService.getBooks(next, this.state.bookPerPage).then((res) => {
            this.setState({
                books:
                res.data.content,
                currentPage: res.data.pageNumber + 1,
                totalPages: res.data.totalPages,
                pageArray: Array.from(Array(this.state.totalPages).keys())
            });
            window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
            console.log(this.state.pageArray)
        })
    }

    seeMore(id) {
        this.props.history.push('/books/' + id);
    }

    addToCart = (id) => {
        let cart = {
            bookId: id,
            quantity: 1
        }
        console.log(JSON.stringify(cart));

        CartService.addToCart(JSON.stringify(cart)).then(res => {
            alert('Added to a Cart');
            // window.location.reload()
        });
    }

    handleModal() {
        this.setState({show: !this.state.show});
        AuthorService.getAuthors(1, 200).then((res) => {
            this.setState({
                listAuthors: res.data.content
            })
        })
        PublisherService.getPublishers().then((res) => {
            this.setState({
                listPublishers: res.data.content
            })
        })
        GenreService.getGenres().then((res) => {
            console.log(res.data)
            this.setState({
                listGenres: res.data
            })
        })
    }


    changeNameHandler = (event) => {
        this.setState({name: event.target.value});
        console.log(this.state.name)
    }

    changePriceHandler = (event) => {
        this.setState({price: event.target.value});
    }

    handleTypeaheadAuthorSelected = selected => {
        var products = selected.reduce((acc, author) => {
            acc.push(author.id);
            return acc;
        }, []);

        this.setState({authors: products})
    };

    changeNumberOfPageHandler = (event) => {
        this.setState({numOfpage: event.target.value});
    }

    changeQuantityHandler = (event) => {
        this.setState({bookQuantity: event.target.value});
        console.log(this.state.bookQuantity)
    }

    changeYearHandler = (event) => {
        this.setState({yearOfIssue: event.target.value});
    }

    handleTypeaheadGenreSelected = selected => {
        const products = selected.reduce((acc, genre) => {
            acc.push(genre.id);
            return acc;
        }, []);
        this.setState({genres: products})
    };

    handleTypeaheadPublisherSelected = selected => {
        selected.map(pub => {
            return this.setState({publisherId: pub.id})
        })
    };

    changeImageHandler = (event) => {
        this.setState({bookImage: event.target.value});
    }

    saveBook = (e) => {
        e.preventDefault();
        let book = {
            id: this.state.id,
            price: this.state.price,
            publisherId: this.state.publisherId,
            name: this.state.name,
            numOfPages: this.state.numOfpage,
            bookQuantity: this.state.bookQuantity,
            bookImage: this.state.bookImage,
            yearOfIssue: this.state.yearOfIssue,
            authors: this.state.authors,
            genres: this.state.genres
        }
        console.log(JSON.stringify(book));
        if (this.state.price !== '' && this.state.publisherId !== '' && this.state.name !== '' && this.state.numOfpage !== '' && this.state.bookQuantity !== '' && this.state.bookImage !== '' && this.state.yearOfIssue !== '' && this.state.authors !== [] && this.state.genres !== []) {
            BookService.createBook(JSON.stringify(book)).then(r => {
                alert('Book succesfully added')
                window.location.reload()
            });
        } else {
            alert('Fill in all the fields');
        }
    }

    showHide = (e) => {
        e.preventDefault();
        this.setState({
            collapseMenu: !this.state.collapseMenu
        });
    }


    genreFilter = (e, id) => {
        if (e.target.checked) {
            this.state.genreFilter.push(id);
            console.log("IF" + this.state.genreFilter);
            BookService.getBookByGenresIds(this.state.genreFilter).then(res => {
                this.setState({books: res.data,
                    hidePagination:true
                })
            })
        } else {
            this.state.genreFilter = this.state.genreFilter.filter(item => {
                return item !== id
            });
            if (this.state.genreFilter.length===0){
                this.setState({hidePagination:false})
            }
            console.log("ELSE" + this.state.genreFilter);
            BookService.getBookByGenresIds(this.state.genreFilter).then(res => {
                console.log(res.data);
                this.setState({books: res.data})
            })
        }

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
        const style = {
            transform: this.showHide ? 'rotate(180deg)' : '',
            transition: 'transform 150ms ease', // smooth transition
        }
        return (

            <section className="section-products" style={{backgroundColor: "#f5f6f9"}}>
                <div className="container" style={{}}>
                    <a style={style}
                       onClick={this.showHide}
                       href="#collapseExample"
                       aria-expanded="false"
                       aria-controls="collapseExample"
                       style={{fontSize: "20", display: "inline-block"}}
                    >
                        <b>Filter</b> <FaAngleDown/>
                    </a>
                </div>

                <div className="container" style={{display: "flex", justifyContent: "center"}}>


                    <Collapse in={!this.state.collapseMenu}>
                        <div className="">
                            <h4 className="text-lg-start" style={{paddingBottom: '20px'}}>Choose Genres</h4>
                            <table style={{paddingLeft: '20px'}}>
                                <tr>
                                    <td width={450}>
                                        <div className="row">
                                            <div className="form-check mb-3 col-md-6 ">
                                                <input className="form-check-input"
                                                       onClick={(event) => this.genreFilter(event, 1)} type="checkbox"
                                                       value="" id="1"/>
                                                <label className="form-check-label" htmlFor="flexCheckDefault">
                                                    Young adult
                                                </label>
                                            </div>
                                        </div>
                                    </td>
                                    <td width={450}>
                                        <div className="row">
                                            <div className="form-check mb-3 col-md-6 ">
                                                <input className="form-check-input" type="checkbox"
                                                       onClick={(event) => this.genreFilter(event, 2)}
                                                       value="" id="2"/>
                                                <label className="form-check-label" htmlFor="flexCheckDefault">
                                                    Остросюжетная литература
                                                </label>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td width={450}>
                                        <div className="row">
                                            <div className="form-check mb-3 col-md-6 ">
                                                <input className="form-check-input" type="checkbox"
                                                       onClick={(event) => this.genreFilter(event, 3)}
                                                       value="" id="3"/>
                                                <label className="form-check-label" htmlFor="flexCheckDefault">
                                                    Современная мировая проза
                                                </label>
                                            </div>
                                        </div>
                                    </td>
                                    <td width={450}>
                                        <div className="row">
                                            <div className="form-check mb-3 col-md-6 ">
                                                <input className="form-check-input" type="checkbox"
                                                       onClick={(event) => this.genreFilter(event, 4)}
                                                       value="" id="4"/>
                                                <label className="form-check-label" htmlFor="flexCheckDefault">
                                                    Детектив
                                                </label>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td width={450}>
                                        <div className="row">
                                            <div className="form-check mb-3 col-md-6 ">
                                                <input className="form-check-input" type="checkbox"
                                                       onClick={(event) => this.genreFilter(event, 5)}
                                                       value="" id="3"/>
                                                <label className="form-check-label" htmlFor="flexCheckDefault">
                                                    Всемирная классика
                                                </label>
                                            </div>
                                        </div>
                                    </td>
                                    <td width={450}>
                                        <div className="row">
                                            <div className="form-check mb-3 col-md-6 ">
                                                <input className="form-check-input" type="checkbox"
                                                       onClick={(event) => this.genreFilter(event, 6)}
                                                       value="" id="4"/>
                                                <label className="form-check-label" htmlFor="flexCheckDefault">
                                                    Детская литература
                                                </label>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td width={450}>
                                        <div className="row">
                                            <div className="form-check mb-3 col-md-6 ">
                                                <input className="form-check-input" type="checkbox"
                                                       onClick={(event) => this.genreFilter(event, 7)}
                                                       value="" id="3"/>
                                                <label className="form-check-label" htmlFor="flexCheckDefault">
                                                    Поэзия
                                                </label>
                                            </div>
                                        </div>
                                    </td>
                                    <td width={450}>
                                        <div className="row">
                                            <div className="form-check mb-3 col-md-6 ">
                                                <input className="form-check-input" type="checkbox"
                                                       onClick={(event) => this.genreFilter(event, 8)}
                                                       value="" id="4"/>
                                                <label className="form-check-label" htmlFor="flexCheckDefault">
                                                    Фантастика
                                                </label>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td width={450}>
                                        <div className="row">
                                            <div className="form-check mb-3 col-md-6 ">
                                                <input className="form-check-input" type="checkbox"
                                                       onClick={(event) => this.genreFilter(event, 9    )}
                                                       value="" id="3"/>
                                                <label className="form-check-label" htmlFor="flexCheckDefault">
                                                    Эпос
                                                </label>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            </table>
                            {/*<div className="row">*/}
                            {/*    <div className="form-check mb-3 col-md-6 ">*/}
                            {/*        <input className="form-check-input" type="checkbox" value="" id="1"/>*/}
                            {/*        <label className="form-check-label" htmlFor="flexCheckDefault">*/}
                            {/*            Young adult*/}
                            {/*        </label>*/}
                            {/*    </div>*/}
                            {/*</div>*/}
                        </div>
                    </Collapse>
                </div>
                <div className="container">
                    {this.state.role === "ADMIN" ? (

                        <div className="row" style={{display: "flex", justifyContent: 'flex-end'}}>
                            <button onClick={() => {
                                this.handleModal()
                            }} className="btn btn-success" style={{
                                marginRight: "50px",
                                paddingLeft: "30px",
                                paddingRight: "30px",
                                paddingTop: "10px",
                                backgroundColor: "#44b89d"
                            }}><FaPlus/></button>
                            <Modal show={this.state.show}>
                                <form className="needs-validation ">

                                    <Modal.Header>Modal Header</Modal.Header>

                                    <Modal.Body>
                                        <div className="row was-validated">
                                            <div className="mb-3 col-md-6">
                                                <label>Book Name</label>
                                                <input type="text" name="bookName" className="form-control"
                                                       onChange={this.changeNameHandler} required/>
                                            </div>
                                            <div className="mb-3 col-md-6">
                                                <label>Price</label>
                                                <input type="number" name="price" className="form-control"
                                                       onChange={this.changePriceHandler} required/>
                                            </div>
                                        </div>
                                        <div className="row ">
                                            <div className="mb-3 col-md-6 was-validated">
                                                <label>Authors</label>
                                                <Typeahead key="authors" id="publisher"
                                                           onChange={this.handleTypeaheadAuthorSelected}
                                                           options={this.state.listAuthors} style={{width: 465}}
                                                           clearButton
                                                           multiple
                                                           placeholder="Choose a Authors..." required
                                                />
                                            </div>
                                        </div>
                                        <div className="row was-validated">
                                            <div className="mb-3 col-md-6">
                                                <label>Number of pages</label>
                                                <input type="number" name="bookName" className="form-control"
                                                       onChange={this.changeNumberOfPageHandler} required/>
                                            </div>
                                            <div className="mb-3 col-md-6">
                                                <label>Quantity</label>
                                                <input type="number" min="1" defaultValue="1" name="quantity"
                                                       className="form-control"
                                                       onChange={this.changeQuantityHandler} required/>
                                            </div>
                                        </div>
                                        <div className="row was-validated">
                                            <div className="mb-3 col-md-6">
                                                <label>Published year</label>
                                                <input type="number" min="1700" max="2022" defaultValue="2022"
                                                       name="bookName" className="form-control"
                                                       onChange={this.changeYearHandler} required/>
                                            </div>
                                            <div className="mb-3 col-md-6 was-validated">
                                                <label>Genres</label>
                                                <Typeahead key="publisher" id="publisher"
                                                           options={this.state.listGenres}
                                                           clearButton
                                                           multiple
                                                           onChange={this.handleTypeaheadGenreSelected}
                                                           placeholder="Choose a genres..." required
                                                />
                                            </div>
                                        </div>
                                        <div className="row was-validated">
                                            <div className="mb-3 col-md-6">
                                                <label>Publisher</label>
                                                <Typeahead key="genres" id="genres" options={this.state.listPublishers}
                                                           style={{width: 465}}
                                                           onChange={this.handleTypeaheadPublisherSelected}
                                                           placeholder="Choose a publisher..." required
                                                />
                                            </div>
                                        </div>
                                        <div className="row col-auto was-validated">
                                            <label>Image link</label>
                                            <input type="url" name="bookImage" className="form-control"
                                                   onChange={this.changeImageHandler} required/>
                                        </div>
                                    </Modal.Body>
                                    <Modal.Footer>
                                        <Button type="submit" className="btn btn-success"
                                                onClick={this.saveBook}>Submit</Button>
                                        <Button className="btn btn-danger" onClick={() => {
                                            this.handleModal()
                                        }}>Cancel</Button>
                                    </Modal.Footer>
                                </form>
                            </Modal>
                        </div>
                    ) : (
                        <div></div>
                    )}

                    <h2 className="text-center" style={{marginBottom: "40px"}}>OUR BOOKS</h2>
                    <div className="row">
                        {
                            this.state.books.map(
                                book =>
                                    <div key={book.id} className="col-md-6 col-lg-4 col-xl-3 ">
                                        <div id={book.id} className="single-product">
                                            <div className="part-1" style={divStyle(book.bookImage)}>
                                                <ul>
                                                    <li><a onClick={() => this.addToCart(book.id)}
                                                           style={{cursor: "pointer"}}><FaShoppingCart
                                                        className="fas fa-heart"/></a></li>
                                                    <li><a href="/"><FaHeart className="fas fa-heart"/></a></li>
                                                    {
                                                        this.state.role === "ADMIN" ? (
                                                            <li><a href={editHref(book.id)}><FaEdit
                                                                className="fas fa-heart"/></a></li>
                                                        ) : (<></>)
                                                    }


                                                    <li><a href={getHref(book.id)}><FaExpand
                                                        className="fas fa-heart"/></a></li>
                                                </ul>
                                            </div>
                                            <div className="part-2">
                                                <h3 className="product-title">  {book.name.length > 20 ?
                                                    `${book.name.substring(0, 18)}...` : book.name
                                                }</h3>
                                                <h4 className="product-old-price">{book.price + 500}</h4>
                                                <h4 className="product-price">{book.price} KZT</h4>
                                                </div>
                                        </div>
                                    </div>
                            )
                        }
                    </div>
                    <div hidden={this.state.hidePagination} className="row align-items-center" style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center"
                    }}>
                        {
                            Array.from(Array(this.state.totalPages).keys()).map(iten => (
                                console.log(this.state.currentPage),
                                    iten !== this.state.currentPage ? (
                                        <a className="btn-success" key={iten} onClick={() => this.nextPage(iten + 1)}
                                           style={{
                                               padding: "10px",
                                               paddingLeft: "20px",
                                               paddingRight: "20px",
                                               borderRadius: "5px",
                                               backgroundColor: "#44b89d",
                                               color: "white",
                                               cursor: "pointer",
                                               margin: "5px"
                                           }}>{iten + 1}</a>
                                    ) : (
                                        <a className="btn-success" style={{
                                            padding: "10px",
                                            paddingLeft: "20px",
                                            paddingRight: "20px",
                                            borderRadius: "5px",
                                            backgroundColor: "#000000",
                                            color: "white",
                                            cursor: "pointer",
                                            margin: "5px"
                                        }}>{iten + 1}</a>
                                    )
                            ))
                        }


                    </div>
                </div>
            </section>
        );
    }
}

export default BooksListComponent;