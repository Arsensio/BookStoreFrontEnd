import './App.css';
import FooterComponent from "./components/FooterComponent";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import CreateUserComponent from "./components/CreateUserComponent";
import UpdateUserComponent from "./components/UpdateUserComponent";
import BooksListComponent from "./components/BooksListComponent";
import BookInfoComponent from "./components/BookInfoComponent";
import HeaderComponent from "./components/HeaderComponent";
import SearchBooksComponent from "./components/SearchBooksComponent";
import LoginComponent from "./components/LoginComponent";
import RegisterComponent from "./components/RegisterComponent";
import HomePageComponent from "./components/HomePageComponent";
import OrderComponent from "./components/OrderComponent";
import EditBookComponent from "./components/EditBookComponent";
import CartComponent from "./components/CartComponent";
import UsersListComponent from "./components/UsersListComponent";
import AuthorComponent from "./components/AuthorComponent";
import SearchAuthorsComponents from "./components/SearchAuthorsComponents";
import AuthorBooksComponent from "./components/AuthorBooksComponent";
import AllOrdersComponent from "./components/AllOrdersComponent";
import EditOrderComponent from "./components/EditOrderComponent";


function App() {
    return (
        <div>
            <Router>
                <HeaderComponent/>
                    <Switch>
                        <Route path="/" exact component={HomePageComponent}/>
                        <Route path="/login" exact component={LoginComponent}/>
                        <Route path="/cart" exact component={CartComponent}/>
                        <Route path="/authors" exact component={AuthorComponent}/>
                        <Route path="/searchAuthor" exact component={SearchAuthorsComponents}/>
                        <Route path="/authors/book/:id" exact component={AuthorBooksComponent}/>
                        <Route path="/users" exact component={UsersListComponent}/>
                        <Route path="/edit/:id" exact component={EditBookComponent}/>
                        <Route path="/orders/update/:id" exact component={EditOrderComponent}/>
                        <Route path="/orders" exact component={OrderComponent}/>
                        <Route path="/allOrders" exact component={AllOrdersComponent}/>
                        <Route path="/register" exact component={RegisterComponent}/>
                        <Route path="/books" exact component={BooksListComponent}/>
                        <Route path="/search" exact component={SearchBooksComponent}/>
                        <Route path="/books/:id" exact component={BookInfoComponent}/>
                        <Route path="/add-users" exact component={CreateUserComponent}/>
                        <Route path="/update-user/:id" exact component={UpdateUserComponent}/>
                    </Switch>
                <FooterComponent/>
            </Router>
        </div>

    );
}

export default App;
