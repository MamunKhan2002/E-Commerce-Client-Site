

const Navbar = () => {

    const NavOption = <>
        <li><a>Home</a></li>
        <li><a>All Products</a></li>
    </>
    return (
        <nav className="bg-[#1299e8] sticky top-0 z-10">
            <div className="navbar max-w-[1360px] px-0 w-11/12 mx-auto">
                <div className="navbar-start">
                    <div className="dropdown hover:bg-opacity-0">
                        <div tabIndex={0} role="button" className="lg:hidden p-1 mr-3 rounded-sm border-2 text-white">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {NavOption}
                        </ul>
                    </div>
                    <div className="flex gap-20 items-center">
                        <div className="flex flex-col items-end ">
                            <a className="cursor-pointer text-2xl font-bold text-white select-none ">Shokher </a>
                            <small className="-mr-5 -mt-1 text-white italic">Bazar</small>
                        </div>

                    </div>
                </div>
                <form className="w-full border-2 rounded-sm">
                    <input className="w-full px-4  py-2 outline-none" placeholder="Search for products, brands and more" type="text" />
                    <button type="submit" className="-ml-10 bg-blue-200 p-1 rounded-sm">
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 30 30">
                            <path d="M 13 3 C 7.4889971 3 3 7.4889971 3 13 C 3 18.511003 7.4889971 23 13 23 C 15.396508 23 17.597385 22.148986 19.322266 20.736328 L 25.292969 26.707031 A 1.0001 1.0001 0 1 0 26.707031 25.292969 L 20.736328 19.322266 C 22.148986 17.597385 23 15.396508 23 13 C 23 7.4889971 18.511003 3 13 3 z M 13 5 C 17.430123 5 21 8.5698774 21 13 C 21 17.430123 17.430123 21 13 21 C 8.5698774 21 5 17.430123 5 13 C 5 8.5698774 8.5698774 5 13 5 z"></path>
                        </svg>
                    </button>
                </form>
                <div className="navbar-end">
                    <button className="text-white hover:text-blue-600 hover:bg-white duration-700 border-[1px] py-1 px-3 rounded-sm ">Log In</button>

                </div>
            </div>
        </nav>
    );
};

export default Navbar;