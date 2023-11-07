import NavBar from "../../components/NavBar/NavBar";
import { BiSolidDashboard } from "react-icons/bi";
import './Home.css';
import Nav from "../../components/Nav/Nav";
import Prize from "../../components/Prize/Prize";
import EarningGraph from "../../components/EarningGraph/EarningGraph";

const Home = () => {
    return (
        <div className="bg-base-200 border">
            <NavBar></NavBar>
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    {/* Page content here */}
                    <Nav></Nav>
                    <div className="grid grid-cols-12 gap-4">
                        <div className="col-span-5">
                            <Prize></Prize>
                        </div>
                        <div className="col-span-7">
                            <EarningGraph></EarningGraph>
                        </div>
                    </div>
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                </div>
                <div className="drawer-side bg-base-100">
                    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-[282px] min-h-full text-base-content list-none">
                        {/* Sidebar content here */}
                        <h2 className="menu-title uppercase text-red-500">Main</h2>
                        <li className="font-semibold">
                            <ul className="">
                                <li className="bg-base-200 border-2 border-y-0 border-r-0 border-l-red-500"><a> <BiSolidDashboard size={20} /> <span className="text-red-500">Dashboard</span></a></li>
                                <div className="ml-7">
                                    <li><a>Menu Layout</a></li>
                                    <li><a>Order List</a></li>
                                    <li><a>Chef Page</a></li>
                                    <li><a>Customer Reviews</a></li>
                                    <li><a>Upload Menu</a></li>
                                </div>
                            </ul>
                        </li>
                        <h2 className="menu-title uppercase text-red-500">Authentication Pages</h2>
                        <li className="font-semibold">
                            <ul className="">
                                <div className="ml-7">
                                    <li><a>Login</a></li>
                                    <li><a>Register Now</a></li>
                                    <li><a>Lock Screen</a></li>
                                    <li><a>Recover Password</a></li>
                                </div>
                            </ul>
                        </li>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Home;