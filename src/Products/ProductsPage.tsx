import { FC } from 'react';
import ProductContainer from './ProductContainer';
import { Cart } from '../Cart/Cart';

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
  category: string;
}

interface ProductsPageProps {
  products: Product[];
}

export const ProductsPage: FC<ProductsPageProps> = ({ products }) => {
  return (
    <div className='bg-orange-50 min-h-screen'>
      <div className='max-w-[1220px] mx-auto p-6 grid grid-cols-1 lg:grid-cols-3 gap-6'>
        <div className='lg:col-span-2'>
          <ProductContainer products={products} />
        </div>
        <div>
          <Cart />
        </div>
      </div>
    </div>
  );
};
