import './globals.css';
import React from 'react';
import { Kanit } from 'next/font/google';

const kanit = Kanit({ subsets: ['latin'], weight: ['300', '400', '500', '600', '700', '800', '900'] });

export const metadata = {
  title: 'Gaychashop เว็บเติมเกม ไอดีเกม และอื่นๆอีกมากมาย',
  description: 'Gaychashop เว็บเติมเกม ไอดีเกม และอื่นๆอีกมากมาย',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={kanit.className}>
        <>
          <div className="z-50 relative">
            <div className="navbar bg-base-100">
              <div className="navbar-start">
                <div className="dropdown">
                  <label tabIndex="0" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                    </svg>
                  </label>
                  <ul tabIndex="0" className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                    <li><a href="/">หน้าแรก</a></li>
                    <li>
                      <a>สินค้าและบริการ</a>
                      <ul className="p-2">
                        <li><a href="/products">สินค้าทั้งหมด</a></li>
                        <li><a href="/services">บริการทั้งหมด</a></li>
                      </ul>
                    </li>
                    <li><a href="/topup">เติมเงิน</a></li>
                    <div className="text-center">
                      <li><a className="my-2" href="/login">ลงชื่อเข้าใช้</a></li>
                      <li><a className="" href="/register">สมัครสมาชิก</a></li>
                    </div>
                  </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl" href="/">Gaychashop</a>
              </div>
              <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                  <li><a href="/">หน้าแรก</a></li>
                  <li tabIndex="0">
                    <details>
                      <summary>สินค้าและบริการ</summary>
                      <ul className="p-2">
                        <li><a href="/products">สินค้าทั้งหมด</a></li>
                        <li><a href="/services">บริการทั้งหมด</a></li>
                      </ul>
                    </details>
                  </li>
                  <li><a href="/topup">เติมเงิน</a></li>
                </ul>
              </div>
              <div className="navbar-end hidden lg:flex">
                <a className="btn mx-2" href="/login">ลงชื่อเข้าใช้</a>
                <a className="btn" href="/register">สมัครสมาชิก</a>
              </div>
            </div>
          </div>
        </>
        {children}
      </body>
    </html>
  );
}