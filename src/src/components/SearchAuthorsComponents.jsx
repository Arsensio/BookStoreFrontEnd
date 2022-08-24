import React, {Component} from 'react';
import BookService from "../services/BookService";
import AuthorService from "../services/AuthorService";

class SearchAuthorsComponents extends Component {
    constructor(props) {
        super(props);
        this.state = {
            authors: [],

        }
    }

    componentDidMount() {
        const params = new URLSearchParams(this.props.location.search).get("name");
        console.log(params)
        AuthorService.geAuthorsByName(params).then(res => {
            console.log(res.data)
            this.setState({
                authors: res.data
            })
        });

        // BookService.geBooksByName(params).then((res) => {
        //     console.log(this.state.bookname);
        //     this.setState({
        //         books: res.data
        //     })
        // });
    }


    render() {
        const getHref = (name) => {
            return "/searchAuthor?name=" + name;
        }

        const authorHref = (id) => {
            return "/authors/book/" + id;
        }

        return (
            <div>
                <div className="container">
                    <div className="row"style={{paddingTop:"40px"}}>
                        <div className="col-lg-10 mx-auto">
                            <div className="career-search mb-60">
                                <div className="filter-result">
                                    <p className="mb-30 ff-montserrat">Search results :</p>
                                    {
                                        this.state.authors.map(author => (
                                            <div
                                                className="job-box d-md-flex align-items-center justify-content-between mb-30">
                                                <div className="job-left my-4 d-md-flex align-items-center flex-wrap">
                                                    <div
                                                        className="img-holder mr-md-4 mb-md-0 mb-4 mx-auto mx-md-0 d-md-none d-lg-flex">
                                                        {author.firstName.substring(0, 1)}{author.lastName.substring(0, 1)}
                                                    </div>
                                                    <div className="job-content">
                                                        <h5 className="text-center text-md-left">{author.label}</h5>
                                                        <ul style={{margin: 0, marginLeft: "-50"}}
                                                            className="d-md-flex flex-wrap text-capitalize ff-open-sans">
                                                            <li className="mr-md-4">
                                                                {author.dateOfBirth}
                                                            </li>
                                                            <li className="mr-md-4">
                                                                {String(author.genres.join(", ")).length > 40 ?
                                                                    `${String(author.genres.join(", ")).substring(0, 40)}...` : String(author.genres.join(", "))
                                                                }
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="job-right my-4 flex-shrink-0">
                                                    <a href={authorHref(author.id)} className="btn d-block w-100 d-sm-inline-block btn-light">See books</a>
                                                </div>
                                            </div>
                                        ))
                                    }

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default SearchAuthorsComponents;