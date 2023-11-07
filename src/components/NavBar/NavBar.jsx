import user from '../../assets/user.jpg';

const NavBar = () => {
    return (
        <div className="navbar bg-base-100 mb-2">
            <div className="navbar-start">
                <div className="md:w-2/5 flex justify-between">
                    <a className="btn btn-ghost normal-case text-xl">Tomatus</a>
                    <button>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                    </button>
                </div>
                {/* divider  */}
                <div className="divider divider-horizontal"></div>

                {/* search  */}
                <div className="relative flex items-center">
                    <input type="text" placeholder="Search..." className="input  rounded-full md:h-10 md:w-64 bg-base-200" />
                    <button className="btn btn-ghost btn-circle absolute right-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                    </button>
                </div>
            </div>

            <div className="navbar-end">
                <button className="btn btn-ghost btn-circle text-red-500">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
                </button>
                <div className="flex">
                    <div className="btn btn-ghost btn-circle avatar  ">
                        <div className="w-10 rounded-full border-2 border-[#F8A05A]">
                            <img src={user} />
                        </div>
                    </div>
                    <div className='hidden md:inline -ml-2'>
                        <select className="select w-full max-w-xs text-white">
                            <option>Mirza Istiakh Islam</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NavBar;