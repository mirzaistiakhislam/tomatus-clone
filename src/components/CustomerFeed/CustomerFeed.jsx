

const CustomerFeed = () => {

    const customerFeeds = [
        {
            id: 1,
            name: 'Inverness Mckenzie',
            review: 'New Food Menu Was Awesome',
            image: 'https://img.freepik.com/free-photo/fashion-boy-with-yellow-jacket-blue-pants_71767-96.jpg?size=626&ext=jpg&uid=R48673625&ga=GA1.1.1083443483.1692079737&semt=sph',
            time: 5
        },
        {
            id: 2,
            name: 'Rodney Artichoke',
            review: 'Great support, like it very much',
            image: 'https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?w=740&t=st=1699301504~exp=1699302104~hmac=015cb03441f7b2cec476af9172677518f38a180d617718c19b4b401672af54cb',
            time: 10
        },
        {
            id: 3,
            name: 'Indigo Violet',
            review: 'We like your birthday cake',
            image: 'https://img.freepik.com/premium-photo/cartoon-character-with-blue-shirt-glasses_561641-2088.jpg?w=740',
            time: 25
        },
        {
            id: 4,
            name: 'Hermann P.Schnitzel',
            review: 'Awesome Food Menu',
            image: 'https://img.freepik.com/free-photo/woman-with-long-hair-yellow-hoodie-with-word-music-it_1340-39068.jpg?t=st=1699301744~exp=1699305344~hmac=417fe4303a0356d122152d115bfbd3c5966a234d810427a12a7298b3b34b8454&w=740',
            time: 28
        }

    ]

    return (
        <div className="mr-6 mt-2">
            <div className="flex justify-between">
                <h5 className="text-sm font-semibold text-white mb-2">Customer Feed</h5>
                <h5 className="text-xs font-semibold text-white mb-2">View All</h5>
            </div>
            <div className="overflow-x-auto">
                <table className="table">
                    <tbody>
                        {
                            customerFeeds.map(customerFeed => <tr key={customerFeed.id}>
                                <td className="flex justify-between mb-1.5 content-center px-6 py-3 bg-base-100">
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="w-8 h-8 rounded-full">
                                                <img src={customerFeed.image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="text-xs text-white">{customerFeed.name}</div>
                                            <div className="text-xs ">{customerFeed.review}</div>
                                        </div>
                                    </div>

                                    <div className="btn btn-sm rounded-full grid content-center bg-base-200 my-auto ">
                                        <span className="text-xs font-semibold px-3">{customerFeed.time} Min ago</span>
                                    </div>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default CustomerFeed;