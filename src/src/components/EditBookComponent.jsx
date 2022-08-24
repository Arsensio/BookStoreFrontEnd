import React, {Component} from 'react';
import BookService from "../services/BookService";
import {Typeahead} from "react-bootstrap-typeahead";
import AuthorService from "../services/AuthorService";
import PublisherService from "../services/PublisherService";
import GenreService from "../services/GenreService";
import Select from 'react-select';

class EditBookComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listAuthors: [],
            listGenres: [],
            listPublishers: [],
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
            authorsIds: [],
            defaultAuthor: [],
            newDefAuthors: []
        }
        this.changePriceHandler = this.changePriceHandler.bind(this);
        this.handleTypeaheadAuthorSelected = this.handleTypeaheadAuthorSelected.bind(this);
        this.changeNumberOfPageHandler = this.changeNumberOfPageHandler.bind(this);
        this.changeQuantityHandler = this.changeQuantityHandler.bind(this);
        this.handleTypeaheadGenreSelected = this.handleTypeaheadGenreSelected.bind(this);
        this.handleTypeaheadPublisherSelected = this.handleTypeaheadPublisherSelected.bind(this);
    }

    componentDidMount() {
        BookService.getBooksById(this.state.id).then((res) => {
            // console.log(res.data)
            let book = res.data;
            this.setState({
                authorName: book.authorName,
                bookImage: book.bookImage,
                genres: book.genres,
                name: book.name,
                numOfpage: book.numOfpages,
                price: book.price,
                publisher: book.publisher,
                yearOfIssue: book.yearOfIssue,
                bookQuantity: book.bookQuantity,
                authorsIds: book.authorsIds
            })


        })
        AuthorService.getAuthors(1, 50).then(res => {
            this.setState({
                listAuthors: res.data.content
            })
            this.state.authorsIds.map(id => {
                this.state.newDefAuthors.push(res.data.content.filter(function (item) {
                        return item.id === id
                    }
                ))
            })
            // console.log(res);
        })

        PublisherService.getPublishers().then((res) => {
            this.setState({
                listPublishers: res.data.content
            })
        })
        GenreService.getGenres().then((res) => {
            this.setState({
                listGenres: res.data
            })
        })

    }

    changePriceHandler = (event) => {
        this.state.price = event.target.value;
    }

    changeNumberOfPageHandler = (event) => {
        this.state.numOfpage = event.target.value;
    }

    handleTypeaheadAuthorSelected = selected => {
        var products = selected.reduce((acc, author) => {
            acc.push(author.id);
            return acc;
        }, []);

        this.setState({authors: products})
    };
    handleTypeaheadPublisherSelected = selected => {
        selected.map(pub => {
            return this.setState({publisherId: pub.id})
        })
    };

    handleTypeaheadGenreSelected = selected => {
        const products = selected.reduce((acc, genre) => {
            acc.push(genre.id);
            return acc;
        }, []);
        this.setState({genres: products})
    };


    changeQuantityHandler = (event) => {
        this.state.bookQuantity = event.target.value;
    }

    submitUpdates = (e) => {
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
            BookService.updateBook(this.state.id, JSON.stringify(book)).then(r => {
                alert('Book succesfully updated')
                this.props.history.push("/books/"+this.state.id);
                window.location.reload()
            });
        } else {
            alert('Fill in all the fields');
        }
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
                        <h1 contentEditable={true} className="mb-lg-3">{this.state.name}</h1>
                        <table className="table table-striped">
                            <tr>
                                <th>Price:</th>
                                <td><input type="number" name="price" className="form-control"
                                           onChange={this.changePriceHandler} defaultValue={this.state.price} required/>
                                </td>
                            </tr>
                            <tr>
                                <th>Authors:</th>
                                <td><Typeahead key="authors" id="author"
                                               defaultSelected={this.state.newDefAuthors}
                                               onChange={this.handleTypeaheadAuthorSelected}
                                               options={this.state.listAuthors}
                                               clearButton
                                               multiple
                                               placeholder="Choose a Authors..." required
                                /></td>
                            </tr>
                            <tr>
                                <th>Number of page :</th>
                                <td><input type="number" name="numofpage" defaultValue={this.state.numOfpage}
                                           className="form-control"
                                           onChange={this.changeNumberOfPageHandler} required/></td>
                            </tr>
                            <tr>
                                <th>Publisher :</th>
                                <td><Typeahead key="authors" id="publisher"
                                               onChange={this.handleTypeaheadPublisherSelected}
                                               options={this.state.listPublishers}
                                               clearButton
                                               placeholder="Choose a Publisher..." required
                                /></td>
                            </tr>
                            <tr>
                                <th>Genres :</th>
                                <td><Typeahead key="authors" id="publisher"
                                               onChange={this.handleTypeaheadGenreSelected}
                                               options={this.state.listGenres}
                                               clearButton
                                               multiple
                                               placeholder="Choose a Genres..." required
                                /></td>
                            </tr>
                            <tr>
                                <th>In stock :</th>
                                <td><input type="number" name="bookQuantity" defaultValue={this.state.bookQuantity}
                                           className="form-control"
                                           onChange={this.changeQuantityHandler} required/></td>
                            </tr>
                        </table>
                        <div className="row"
                             style={{display: "flex", justifyContent: 'flex-end', paddingRight: "25px"}}>
                            <a className="btn btn-success" style={{
                                marginRight: "5px",
                                paddingLeft: "20px",
                                paddingRight: "20px",
                                color: "white"
                            }} onClick={this.submitUpdates}>Save</a>
                            <a href="/books" className="btn btn-danger" style={{color: "white"}}>Cancel</a>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default EditBookComponent;