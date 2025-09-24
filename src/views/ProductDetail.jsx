import { useParams } from "react-router-dom";
import { products } from "../models/products";

export default function ProductDetail() {
    // Lấy id từ URL
    const { id } = useParams();
    // Tìm sản phẩm có id trùng với Number(id)
    const product = products.find((p) => p.id === Number(id));
    if (!product) return <p>Sản phẩm không tồn tại</p>;

    return (
        <div>
            <h2>{product.name}</h2>
            <img src={product.image} alt={product.name} />
            <p>Giá: {product.price} VND</p>
            <p>Mô tả: {product.description}</p>
        </div>
    );
}