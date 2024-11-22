import { FC } from 'react';
import ProductItem from './ProductItem';

export interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
  category: string;
}

interface ProductContainerProps {
  products: Product[];
}

const ProductContainer: FC<ProductContainerProps> = ({ products }) => {
  return (
    <>
      <h1 className='text-3xl font-bold mb-6'>Explore Our Collection</h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
        {products.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
    </>
  );
};

export default ProductContainer;
