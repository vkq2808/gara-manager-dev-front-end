import React, { useEffect, useState } from 'react';
import Header from '../../components/common/header/Header';
import Headroom from 'react-headroom';
import './Home.css';
import AdminSideBar from '../../components/admin/sideBar/AdminSideBar'
import BannerCarousel from '../../components/common/banners/BannerCarousel';

const Home = () => {

    const [isSideBarOpen, setIsSideBarOpen] = useState(false);

    const policies = [
        {
            imgSrc: "https://file.hstatic.net/200000265255/file/static-icons-3_bf2d3625ab414276a01c726228fd46c0.png",
            title: "Tư Vấn Miễn Phí",
            content: "Nhận tư vấn từ chuyên gia 24/7"
        },
        {
            imgSrc: "https://file.hstatic.net/200000265255/file/static-icons-2_527e480eb3f6439d9c5fe19bc5e9a31f.png",
            title: "Hỗ Trợ Lắp Đặt",
            content: "Lắp đặt miễn phí tại TP.HCM"
        },
        {
            imgSrc: "https://file.hstatic.net/200000317829/file/thiet_ke_khong_ten__25__2af7019e329a4716acf51eba534e66df.png",
            title: "Bảo Hành Chính Hãng",
            content: "Sản Phẩm, Phụ Kiện Chất Lượng Cao"
        },
        {
            imgSrc: "https://file.hstatic.net/200000265255/file/static-icons-4_506ec194d9444d30925aaa929ae0e2b3.png",
            title: "Thanh Toán An Toàn",
            content: "Chính sách hậu mãi uy tín"
        }
    ]

    return (
        <div className='flex flex-col w-full h-auto'>
            <div
                onClick={() => setIsSideBarOpen(false)}
                className={`BodyCover flex flex-row ${isSideBarOpen ? '' : 'hidden'}`}>
            </div>
            <div className={`SideBar pt-5 flex flex-col ${isSideBarOpen ? '' : 'hidden'}`}>
                <AdminSideBar />
            </div>
            <Headroom className="Headroom" disable={isSideBarOpen} >
                <Header setIsSideBarOpen={setIsSideBarOpen} />
            </Headroom>

            <body className='body-container flex mt-25 flex-col items-center w-full h-auto'>
                {/* Category Title and Banner */}
                <div className="banner-container body-content flex flex-row items-start w-full h-[400px]">
                    <div className="menu-category-title flex flex-col w-[20%] ">
                        <div className="title">Danh Mục Sản Phẩm</div>
                        <div className="category-list flex flex-col">
                            <a href="/category1" className="category-item">Category 1</a>
                            <a href="/category2" className="category-item">Category 2</a>
                            <a href="/category3" className="category-item">Category 3</a>
                            <a href="/category4" className="category-item">Category 4</a>
                            <a href="/category5" className="category-item">Category 5</a>
                        </div>
                    </div>
                    <div className="banner w-[80%] h-full">
                        <BannerCarousel />
                    </div>
                </div>

                {/* Policy */}
                <div className="policy-container flex flex-row flex-wrap pt-10">
                    {policies.map(policy => (
                        <div className="policy-card flex flex-col items-center">
                            <img src={policy.imgSrc} alt={policy.title} />
                            <div>
                                <div className='title'>{policy.title}</div>
                                <div className='content'>{policy.content}</div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Featured Products */}
            </body>

        </div>
    );
}

export default Home;
