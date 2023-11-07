
import { BiLogoLinkedin } from "react-icons/bi";
import { BiLogoFacebook } from "react-icons/bi";
import { AiOutlineGooglePlus, AiOutlineTwitter } from "react-icons/ai";
import NavBar from "../../components/NavBar/NavBar";
import Nav from "../../components/Nav/Nav";
import { Link } from "react-router-dom";
import { GiForkKnifeSpoon } from "react-icons/gi";
import Team from "../../components/Team/Team";

const ChefPage = () => {
    return (
        <div className="bg-base-200">
            <NavBar></NavBar>
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    {/* Page content here */}
                    <Nav home='CHEF PAGE' food='Chef Page'></Nav>
                    <Team></Team>
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                </div>
                <div className="drawer-side bg-base-100">
                    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-[282px] min-h-full text-base-content list-none">
                        {/* Sidebar content here */}
                        <h2 className="menu-title uppercase text-red-500">Main</h2>
                        <div className="font-semibold ml-9">
                            <li><Link to='/'>Dashboard</Link></li>
                            <div>
                                <li><Link>Menu Layout</Link></li>
                                <li><Link>Order List</Link></li>
                                <li className="bg-base-200 border-2 border-y-0 border-r-0 border-l-red-500 -ml-7"><Link>
                                    <GiForkKnifeSpoon size={20} /><span className="text-red-500">Chef Page</span>

                                </Link></li>
                                <div className="my-1">
                                    <li className="ml-10 mb-2 text-red-500">- Team</li>
                                    <li className="ml-10">- Chef Single Details</li>
                                </div>
                                <li><Link>Customer Reviews</Link></li>
                                <li><Link>Upload Menu</Link></li>
                            </div>
                        </div>
                        <h2 className="menu-title uppercase text-red-500">Authentication Pages</h2>
                        <div className="font-semibold ml-2">
                            <div className="ml-7">
                                <li><a>Login</a></li>
                                <li><a>Register Now</a></li>
                                <li><a>Lock Screen</a></li>
                                <li><a>Recover Password</a></li>
                            </div>
                        </div>
                    </ul>

                    <footer className="absolute bottom-0 w-full p-4 bg-base-100">
                        <div className="flex justify-center gap-2 text-sm mb-2">
                            <BiLogoFacebook color="#3A5896" />
                            <AiOutlineTwitter color="#1E91D8" />
                            <BiLogoLinkedin color="#165B7A" />
                            <AiOutlineGooglePlus color="#D54432" />
                        </div>
                        <p className="text-center text-xs font-bold">&copy; 2023 <span className="text-red-500">Tomatus</span>. All Right Reserved</p>
                    </footer>
                </div>
            </div>
        </div>
    );
};

export default ChefPage;