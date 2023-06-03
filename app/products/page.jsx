import Image from "next/image";

export default function page() {
    const products = [
        {
            id: 1,
            image: "https://images.rbxcdn.com/d66ae37d46e00a1ecacfe9531986690a.jpg",
            title: "ID Roblox Limited",
            price: "100 บาท",
        },
        {
            id: 2,
            image: "https://images.rbxcdn.com/d66ae37d46e00a1ecacfe9531986690a.jpg",
            title: "ID Roblox Limited",
            price: "100 บาท",
        },
        {
            id: 3,
            image: "https://images.rbxcdn.com/d66ae37d46e00a1ecacfe9531986690a.jpg",
            title: "ID Roblox Limited",
            price: "100 บาท",
        },
        {
            id: 4,
            image: "https://images.rbxcdn.com/d66ae37d46e00a1ecacfe9531986690a.jpg",
            title: "ID Roblox Limited",
            price: "100 บาท",
        },
    ];

    return (
        <>
            <div className="mx-10 my-10">
                <h2 className="text-xl my-5">
                    สินค้าทั้งหมด
                    <span className="badge badge-lg">ไอดีเกม / อื่นๆอีกมากมาย</span>
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {products.map((product) => (
                        <div className="card bg-base-100 shadow-xl image-full" key={product.id}>
                            <figure>
                                <img src={product.image} alt="product" />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">{product.title}</h2>
                                <p>{product.price}</p>
                                <div className="card-actions justify-end">
                                    <button className="btn btn-primary">ซื้อเลย</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}  