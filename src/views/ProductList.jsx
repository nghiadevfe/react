import { Link } from "react-router-dom";
import { products } from "../models/products";

export default function ProductList() {
    return (
        <div>
            <h2>Danh sách Samsung Phones</h2>
            <ul>
                {products.map((p) => (
                    <li key={p.id}>
                        <img src={p.image} alt={p.name} />
                        <h3>{p.name}</h3>
                        <p>{p.price}</p>
                        <Link to={`/products/${p.id}`}>Xem chi tiết</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}