import Image from "next/image";

export default function page() {
    return (
        <>
            <div className="flex justify-center items-center h-screen">
                <div className="form-control w-full max-w-xs">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Rickrolling_QR_code.png" alt="" className='rounded my-5 mx-auto w-64 md:w-96' />
                    <label className="label">
                        <span className="label-text">คิวอาร์โค้ดพร้อมเพย์</span>
                        <span className="label-text-alt">เติมขั้นต่ำ 100 บาท</span>
                    </label>
                    <input type="text" placeholder="กรอกจำนวนเงิน" className="input input-bordered w-full max-w-xs" />
                    <label className="label">
                        <span className="label-text-alt">กรุณาตรวจสอบจำนวนเงินให้ถูกต้อง</span>
                    </label>
                    <button className='btn btn-primary'>สร้าง Qrcode</button>
                </div>
            </div>
        </>
    )
}
