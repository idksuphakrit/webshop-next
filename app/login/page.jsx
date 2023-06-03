export default function page() {
    return (
        <>
            <div className="flex justify-center items-center h-screen">
                <div className="form-control w-full max-w-xs">
                    <a class="btn btn-ghost normal-case text-4xl mb-10" href="/">Gaychashop</a>
                    <label className="label">
                        <span className="label-text">ชื่อผู้ใช้งาน</span>
                        <span className="label-text-alt">* กรุณาตรวจสอบให้ถูกต้อง</span>
                    </label>
                    <input type="text" placeholder="กรุณากรอกชื่อผู้ใช้งาน" className="input input-bordered w-full max-w-xs mb-5" />

                    <label className="label">
                        <span className="label-text">รหัสผ่าน</span>
                        <span className="label-text-alt">* กรุณาตรวจสอบให้ถูกต้อง</span>
                    </label>
                    <input type="password" placeholder="กรุณากรอกรหัสผ่าน" className="input input-bordered w-full max-w-xs mb-5" />

                    <button className='btn btn-primary'>ลงชื่อเข้าใช้</button>

                    <a class="btn btn-ghost normal-case text-sm mt-5" href="/register">ยังไม่ได้สมัครสมาชิกใช่ไหม?</a>

                </div>
            </div>
        </>
    )
}
