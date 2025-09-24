import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProductList from "../views/ProductList";
import ProductDetail from "../views/ProductDetail";

export default function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<ProductList />} />
                <Route path='/products/:id' element={<ProductDetail />} />
            </Routes>
        </BrowserRouter>
    )
}
