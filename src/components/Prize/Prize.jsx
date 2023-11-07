import prize from '../../assets/prize.png';

const Prize = () => {
    return (
        <div className="bg-base-100 border ml-6">
            <div className="w-full bg-base-100 py-10 px-4">
                <figure className="mx-auto h-12 w-16">
                    <img src={prize} alt="" className="rounded-xl h-12 w-16" />
                </figure>
                <div className="items-center text-center ">
                    <span className="text-2xl text-white font-semibold">15<sup className="text-sm">th</sup> Years</span>
                    <p className='text-xs font-bold'>This Year Winner to Tomatus. <span className='text-red-500'>Congratulation!</span></p>
                    <p className='text-xs font-semibold mt-1'>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country.</p>
                </div>
            </div>
        </div>
    );
};

export default Prize;