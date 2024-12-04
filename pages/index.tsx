import Link from 'next/link';

const HomePage = () => {
  return (
    <div className='relative bg-orange-50 min-h-screen'>
      <div
        className="absolute inset-0 bg-cover bg-center bg-[url('/product-list-cart/images/banner.jpg')]"
        role='img'
        aria-label='Vineyard Store'
      ></div>

      <div className='relative flex flex-col items-center justify-center min-h-screen bg-black bg-opacity-50 text-white text-center px-4'>
        <h1 className='text-3xl sm:text-4xl font-bold mb-4'>
          Welcome to Vineyard
        </h1>
        <p className='text-base sm:text-lg mb-6'>
          Discover amazing products tailored just for you.
        </p>
        <Link href='/products'>
          <button
            className='bg-orange-700 text-white py-2 px-6 rounded-full shadow-lg hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2'
            aria-label='Shop Now'
          >
            Shop Now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
