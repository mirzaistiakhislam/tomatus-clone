import { AiOutlineTwitter } from "react-icons/ai";
import { BiLogoFacebook, BiLogoLinkedin } from "react-icons/bi";
import { HiEllipsisVertical } from "react-icons/hi2";
import { ImUserPlus } from "react-icons/im";

const Team = () => {

    const teamMembers = [
        {
            id: 1,
            name: 'Alan Fresco',
            title: 'Head Chef',
            specialDish: 'Chicken Burger',
            image: 'https://img.freepik.com/free-photo/portrait-man-smiling-kitchen_23-2150771051.jpg?t=st=1699380212~exp=1699383812~hmac=92a741274576e90f7cbe5df33e8cf9075b4c55933876b94cd7b1d3ce6035fc21&w=360'
        },
        {
            id: 2,
            name: 'Pelican Steve',
            title: 'Head Chef',
            specialDish: 'Jumbo Burger',
            image: 'https://img.freepik.com/free-photo/chef-with-thumb-up-white-background_1368-2842.jpg?size=626&ext=jpg&uid=R48673625&ga=GA1.1.1083443483.1692079737&semt=sph'
        },
        {
            id: 3,
            name: 'Wisteria Ravenclaw',
            title: 'Junior Chef',
            specialDish: 'Thai Soup',
            image: 'https://img.freepik.com/free-photo/male-cook-standing-kitchen-presenting-delicious-dish_23-2147863798.jpg?w=740&t=st=1699381416~exp=1699382016~hmac=5ec68629efea97d65de60ba1e73d6819fddb35e8f08534838446418d046dee3c'
        },
        {
            id: 4,
            name: 'Inverness Mckenzie',
            title: 'Junior Chef',
            specialDish: 'Chicken Burger',
            image: 'https://img.freepik.com/free-photo/happy-young-cook-uniform-holding-salad_171337-5342.jpg?w=900&t=st=1699381470~exp=1699382070~hmac=55e4f1a7e3f219f062f91bc3b66a211d7fb4fd7d84cecad62fce1c45dc2f2416'
        },
        {
            id: 5,
            name: 'Lurch Schpellchek',
            title: 'Chef',
            specialDish: 'Crispy Chicken Salt',
            image: 'https://img.freepik.com/free-photo/portrait-smiling-chef-uniform_329181-675.jpg?w=900&t=st=1699381557~exp=1699382157~hmac=4ee60aeb4d45ca8c64963c80878f61db2c6d196535d0caee15236f0df9649122'
        },
        {
            id: 6,
            name: 'Fergus Douchebag',
            title: 'Chef',
            specialDish: 'Chicken Burger',
            image: 'https://img.freepik.com/free-photo/female-chef-showing-double-thumbs-up-white-uniform-looking-cheery_176474-11763.jpg?w=900&t=st=1699381638~exp=1699382238~hmac=71e98d118ae9adaec5694d8cf7b3bb4d226ddf07f01942793cce9b1925d3731c'
        },
        {
            id: 7,
            name: 'Giles Posture',
            title: 'Chef',
            specialDish: 'Sweet Corn Soup',
            image: 'https://img.freepik.com/free-photo/satisfied-professional-male-chef-cook-white-uniform-cook-hat-standing-with-arms-crossed-looking-confident-green-background_141793-20656.jpg?w=900&t=st=1699382857~exp=1699383457~hmac=a405259ad6a034191fddb34d8960c871bc6017bdad726bcb7fdb84dbaeb78226'
        },
        {
            id: 8,
            name: 'Natalaya Undergrowth',
            title: 'Chef',
            specialDish: 'Egg Fried Rice',
            image: 'https://img.freepik.com/free-photo/front-view-young-female-cook-white-cook-suit-white-cap-smiling-happy_140725-15367.jpg?w=900&t=st=1699382936~exp=1699383536~hmac=d1b4172436ce96556c4c13d6416be36369c0226bed0f23f7fcb55ca1597c1f9c'
        },
        {
            id: 9,
            name: 'Brandon Guidelines',
            title: 'Junior Chef',
            specialDish: 'Chicken Fried Rice',
            image: 'https://img.freepik.com/free-photo/confident-young-handsome-cook-chef-uniform-standing-with-closed-posture-isolated-orange-wall_141793-101136.jpg?w=900&t=st=1699383002~exp=1699383602~hmac=d9bc27ed744afaa97d3f9e1f0dadf6e6984786174b0ed275bfdd0f2a548b235d'
        },
        {
            id: 10,
            name: 'Parsley Montana',
            title: 'Chef',
            specialDish: 'Chili Chicken',
            image: 'https://img.freepik.com/premium-photo/smiling-female-chef-with-cut-vegetables-kitchen_13339-42852.jpg?w=900'
        },
        {
            id: 11,
            name: 'Caspian Bellevedere',
            title: 'Chef',
            specialDish: 'Egg Fried Rice',
            image: 'https://img.freepik.com/free-photo/senior-man-with-red-yellow-peper_1157-44128.jpg?w=900&t=st=1699383154~exp=1699383754~hmac=dfd51e0b11ed7f1b648d36c5f8c868324d3d5ebe7278abaadbf6c443dafd631b'
        },
        {
            id: 12,
            name: 'Fergus Douchebag',
            title: 'Chef',
            specialDish: 'Crispy Chicken Salt',
            image: 'https://img.freepik.com/free-photo/female-chef-holding-wooden-spoon-whisk-rolling-pin-white-uniform-looking-cheery_176474-12639.jpg?w=900&t=st=1699383219~exp=1699383819~hmac=3e02a1c06ab14a4609aa244eee51d1178e31b9698c55e2fb133319c9063e731e'
        }
    ]

    return (
        <div className="grid grid-cols-5 gap-2 mx-6">
            <div>
                <div className="bg-base-100 mx-auto pb-7">
                    <div className="avatar ml-10 w-24 h-24 mt-5 border-2 border-dotted rounded-full">
                        < ImUserPlus size={60} className="mx-auto my-auto" />
                    </div>
                    <div className="items-center text-center">
                        <h2 className="text-sm text-white font-semibold my-2">Invite New Chef</h2>
                        <p className="text-xs font-semibold mb-3 px-3">Invite to your organizations your Member by Email</p>
                        <div className="btn btn-sm rounded-full grid content-center bg-red-500 mx-5 mt-5">
                            <span className="text-xs text-white">Invite New Chef</span>
                        </div>
                    </div>
                </div>
            </div>
            {
                teamMembers.map(teamMember => <div key={teamMember.id}>
                    <div className="bg-base-100 mx-auto relative pb-10">
                        <div className="absolute top-2 right-2">
                            <HiEllipsisVertical size={20} />
                        </div>
                        <div className="avatar ml-10 mt-5">
                            <div className="w-24 h-24 rounded-full">
                                <img src={teamMember.image} className="mx-auto" alt="" />
                            </div>
                        </div>
                        <div className="items-center text-center">
                            <h2 className="text-sm text-white font-semibold">{teamMember.name}</h2>
                            <p className="text-xs font-semibold mb-3">{teamMember.title}</p>
                            <p className="text-xs mb-6 font-semibold text-white"><span className="text-red-500">Special Dish:</span> {teamMember.specialDish}</p>
                            <div className="flex justify-center text-white">
                                <BiLogoFacebook fontSize={15} />
                                <AiOutlineTwitter className="mx-2" fontSize={15} />
                                <BiLogoLinkedin fontSize={15} />
                            </div>
                        </div>
                    </div>
                </div>)
            }
        </div>
    );
};

export default Team;