

const ReceiveOrderLists = () => {

    const orderLists = [
        {
            id: 1,
            customer: 'Inverness Mckenzie',
            orderId: '#746815',
            product: 'Plain Pizza',
            quantity: '06',
            price: 44.75,
            status: 'Paid'
        },
        {
            id: 2,
            customer: 'Hermann P.schnitzel',
            orderId: '#478561',
            product: 'Burger',
            quantity: '12',
            price: 48.25,
            status: 'Paid'
        },
        {
            id: 3,
            customer: 'Spruce Springclean',
            orderId: '#584875',
            product: 'Drinks',
            quantity: '04',
            price: 34.22,
            status: 'Cancel'
        },
        {
            id: 4,
            customer: 'Bailey Wonger',
            orderId: '#276182',
            product: 'Rice',
            quantity: '08',
            price: 39.85,
            status: 'Pending'
        },
        {
            id: 5,
            customer: 'Ursula gurnmeister',
            orderId: '#846874',
            product: 'Burger',
            quantity: '04',
            price: 38.61,
            status: 'Paid'
        },
        {
            id: 6,
            customer: 'Gustav Purpleson',
            orderId: '#676874',
            product: 'Noodles',
            quantity: '10',
            price: 24.75,
            status: 'Cancel'
        }
    ]


    return (
        <div className="ml-6">
            <div className="flex justify-between">
                <h5 className="text-sm font-semibold text-white mb-1">Receive Order Lists</h5>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current text-white"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path></svg>

            </div>
            <div className="overflow-x-auto">
                <table className="table">
                    <thead className="">
                        <tr className="flex">
                            <th className="ml-2">Customer</th>
                            <th className="ml-16">Order ID</th>
                            <th className="ml-2">Product</th>
                            <th className="ml-2">Quantity</th>
                            <th className="ml-2">Price</th>
                            <th className="ml-12">Status</th>
                        </tr>
                    </thead>
                    <tbody className="">
                        {
                            orderLists.map((orderList) => <tr key={orderList.id} className="bg-base-100 flex mb-1">
                                <td className="w-40 ml-2 text-xs font-semibold">{orderList.customer}</td>
                                <td className="grid place-content-center w-20 -ml-2 text-xs font-semibold">{orderList.orderId}</td>
                                <td className="grid place-content-center w-32  -ml-5 text-xs font-semibold">{orderList.product}</td>
                                <td className="grid place-content-center w-10 text-xs font-semibold">{orderList.quantity}</td>
                                <td className="grid place-content-center w-10 ml-11">
                                    {orderList.status === 'Paid' &&
                                        <p className="text-xs font-semibold text-[#79D25C]">${orderList.price}</p>
                                    }
                                    {orderList.status === 'Cancel' &&
                                        <p className="text-xs font-semibold text-[#F85756]">${orderList.price}</p>
                                    }
                                    {orderList.status === 'Pending' &&
                                        <p className="text-xs font-semibold text-[#FA9440]">${orderList.price}</p>
                                    }
                                </td>
                                <td className="ml-9">
                                    {orderList.status === 'Paid' &&
                                        <div className="w-20 rounded-full grid content-center bg-[#79D25C] text-white my-auto">
                                            <span className="text-xs text-center py-1.5 font-semibold">{orderList.status}</span>
                                        </div>
                                    }
                                    {orderList.status === 'Cancel' &&
                                        <div className="w-20 rounded-full grid content-center bg-[#F85756] text-white my-auto">
                                            <span className="text-xs text-center py-1.5 font-semibold">{orderList.status}</span>
                                        </div>
                                    }
                                    {orderList.status === 'Pending' &&
                                        <div className="w-20 rounded-full grid content-center bg-[#FA9440] text-white my-auto">
                                            <span className="text-xs text-center py-1.5 font-semibold">{orderList.status}</span>
                                        </div>
                                    }
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ReceiveOrderLists;