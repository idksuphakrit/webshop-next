import Image from "next/image";

export default function page() {
  const services = [
    {
      id: 1,
      image: "https://images.rbxcdn.com/d66ae37d46e00a1ecacfe9531986690a.jpg",
      title: "เติม Robux",
      price: "100 บาท",
    },
    {
      id: 2,
      image: "https://images.rbxcdn.com/d66ae37d46e00a1ecacfe9531986690a.jpg",
      title: "กด Gamepass",
      price: "100 บาท",
    },
    {
      id: 3,
      image: "https://images.rbxcdn.com/d66ae37d46e00a1ecacfe9531986690a.jpg",
      title: "กดของ Limited Roblox",
      price: "100 บาท",
    },
    {
      id: 4,
      image: "https://images.rbxcdn.com/d66ae37d46e00a1ecacfe9531986690a.jpg",
      title: "เติมเกมอื่นๆมากมาก",
      price: "100 บาท",
    },
  ];

  return (
    <>
      <div className="mx-10 my-10">
        <h2 className="text-xl my-5">
          บริการทั้งหมด
          <span className="badge badge-lg">เติมเกม / อื่นๆอีกมากมาย</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {services.map((service) => (
            <div className="card bg-base-100 shadow-xl image-full" key={service.id}>
              <figure>
                <img src={service.image} alt="service" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{service.title}</h2>
                <p>{service.price}</p>
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