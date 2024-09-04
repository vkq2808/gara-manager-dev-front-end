import React, { useEffect, useState } from 'react';
import Header from '../../components/common/header/Header';
import Headroom from 'react-headroom';
import './Home.css';
import AdminSideBar from '../../components/admin/sideBar/AdminSideBar'
import BannerCarousel from '../../components/common/banners/BannerCarousel';

const Home = () => {
    const [isSideBarOpen, setIsSideBarOpen] = useState(false);
    const [categorySelected, setCategorySelected] = useState(null);
    const [isHoveringCategory, setIsHoveringCategory] = useState(false);
    const [isHoveringPanel, setIsHoveringPanel] = useState(false);
    const policies = [
        {
            imgSrc: "https://file.hstatic.net/200000265255/file/static-icons-3_bf2d3625ab414276a01c726228fd46c0.png",
            title: "Tư Vấn Miễn Phí",
            content: "Nhận tư vấn từ chuyên gia 24/7"
        }, {
            imgSrc: "https://file.hstatic.net/200000265255/file/static-icons-2_527e480eb3f6439d9c5fe19bc5e9a31f.png",
            title: "Hỗ Trợ Lắp Đặt",
            content: "Lắp đặt miễn phí tại TP.HCM"
        }, {
            imgSrc: "https://file.hstatic.net/200000317829/file/thiet_ke_khong_ten__25__2af7019e329a4716acf51eba534e66df.png",
            title: "Bảo Hành Chính Hãng",
            content: "Sản Phẩm, Phụ Kiện Chất Lượng Cao"
        }, {
            imgSrc: "https://file.hstatic.net/200000265255/file/static-icons-4_506ec194d9444d30925aaa929ae0e2b3.png",
            title: "Thanh Toán An Toàn",
            content: "Chính sách hậu mãi uy tín"
        }
    ]

    const categories = [
        {
            id: 1,
            name: "Phụ kiện hot",
            link: "/collections/phu-kien-do-choi-theo-xe",
            imgSrc: "https://file.hstatic.net/200000265255/file/hlvqhekrnqcqews3r-pjdg78hfaqq3bf_a2b4cf530ad34ad8864ab1128e33137c.png",
            subCategories: [
                {
                    name: "MÀN HÌNH ANDROID",
                    products: [
                        {
                            name: "Màn Hình Android Owince C970 Pro",
                            link: "/products/dau-dvd-android-owince-c970-pro",
                        }, {
                            name: "Màn Hình Android Xe Ô tô Winca",
                            link: "https://lenguyenauto.com.vn/products/man-hinh-android-xe-o-to-winca"
                        }, {
                            name: "Màn Hình DVD Android Ô tô Kia Cerato",
                            link: "https://lenguyenauto.com.vn/products/man-hinh-dvd-android-o-to-kia-cerato"
                        }, {
                            name: "Màn Hình Androi Cho Xe Ô tô Toyota Fotuner",
                            link: "https://lenguyenauto.com.vn/products/man-hinh-android-cho-xe-o-to-toyota-fortuner"
                        }
                    ]
                }, {
                    name: "PHIM CÁCH NHIỆT",
                    products: [
                        {
                            name: "Phim Cách Nhiệt Xe Ô tô 3M",
                            link: "/products/phim-cach-nhiet-xe-o-to-3m"
                        }, {
                            name: "Phim Cách Nhiệt Xe Ô tô Llumar",
                            link: "/products/phim-cach-nhiet-xe-o-to-llumar"
                        }, {
                            name: "Phim Cách Nhiệt Xe Ô tô Vkool",
                            link: "/products/phim-cach-nhiet-xe-o-to-vkool"
                        }
                    ]
                }, {
                    name: "BỌC GHẾ DA",
                    products: [
                        {
                            name: "Bọc Ghế Da Xe Ô tô",
                            link: "/products/boc-ghe-da-xe-o-to"
                        }, {
                            name: "Bọc Ghế Da Xe Ô tô Toyota",
                            link: "/products/boc-ghe-da-xe-o-to-toyota"
                        }, {
                            name: "Bọc Ghế Da Xe Ô tô Honda",
                            link: "/products/boc-ghe-da-xe-o-to-honda"
                        }
                    ]
                }, {
                    name: "CAMERA HÀNH TRÌNH",
                    products: [
                        {
                            name: "Camera Hành Trình Ô tô Xiaomi",
                            link: "/products/camera-hanh-trinh-o-to-xiaomi"
                        }, {
                            name: "Camera Hành Trình Ô tô Vietmap",
                            link: "/products/camera-hanh-trinh-o-to-vietmap"
                        }, {
                            name: "Camera Hành Trình Ô tô Junsun",
                            link: "/products/camera-hanh-trinh-o-to-junsun"
                        }
                    ]
                }
            ]
        }, {
            id: 2,
            name: "Phụ kiện - Đồ chơi Xe",
            link: "/collections/phu-kien-do-choi-theo-xe",
            imgSrc: "https://file.hstatic.net/200000265255/file/xo5k-ta6oi4cb9cm-xqcytnl6jjl9twu_1fbf86dc3f7d41d2ad8a5326d183ef19.png",
            subCategories: [
                {
                    name: "Nước hoa cho xe",
                    products: [
                        {
                            name: "Nước Hoa Xe GRASSE",
                            link: "/products/nuoc-hoa-xe-grasse"
                        }
                    ]
                }, {
                    name: "Body Kits",
                    products: [
                        {
                            name: "Body Kits Toyota Fortuner",
                            link: "/products/body-kits-toyota-fortuner"
                        }, {
                            name: "Body Kits Honda Civic",
                            link: "/products/body-kits-honda-civic"
                        }, {
                            name: "Body Kits Toyota Camry",
                            link: "/products/body-kits-toyota-camry"
                        }, {
                            name: "Body Kits Xpander",
                            link: "/products/body-kits-xpander"
                        }
                    ]
                }, {
                    name: "Cách Âm Xe Hơi",
                    products: [
                        {
                            name: "Cách Âm Xe Ô tô",
                            link: "/products/cach-am-xe-o-to"
                        }
                    ]
                }, {
                    name: "Cốp điện",
                    // Cốp Điện Perfect Car
                    // Độ Ty Cốp Điện Xe Ô Tô
                    products: [
                        {
                            name: "Cốp Điện Perfect Car",
                            link: "/products/cop-dien-perfect-car"
                        }, {
                            name: "Độ Ty Cốp Điện Xe Ô Tô",
                            link: "/products/do-ty-cop-dien-xe-o-to"
                        }
                    ]
                }
            ]
        }, {
            id: 3,
            name: "Màn hình Android Ô tô",
            link: "/collections/man-hinh-android-oto",
            imgSrc: "https://file.hstatic.net/200000265255/file/dkzffakympllkpnc-cyefc1u1qh0iy_6_c6ef4a3de3654b51a8f7c05aebca2021.png",
        }, {
            id: 4,
            name: "Phim cách nhiệt Ô tô",
            link: "/collections/phim-cach-nhiet-oto",
            imgSrc: "https://file.hstatic.net/200000265255/file/screenshot_24cdb019a18044f1a91520e68528d0a5.png",
        }, {
            id: 5,
            name: "Camera hành trình Ô tô",
            link: "/collections/camera-hanh-trinh-oto",
            imgSrc: "https://file.hstatic.net/200000265255/file/e8-60mig4odup7dymtdmedcwee34sgnj_20ce2cc0540a49b7a2f72dac88d07317.png",
        }, {
            id: 6,
            name: "Bọc ghế Da Ô tô",
            link: "/collections/boc-ghe-da-oto",
            imgSrc: "https://file.hstatic.net/200000265255/file/wpwvowtszoezflm7yqus_aakvajxdbgd_31d998fee8bb4c4e92ba3b68add6a18e.png",
        }, {
            id: 7,
            name: "Bọc đèn Ô tô",
            link: "/collections/boc-den-oto",
            imgSrc: "https://file.hstatic.net/200000265255/file/xqntuskuqp8s_iorbjrin28exodh8lx7_8ba1b79ff47b4a40b6b02e84c31ad27f.png",
        }, {
            id: 8,
            name: "Phủ Ceramic",
            link: "/collections/phu-ceramic",
            imgSrc: "https://file.hstatic.net/200000265255/file/xqntuskuqp8s_iorbjrin28exodh8lx7_8ba1b79ff47b4a40b6b02e84c31ad27f.png",
        }
    ]



    useEffect(() => {
        if (!isHoveringCategory && !isHoveringPanel) {
            setCategorySelected(null);
        }
    }, [isHoveringCategory, isHoveringPanel]);

    const onCategoryMouseEnter = (cate) => {
        if (cate.subCategories && cate.subCategories?.length > 0) {
            setCategorySelected(cate);
            setIsHoveringCategory(true);
        }
    }

    return (
        <div className='flex flex-col w-full h-auto items-center text-[#212529]'>
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

            <body className='body-container flex flex-col place-items-center items-center w-full h-auto'>
                {/* Category Title and Banner */}
                <div className="banner-container body-content flex flex-row items-start w-full h-full">
                    <div className="menu-category-container flex flex-col w-[20%] ">
                        <div className='flex flex-row items-center p-2 bg-black text-[--yellow-color]'>
                            <i className='lni lni-menu' />
                            <div className="title font-semibold pl-4">Danh Mục Sản Phẩm</div>
                        </div>
                        <div className="category-list flex flex-col items-start">
                            {categories.map(cate => (
                                <div className={`category-item flex flex-row items-center jusify-between h-auto w-full `
                                    + `${cate.id == categorySelected?.id ? +"bg-[#ffffff]" : "bg-[--cate-bg-color]"} `
                                    + `text-black cursor-pointer`}
                                    onMouseEnter={() => onCategoryMouseEnter(cate)}
                                    onMouseLeave={() => setIsHoveringCategory(false)}
                                >
                                    <div className='flex flex-row  w-full items-center h-[45px] '>
                                        <span className='category-icon pl-2'>
                                            <img src={cate.imgSrc} alt={cate.name} className='w-[20px] h-[20px]' />
                                        </span>
                                        <div className='category-name pl-2'>{cate.name}</div>
                                    </div>
                                    {cate.subCategories && cate.subCategories.length > 0 && (
                                        <i className='lni lni-chevron-right' />
                                    )}
                                </div>

                            ))}
                        </div>
                    </div>
                    <div className={`banner flex w-[80%] h-full`}>
                        {!categorySelected && <BannerCarousel className={" bg-black"} />}
                        <div className="category-panel z-8 flex flex-row flex-wrap bg-slate-200"
                            onMouseEnter={() => setIsHoveringPanel(true)}
                            onMouseLeave={() => setIsHoveringPanel(false)}
                        >
                            {categorySelected && (
                                categorySelected.subCategories?.map(subCate => (
                                    <div className="sub-category flex flex-col items-start p-3">
                                        <div className="sub-category-title w-full bg-slate-500 text-[--yellow-color] px-2 py-1">{subCate.name}</div>
                                        <div className="sub-category-products flex flex-col items-start">
                                            {subCate.products.map(product => (
                                                <div className="w-full product-name px-2 py-2 bg-slate-300 cursor-pointer hover:bg-slate-500">{product.name}</div>
                                            ))}
                                        </div>
                                    </div>
                                ))
                            )}
                        </div>
                    </div>
                </div>

                {/* Policy */}
                <div className="policy-container flex flex-row justify-between flex-wrap pt-10 px-5">
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
