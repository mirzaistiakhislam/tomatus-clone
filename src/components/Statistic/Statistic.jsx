import { BsFillBoxSeamFill } from "react-icons/bs";
import { TbTruckDelivery } from "react-icons/tb";
import { RiCustomerService2Line } from "react-icons/ri";
import { GiReceiveMoney } from "react-icons/gi";
import { PiChartLineDownBold, PiChartLineUpBold } from "react-icons/pi";

const Statistic = () => {

    return (
        <div className="ml-6 -mt-4">
            <div className="flex justify-between">
                <h5 className="text-sm font-semibold text-white mb-2">Statistic</h5>
            </div>
            <div className='grid grid-cols-2 gap-2'>
                <div className="flex px-5 py-4 bg-base-100">
                    <div className="flex items-center">
                        <BsFillBoxSeamFill size={30} />
                    </div>
                    <div className="ml-4">
                        <p className="text-xl font-semibold text-[#F35956]">7540</p>
                        <span className="text-xs font-semibold text-white">Order Received</span>
                    </div>
                </div>
                <div className="flex  px-5 py-4 bg-base-100">
                    <div className="flex items-center">
                        <TbTruckDelivery size={30} />
                    </div>
                    <div className="ml-4">
                        <p className="text-xl font-semibold text-[#79CF5C]">2625</p>
                        <span className="text-xs font-semibold text-white">Today Delivered</span>
                    </div>
                </div>
                <div className="flex  px-5 py-4 bg-base-100">
                    <div className="flex items-center">
                        <RiCustomerService2Line size={30} />
                    </div>
                    <div className="ml-4">
                        <p className="text-xl font-semibold text-[#6256F9]">9846</p>
                        <span className="text-xs font-semibold text-white">New Customer</span>
                    </div>
                </div>
                <div className="flex  px-5 py-4 bg-base-100">
                    <div className="flex items-center">
                        <GiReceiveMoney size={30} />
                    </div>
                    <div className="ml-4">
                        <p className="text-xl font-semibold text-[#F89442]">42750</p>
                        <span className="text-xs font-semibold text-white">Net Earning</span>
                    </div>
                </div>
                <div className="flex  px-5 py-4 bg-base-100">
                    <div className="flex items-center">
                        <PiChartLineUpBold size={30} />
                    </div>
                    <div className="ml-3">
                        <p className="text-xl font-semibold text-[#79CF5C]">Total: 9765</p>
                        <span className="text-xs font-semibold text-white">Daily Sales</span>
                    </div>
                </div>
                <div className="flex  px-5 py-4 bg-base-100">
                    <div className="flex items-center">
                        <PiChartLineDownBold size={30} />
                    </div>
                    <div className="ml-3">
                        <p className="text-xl font-semibold text-[#F35956]">Total: 6765</p>
                        <span className="text-xs font-semibold text-white">Daily Expense</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Statistic;