import Image from "next/image";

export default function page() {
    return (
        <>
            <div className="flex justify-center items-center h-screen">
                <div className="form-control w-full max-w-xs">
                    <img src="https://play-lh.googleusercontent.com/6I2IYbIg4rhGUgs0UxP_5q6wmJmlBjBrlQ9f0_FAN94yOzwmrtEteifCdPPd1-chY_NX" alt="" className='rounded my-5 mx-auto w-64 md:w-96' />
                    <label className="label">
                        <span className="label-text">บัตรทรูมันนี่</span>
                        <span className="label-text-alt">เติมขั้นต่ำ 100 บาท</span>
                    </label>
                    <input type="text" placeholder="กรอกรหัสบัตร 14 หลัก" className="input input-bordered w-full max-w-xs" />
                    <label className="label">
                        <span className="label-text-alt">กรุณาตรวจสอบรหัสบัตรให้ถูกต้อง</span>
                    </label>
                    <button className='btn btn-primary'>เติมเลย</button>
                </div>
            </div>
        </>
    )
}
