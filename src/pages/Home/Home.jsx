import NavBar from "../../components/NavBar/NavBar";
import { BiLogoLinkedin, BiSolidDashboard } from "react-icons/bi";
import './Home.css';
import Nav from "../../components/Nav/Nav";
import Prize from "../../components/Prize/Prize";
import EarningGraph from "../../components/EarningGraph/EarningGraph";
import Statistic from "../../components/Statistic/Statistic";
import CustomerFeed from "../../components/CustomerFeed/CustomerFeed";
import ReceiveOrderLists from "../../components/ReceiveOrderLists/ReceiveOrderLists";
import HotFoodMenu from "../../components/HotFoodMenu/HotFoodMenu";
import { BiLogoFacebook } from "react-icons/bi";
import { AiOutlineGooglePlus, AiOutlineTwitter } from "react-icons/ai";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className="bg-base-200">
            <NavBar></NavBar>
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    {/* Page content here */}
                    <Nav home='FOOD' food='Food'></Nav>
                    <div className="grid grid-cols-12 gap-4">
                        <div className="col-span-5">
                            <Prize></Prize>
                        </div>
                        <div className="col-span-7">
                            <EarningGraph></EarningGraph>
                        </div>
                        <div className="col-span-5">
                            <Statistic></Statistic>
                        </div>
                        <div className="col-span-7">
                            <CustomerFeed></CustomerFeed>
                        </div>
                        <div className="col-span-8">
                            <ReceiveOrderLists></ReceiveOrderLists>
                        </div>
                        <div className="col-span-4">
                            <HotFoodMenu></HotFoodMenu>
                        </div>
                    </div>
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                </div>
                <div className="drawer-side bg-base-100">
                    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-[282px] min-h-full text-base-content list-none">
                        {/* Sidebar content here */}
                        <h2 className="menu-title uppercase text-red-500">Main</h2>
                        <div className="font-semibold ml-2">
                            <li className="bg-base-200 border-2 border-y-0 border-r-0 border-l-red-500"><a> <BiSolidDashboard size={20} /> <span className="text-red-500">Dashboard</span></a></li>
                            <div className="ml-7">
                                <li><Link>Menu Layout</Link></li>
                                <li><Link>Order List</Link></li>
                                <li><Link to='/chef-page'>Chef Page</Link></li>
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

export default Home;