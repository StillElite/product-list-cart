import { useCart } from '@/CartContext';
import { CartItem } from './CartItem';
import { CartSummary } from './CartSummary';
import { useState } from 'react';
import CartConfirmation from './CartConfirmation';

export const Cart = () => {
  const { cartItems, removeFromCart, clearCart } = useCart();
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <div className='p-4 bg-white shadow rounded-lg'>
      <h2 className='text-xl font-bold mb-4 text-orange-700'>
        Your Cart ({totalItems})
      </h2>
      {cartItems.length === 0 ? (
        <div className='flex flex-col items-center justify-center'>
          <img
            src='/product-list-cart/images/empty-cart.svg'
            alt='Empty cart'
          />
          <p>Your cart is empty.</p>
        </div>
      ) : (
        <>
          <ul>
            {cartItems.map((item) => (
              <CartItem
                key={item.id}
                item={item}
                removeFromCart={removeFromCart}
              />
            ))}
          </ul>
          <CartSummary cartItems={cartItems} />
        </>
      )}
      <div className='mt-4 flex justify-between items-center space-x-4'>
        {cartItems.length > 0 && (
          <>
            <button
              className='bg-orange-700 text-white py-2 px-4 rounded-full hover:bg-orange-600'
              onClick={clearCart}
            >
              Clear Cart
            </button>
            <button
              className='bg-blue-600 text-white py-2 px-4 rounded-full hover:bg-blue-500 shadow-md'
              onClick={handleOpenModal}
            >
              Confirm Order
            </button>
          </>
        )}
      </div>

      {/* Modal Component */}
      <CartConfirmation isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
  );
};
