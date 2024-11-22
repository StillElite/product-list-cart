import { FC } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus, faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames';
import { useCart } from '@/CartContext';
import { formatPrice } from '@/utils/formatPrice';

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
  category: string;
}

interface ProductItemProps {
  product: Product;
}

const ProductItem: FC<ProductItemProps> = ({ product }) => {
  const { addToCart, setCartItemQuantity, removeFromCart, cartItems } =
    useCart();

  const currentCartItem = cartItems.find((item) => item.id === product.id);
  const quantity = currentCartItem ? currentCartItem.quantity : 0;

  const handleAdd = () => {
    addToCart({
      id: product.id,
      title: product.title,
      price: product.price,
      quantity: 1,
      image: product.image,
    });
  };

  const handleIncrease = () => {
    setCartItemQuantity(product.id, quantity + 1);
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      setCartItemQuantity(product.id, quantity - 1);
    } else {
      removeFromCart(product.id);
    }
  };

  const imageBoxClass = classNames(
    'relative bg-white border-2 rounded-lg h-[240px]',
    {
      'border-orange-700': quantity > 0,
    }
  );

  const addToCartButtonClass = classNames(
    'w-[150px] absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 bg-white py-2 px-4 rounded-full border border-black hover:border-orange-700 hover:text-orange-700 hover:shadow-sm transition-all duration-300'
  );

  const quantityClass = classNames(
    'w-[150px] absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 bg-orange-700 py-2 px-4 rounded-full border border-orange-700 bg-orange-700 text-white flex items-center justify-between'
  );

  return (
    <div className='relative'>
      <div className={imageBoxClass}>
        <img
          src={product.image}
          alt={product.title}
          className='w-full h-48 object-contain mt-4'
        />

        {quantity > 0 ? (
          <div className={quantityClass}>
            <button onClick={handleDecrease} aria-label='Decrease quantity'>
              <FontAwesomeIcon icon={faMinus} className='hover:text-black' />
            </button>
            <span className='text-sm'>{quantity}</span>
            <button onClick={handleIncrease} aria-label='Increase quantity'>
              <FontAwesomeIcon icon={faPlus} className='hover:text-black' />
            </button>
          </div>
        ) : (
          <button className={addToCartButtonClass} onClick={handleAdd}>
            <FontAwesomeIcon
              icon={faCartPlus}
              className='mr-2 text-orange-700'
            />
            Add to Cart
          </button>
        )}
      </div>
      <div className='mt-10'>
        <h3 className='text-xs text-gray-500 capitalize'>{product.category}</h3>
        <h2 className='text-sm font-semibold truncate'>{product.title}</h2>
        <p className='text-base text-orange-700'>
          {formatPrice(product.price)}
        </p>
      </div>
    </div>
  );
};

export default ProductItem;
