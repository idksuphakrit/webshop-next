import Image from "next/image";

export default function page() {
  const services = [
    {
      id: 1,
      image: "https://images.rbxcdn.com/d66ae37d46e00a1ecacfe9531986690a.jpg",
      title: "คิวอาร์โค้ดพร้อมเพย์",
      price: "เติมขั้นต่ำ 100 บาท",
      link: "/topup/qrcode",
    },
    {
      id: 2,
      image: "https://images.rbxcdn.com/d66ae37d46e00a1ecacfe9531986690a.jpg",
      title: "ทรูมันนี่วอเล็ต",
      price: "เติมขั้นต่ำ 100 บาท",
      link: "/topup/truemoneywallet",
    },
    {
      id: 3,
      image: "https://images.rbxcdn.com/d66ae37d46e00a1ecacfe9531986690a.jpg",
      title: "บัตรทรูมันนี่",
      price: "เติมขั้นต่ำ 100 บาท",
      link: "/topup/truemoney",
    },
  ];

  return (
    <>
      <div className="mx-10 my-10">
        <h2 className="text-xl my-5">
          ช่องทางการเติมเงิน
          <span className="badge badge-lg">คิวอาร์โค้ด / ทรูมันนี่</span>
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
                  <a className="btn btn-primary" href={service.link}>
                    เติมเลย
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}