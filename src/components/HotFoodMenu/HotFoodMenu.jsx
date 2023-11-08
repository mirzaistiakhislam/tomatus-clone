

const HotFoodMenu = () => {


    const menus = [
        {
            id: 1,
            title: 'Chicken Burger',
            image: 'https://img.freepik.com/free-psd/fresh-beef-burger-isolated-transparent-background_191095-9018.jpg?w=740&t=st=1699314390~exp=1699314990~hmac=73e172178321746634aea2d1d1f0418a3e5eabafb4647426aa1f915162156e4f',
            price: 44.75,
            status: 'cancel'
        },
        {
            id: 2,
            title: 'Hot Dog',
            image: 'https://img.freepik.com/free-vector/hot-dog_78370-496.jpg?w=740&t=st=1699314584~exp=1699315184~hmac=41a68029db6e353f3fa27274f0ad7e1feb95a9f88fd4f360dd42925eac6e88d1',
            price: 28.55,
            status: 'paid'
        },
        {
            id: 3,
            title: 'Soft Drinks',
            image: 'https://img.freepik.com/free-photo/colorful-soda-drinks-macro-shot_53876-18225.jpg?w=900&t=st=1699314618~exp=1699315218~hmac=465b112b1d655c289951c8bcfc004e7fbb7e43085d11253ff2450360d0f2ce8a',
            price: 68.75,
            status: 'cancel'
        },
        {
            id: 4,
            title: 'Jumbo Burger',
            image: 'https://img.freepik.com/free-photo/double-hamburger-isolated-white-background-fresh-burger-fast-food-with-beef-cream-cheese_90220-1192.jpg?t=st=1699313298~exp=1699316898~hmac=65d6018ec6d79c38bbbedd945e9e578ffff06e02cd4fe646cddb42603706701d&w=740',
            price: 32.25,
            status: 'cancel'
        },
        {
            id: 5,
            title: 'Fried Rice',
            image: 'https://img.freepik.com/premium-photo/plate-fried-rice-with-vegetables-it_454225-5551.jpg',
            price: 24.80,
            status: 'cancel'
        },
        {
            id: 6,
            title: 'Thai Soup',
            image: 'https://img.freepik.com/free-photo/bowl-thai-red-curry-with-chicken-vegetables_1340-23177.jpg?t=st=1699291149~exp=1699294749~hmac=414078bc9968306008d769911f4710fe518d4cfa5f8590b1b6f8972793eb381e&w=900',
            price: 26.20,
            status: 'paid'
        },

    ]

    return (
        <div className="">
            <div className="">
                <div className="flex justify-between mb-2">
                    <h5 className="text-sm font-semibold text-white md:mb-2">Hot Food Menu</h5>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current text-white"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path></svg>
                </div>
                <div className="overflow-x-auto">
                    <table className="table">
                        <tbody>
                            {
                                menus.map((menu) => <tr key={menu.id} className="">
                                    <td className="flex justify-between content-center px-6 py-3 bg-base-100 border-[1px] border-r-0 border-t-0 border-l-0 border-b-[#4A4F57]">
                                        <div className="flex items-center space-x-3">
                                            <div className="avatar">
                                                <div className="w-8 h-8 rounded-full">
                                                    <img src={menu.image} alt="" />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="text-xs font-semibold text-white">{menu.title}</div>
                                                <div className="text-xs ">{menu.review}</div>
                                            </div>
                                        </div>

                                        {
                                            menu.status === 'paid' ?
                                                <div className="w-20 rounded-full grid content-center bg-[#79D25C] text-white my-auto">
                                                    <span className="text-xs text-center py-1.5 font-semibold">${menu.price}</span>
                                                </div>
                                                :
                                                <div className="w-20 rounded-full grid content-center bg-[#F85756] text-white my-auto">
                                                    <span className="text-xs text-center py-1.5 font-semibold">${menu.price}</span>
                                                </div>
                                        }
                                    </td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default HotFoodMenu;