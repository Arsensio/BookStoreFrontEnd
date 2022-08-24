import React, {Component} from 'react';
import BookService from "../services/BookService";
import AuthorService from "../services/AuthorService";

class AuthorComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            authors:[],

            bookPerPage: 10,
            currentPage: 1,
            totalPages: 1,
            pageArray:[],
            totalElements:0,

            authorName:''
        }
    }

    componentDidMount() {
        AuthorService.getAuthors(this.state.currentPage,this.state.bookPerPage).then(res=>{
            console.log(res.data)
            this.setState({
                authors: res.data.content,
                currentPage: res.data.pageNumber + 1,
                totalPages: res.data.totalPages,
                pageArray:Array.from(Array(this.state.totalPages).keys()),
                totalElements: res.data.totalElements
            })
            console.log(this.state.totalPages);
        })
    }

    nextPage=(next)=>{
        AuthorService.getAuthors(next, this.state.bookPerPage).then((res) => {
            console.log(res)
            this.setState({
                authors: res.data.content,
                currentPage: res.data.pageNumber + 1,
                totalPages: res.data.totalPages,
                pageArray:Array.from(Array(this.state.totalPages).keys())
            });
            window.scrollTo({top: 0, left: 0, behavior: 'smooth' });
        })
    }
    onChangeSearch = (event)=>{
        this.setState({authorName: event.target.value})
        console.log(this.state.authorName);
    }

    render() {
        const getHref = (name) => {
            return "/searchAuthor?name="+name ;
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
                                <form action="#" className="career-form mb-60">
                                    <div className="row">
                                        <div className="col-md-6 npm  my-3">
                                            <div className="input-group position-relative">
                                                <input  type="text" className="form-control" onChange={this.onChangeSearch}
                                                       placeholder="Enter Author name or full name" id="keywords"/>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-lg-3 my-3">
                                            <a href={getHref(this.state.authorName)} type="button" className="btn btn-lg btn-block btn-light btn-custom"
                                                    id="contact-submit">
                                                Search
                                            </a>
                                        </div>
                                    </div>
                                </form>
                                <div className="filter-result">
                                    <p className="mb-30 ff-montserrat" style={{paddingTop:"12px"}}>Total number of Authors : {this.state.totalElements} </p>
                                    {
                                        this.state.authors.map(author=>(
                                            <div className="job-box d-md-flex align-items-center justify-content-between mb-30">
                                                <div className="job-left my-4 d-md-flex align-items-center flex-wrap">
                                                    <div className="img-holder mr-md-4 mb-md-0 mb-4 mx-auto mx-md-0 d-md-none d-lg-flex">
                                                        {author.firstName.substring(0,1)}{author.lastName.substring(0,1)}
                                                    </div>
                                                    <div className="job-content">
                                                        <h5 className="text-center text-md-left">{author.label}</h5>
                                                        <ul style={{margin:0,marginLeft:"-50"}} className="d-md-flex flex-wrap text-capitalize ff-open-sans">
                                                            <li className="mr-md-4">
                                                                {author.dateOfBirth}
                                                            </li>
                                                            <li className="mr-md-4">
                                                                { String(author.genres.join(", ")).length > 40 ?
                                                                    `${String(author.genres.join(", ")).substring(0,40)}...` :String(author.genres.join(", "))
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
                    <div className="row align-items-center" style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center"
                    }}>
                        {
                            Array.from(Array(this.state.totalPages).keys()).map(iten=>(
                                        <a className="btn-success" key={iten} onClick={()=>this.nextPage(iten+1)} style={{
                                            padding: "10px",
                                            paddingLeft: "20px",
                                            paddingRight: "20px",
                                            borderRadius: "5px",
                                            backgroundColor: "#44b89d",
                                            color: "white",
                                            cursor: "pointer",
                                            margin:"5px"
                                        }}>{iten+1}</a>
                            ))
                        }
                    </div>
                </div>
            </div>
        );
    }
}

export default AuthorComponent;