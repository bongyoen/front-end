import React, {useState} from 'react';
import data from "./app/test/Data";
import {Container, Nav, Navbar, NavDropdown} from 'react-bootstrap';
import TopHeader from "./app/layout/TopHeader";
import {Link, Route, Routes} from "react-router-dom";
import Detail from "./app/test/Detail";
import Jumbotron from "./app/test/Jumbotron";
import axios from "axios";
import {environment} from "./environments/environment";
import Cart from './app/test/cart';

export let inventoryContext = React.createContext(null);

function App() {

    let [products, setProducts] = useState(data);
    let [inventory, setInventory] = useState([10, 11, 12]);
    return (
        <div className="App">
            <TopHeader/>

            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">Saint Laurent</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to={"/"}>Home</Nav.Link>
                            <Nav.Link as={Link} to={"/detail"}>detail</Nav.Link>
                            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider/>
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <button onClick={() => {
                axios.get(environment.ec2Api.local + "info").then(() => {
                    setProducts([...products, ...products])
                });
            }}>더보기
            </button>
            <Routes>
                <Route path={"/"} element={<Jumbotron products={products} inventory={inventory}/>}></Route>
                <Route path={"/detail/:id"} element={<Detail products={products} inventory={inventory}
                                                             setInventory={setInventory}/>}></Route>
                <Route path={"/cart"} element={<Cart/>}></Route>
                <Route path={"/:id"}></Route>
            </Routes>

        </div>
    );
}


export default App;
