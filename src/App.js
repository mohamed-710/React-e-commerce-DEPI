import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Loading from './components/Loading'; 
import SlideShow from './components/slideShow'; 
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import './App.css';
import './cart.css';
import Footer from './components/Footer';

function App() {
    const base_url = "https://dummyjson.com/products/category/";
    const [label, setLabel] = useState('smartphones');
    const [products, setProducts] = useState([]);
    const [sortedProducts, setSortedProducts] = useState([]); 
    const [loading, setLoading] = useState(true);
    const [categories, setCategories] = useState([]);
    const [error, setError] = useState(null);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [sort, setSort] = useState('title');
    const [cartItems, setCartItems] = useState([]);
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [filter,setFilter]=useState('');

    const toggleSidebar = () => {
        setIsSidebarOpen(prev => !prev);
    };

    const toggleCart = () => {
        setIsCartOpen(prev => !prev); 
    };

    const handleAddToCart = (product) => {
        setCartItems((prevItems) => {
            const existingItem = prevItems.find((item) => item.id === product.id);
            if (existingItem) {
                return prevItems.map((item) =>
                    item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
                );
            } else {
                return [...prevItems, { ...product, quantity: 1 }];
            }
        });
    };

    const fetchCategories = async () => {
        try {
            const response = await fetch('https://dummyjson.com/products/categories');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setCategories(data);
            setError(null);
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    const fetchProducts = async () => {
        setLoading(true);
        try {
            const response = await fetch(`${base_url}${label}`);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setProducts(data.products);
            setError(null);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchCategories();
    }, []);

    useEffect(() => {
        fetchProducts();
    }, [label]);

    useEffect(() => {
        const sortProducts = () => {
            const sorted = [...products].sort((a, b) => {
                if (sort === 'title') {
                    return a.title.localeCompare(b.title);
                } else if (sort === 'price') {
                    return b.price - a.price;
                } else if (sort === 'rating') {
                    return b.rating - a.rating; 
                }
                return 0;
            });
            setSortedProducts(sorted);
        };
        sortProducts();
    }, [sort, products]); 

    const changeTheme = () => {
        setIsDarkMode(prev => !prev);
        document.body.classList.toggle('dark-mode', !isDarkMode);
    };

    // Update SearchProducts to include filtering logic
    const SearchProducts = sortedProducts
        .filter(product => {
            const query = searchQuery.toLowerCase();
            return (
                product.title.toLowerCase().includes(query) ||
                product.category.toLowerCase().includes(query)
            );
        })
        .filter(product => {
            if (filter === 'price') {
                return product.price <= 1000; 
            } else if (filter === 'rating') {
                return product.rating >= 4; 
            }
            return true;
        });

    return (
        <Router>
            <div className="App">
                <Navbar
                    toggleSidebar={toggleSidebar}
                    changeTheme={changeTheme}
                    setSearch={setSearchQuery}
                    sort={sort}
                    setSort={setSort}
                    toggleCart={toggleCart}
                    cartItems={cartItems}
                    setFilter={setFilter}
                    filter={filter}
                />
                <Sidebar 
                    isOpen={isSidebarOpen}
                    toggleSidebar={toggleSidebar}
                    categories={categories}
                    error={error}
                    setLabel={setLabel}
                />
                <div className="pt-16">
                    {loading ? (
                        <Loading />
                    ) : (
                        <>
                            <SlideShow />
                            <ProductList 
                                products={SearchProducts} 
                                error={error} 
                                onAddToCart={handleAddToCart}  
                            />
                           
                           {isCartOpen && (
                              <Cart 
                                cartItems={cartItems} 
                                setCartItems={setCartItems} 
                                toggleCart={toggleCart} 
                              />
                            )}
                            
                        </>
                    )}
                </div>
                 <div>
      {/* Other components */}
      <Footer />
    </div>
            </div>
        </Router>
    );
}

export default App;
