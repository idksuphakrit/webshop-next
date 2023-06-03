export default function page() {
    return (
        <>
            <div className="flex justify-center items-center h-screen">
                <div className="form-control w-full max-w-xs">
                    <a class="btn btn-ghost normal-case text-4xl mb-10" href="/">Gaychashop</a>
                    <label className="label">
                        <span className="label-text">ชื่อผู้ใช้งาน</span>
                        <span className="label-text-alt">* กรุณาใช้แค่ภาษาอังกฤษ</span>
                    </label>
                    <input type="text" placeholder="กรุณากรอกชื่อผู้ใช้งาน" className="input input-bordered w-full max-w-xs mb-5" />

                    <label className="label">
                        <span className="label-text">รหัสผ่าน</span>
                        <span className="label-text-alt">* กรุณาใช้แค่ภาษาอังกฤษ</span>
                    </label>
                    <input type="password" placeholder="กรุณากรอกรหัสผ่าน" className="input input-bordered w-full max-w-xs mb-5" />

                    <label className="label">
                        <span className="label-text">ยืนยันรหัสผ่าน</span>
                        <span className="label-text-alt">* กรุณาใช้แค่ภาษาอังกฤษ</span>
                    </label>
                    <input type="password" placeholder="กรุณายันยืนรหัสผ่านอีกครั้ง" className="input input-bordered w-full max-w-xs mb-5" />

                    <button className='btn btn-primary'>สมัครสมาชิก</button>

                    <a class="btn btn-ghost normal-case text-sm mt-5" href="/login">มีบัญชีอยู่แล้วใช่ไหม?</a>
                </div>
            </div>
        </>
    )
}
