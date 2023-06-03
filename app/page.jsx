import Image from "next/image";

export default function page() {
  const carouselImages = [
    "https://images.rbxcdn.com/d66ae37d46e00a1ecacfe9531986690a.jpg",
    "https://images.rbxcdn.com/d66ae37d46e00a1ecacfe9531986690a.jpg",
    "https://images.rbxcdn.com/d66ae37d46e00a1ecacfe9531986690a.jpg",
    "https://images.rbxcdn.com/d66ae37d46e00a1ecacfe9531986690a.jpg",
    "https://images.rbxcdn.com/d66ae37d46e00a1ecacfe9531986690a.jpg",
    "https://images.rbxcdn.com/d66ae37d46e00a1ecacfe9531986690a.jpg",
    "https://images.rbxcdn.com/d66ae37d46e00a1ecacfe9531986690a.jpg",
  ];

  const stats = [
    {
      title: "ผู้ใช้งานทั้งหมด",
      value: "31K",
      desc: "ตั้งแต่เปิดเว็บไซต์",
    },
    {
      title: "สินค้าที่ขายแล้ว",
      value: "1,200",
      desc: "ตั้งแต่เปิดเว็บไซต์",
    },
    {
      title: "สินค้าทั้งหมด",
      value: "5,000",
      desc: "ตั้งแต่เปิดเว็บไซต์",
    },
  ];

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
      <div className="w-fit carousel rounded-box mx-10 my-10">
        {carouselImages.map((image, index) => (
          <div className="carousel-item w-full" key={index}>
            <img src={image} className="w-full" alt="Tailwind CSS Carousel component" />
          </div>
        ))}
      </div>

      <div className="flex justify-center my-10">
        <div className="stats stats-vertical lg:stats-horizontal shadow">
          {stats.map((stat, index) => (
            <div className="stat place-items-center" key={index}>
              <div className="stat-title">{stat.title}</div>
              <div className="stat-value">{stat.value}</div>
              <div className="stat-desc">{stat.desc}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="mx-10 my-10">
        <h2 className="text-xl my-5">
          สินค้าที่เราแนะนำ
          <span className="badge badge-lg">ใหม่</span>
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