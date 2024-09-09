import WishListCards from "@/components/wishList/WishListCards";


const WishlistPage = () => {


    return (
        <div className=''>
            <div className='h-[64px] w-full bg-black'></div>
            <div className='mt-14 max-w-[1480px] w-[85%] mx-auto'>
                 <h3 className='text-3xl font-semibold text-center'>You Have 8 Items in Wishlist</h3>
                 <WishListCards/>
            </div>
        </div>
    );
};

export default WishlistPage;