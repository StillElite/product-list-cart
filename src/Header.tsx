import Link from 'next/link';

const Header = () => {
  return (
    <header className='bg-white shadow-md py-4'>
      <div className='max-w-[1500px] mx-auto pl-5 flex justify-between items-center'>
        <Link href='/'>
          <h1 className='text-4xl font-light'>
            <span className='font-bold text-gray-900 '>Vineyard</span>
          </h1>
        </Link>
      </div>
    </header>
  );
};

export default Header;
