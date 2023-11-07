import prize from '../../assets/prize.png';

const Prize = () => {
    return (
        <div className="bg-base-100 border ml-6">
            <div className="w-full bg-base-100 py-10">
                <figure className="mx-auto w-20 h-16">
                    <img src={prize} alt="" className="rounded-xl" />
                </figure>
                <div className="items-center text-center mt-4">
                    <span className="text-xl text-white font-semibold">15<sup className="text-sm">th</sup> Years</span>
                    <p className='text-xs font-bold'>This Year Winner to Tomatus. <span className='text-red-500'>Congratulation!</span></p>
                    <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country</p>
                </div>
            </div>
        </div>
    );
};

export default Prize;