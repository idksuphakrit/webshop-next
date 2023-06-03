import Image from "next/image";

export default function page() {
    return (
        <>
            <div className="flex justify-center items-center h-screen">
                <div className="form-control w-full max-w-xs">
                    <img src="https://www.narongrit.net/wp-content/uploads/2023/02/Logo-True-money-wallet-1.png" alt="" className='rounded my-5 mx-auto w-64 md:w-96' />
                    <label className="label">
                        <span className="label-text">ทรูมันนี่วอเลต (ส่งของขวัญ)</span>
                        <span className="label-text-alt">เติมขั้นต่ำ 100 บาท</span>
                    </label>
                    <input type="text" placeholder="กรุณากรอก URL" className="input input-bordered w-full max-w-xs" />
                    <label className="label">
                        <span className="label-text-alt">กรุณาตรวจสอบ URL ให้ถูกต้อง</span>
                    </label>
                    <button className='btn btn-primary'>เติมเลย</button>
                </div>
            </div>
        </>
    )
}
