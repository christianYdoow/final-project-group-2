import React,{ useState,useEffect } from 'react';
// import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import ProductForm from './components/admin/ProductForm'

//Admin
import AdminLogin from './components/admin/AdminLogin';
import AdminHome from './components/admin/AdminHome';
//costumer
import Home from './pages/Home';
import Cart from './pages/Cart';
import Login from './pages/Login';
import Register from './pages/Register';
import ProductDetails from './components/ProductDetails'
import UpdateProductDetails from './components/admin/UpdateProductDetails';


function App() {

  // --------------------------------All useState---------------------------

  const [isAddedToCart, setIsAddedToCart] = useState(false);  
  // useState for cart information 
  const [cartItems,setCartItems]=useState([]);
  // data from api 
  const [products,setProducts]=useState([]);
  //set the page
  const [page,setPage]=useState(1)
  // filter the productList
  const [searchValue,setSearchValue]=useState("");
  //data that will be added in the cart
  const [addToCart,setAddToCart]=useState([]);
  //page size settings
  const pageSize = 10;
  const [totalPages, setTotalPages] = useState(1);

  // --------------------------------All useEffect---------------------------
  

  // fetch product information from backend api 
  useEffect(()=>{
    const fetchData = async ()=>{
      try{
        const response = await fetch(`http://localhost:8080/web/api/admin/products?page=${page}&pageSize=${pageSize}`);
        const data= await response.json();
        setProducts(data.content);
        setTotalPages(data.totalPages);
        console.log("products data",data)
      }catch(error){
        console.error(error);
      }
    }
    fetchData();
  },[page])

  //fetch cart item in the local storage 
  useEffect(()=>{
    const storedCartItems = JSON.parse(localStorage.getItem("cartItems"));
    if(storedCartItems){
      setCartItems(storedCartItems);
    }
  },[]);


  // --------------------------------All function---------------------------


  //function to know if it will add the item or remove 
  const handleAddOrRemoveFromCart = (product) => {
    const existingCartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    const isItemInCart = existingCartItems.some((item) => item.productId === product.productId);
  
    let updatedCartItems;
    if (isItemInCart) {
      updatedCartItems = existingCartItems.filter((item) => item.productId !== product.productId);
    } else {
      updatedCartItems = [...existingCartItems, product];
    }
  
    localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
    setIsAddedToCart(!isItemInCart);
  };

  // remove cart item from the local storage 
  const handleRemoveFromCart = (product) => {
    setCartItems((prevCartItems) =>
      prevCartItems.filter((item) => item.productId !== product.productId)
    );
    const updatedCartItems = cartItems.filter(
      (item) => item.productId !== product.productId
    );
    localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
  };

  // add cart item from the local storage 
  const handleAddToCart = (product) => {
    console.log ("saving data")
    setCartItems((prevCartItems) => [...prevCartItems, product]);
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    console.log ("save na ")
  };

  const handleNextPage = () => {
      setPage(prevPage => prevPage + 1);
  };

  const handlePrevPage = () => {
    if (page > 1) {
      setPage(prevPage => prevPage - 1);
    }
  };


  return (
    <div>

    <BrowserRouter>
          <Routes>
            <Route path="/" element= { <Login/>} />
            <Route path="/customer/login" element= { <Login/>} />
            <Route path="/customer/register" element= { <Register/>} />
            <Route path="/customer/home" element= { <Home products={products}/>} />
            <Route path="/customer/cart" element= { <Cart  cartItems={cartItems} setCartItems={setCartItems} handleRemoveFromCart={handleRemoveFromCart}/>} />
            <Route path="/product-details" element= { <ProductDetails/>} />


            {/* Admin Route */}
            <Route path="/admin" element= { <AdminLogin/>} />
            <Route path="/admin/home" element= { <AdminHome/>} />
            <Route path="/add-product" element= { <ProductForm/>} />
            <Route path="/update-product/:productId" element= { <UpdateProductDetails/>} />

        
            
          </Routes>
      </BrowserRouter>
    
  </div>
  )

}

export default App