

const Nav = () => {
    return (
        <div className="mx-2 bg-base-100 mb-6">
            <div className="w-full flex justify-between p-4">
                <p className="text-xs font-bold text-red-500 grid place-content-center pl-4">FOOD</p>
                <div className="flex text-xs font-bold pr-4">
                    <p>Home / </p>
                    <p className="text-red-500 ml-1"> Food</p>
                </div>
            </div>
        </div>
    );
};

export default Nav;