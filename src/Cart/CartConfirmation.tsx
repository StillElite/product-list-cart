import Modal from 'react-modal';

Modal.setAppElement('#__next');

import { formatPrice } from '@/utils/formatPrice';
import { useCart } from '@/CartContext';
import { useEffect } from 'react';

interface CartConfirmationProps {
  isOpen: boolean;
  onClose: () => void;
}

const useDisableBodyScroll = (isOpen: boolean) => {
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);
};

const CartConfirmation: React.FC<CartConfirmationProps> = ({
  isOpen,
  onClose,
}) => {
  const { cartItems, clearCart } = useCart();

  useDisableBodyScroll(isOpen);

  const orderTotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <Modal
      isOpen={isOpen}
      shouldCloseOnOverlayClick={false}
      preventScroll={true}
      className='bg-white p-6 rounded-lg shadow-lg max-w-lg mx-auto'
      overlayClassName='fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center'
    >
      <div>
        {/* Header */}
        <img
          src='/product-list-cart/images/icon-order-confirmed.svg'
          alt='Order Confirmed'
          className='w-6'
        />
        <h2 id='order-confirmation-title' className='text-xl font-bold'>
          Order Confirmed
        </h2>
        <p id='order-confirmation-description' className='text-gray-500'>
          We hope you enjoy your purchase!
        </p>

        {/* Order Details */}
        <div className='bg-gray-100 p-4 rounded-lg shadow-inner'>
          <div className='max-h-[300px] overflow-y-auto'>
            <ul>
              {cartItems.map((item) => (
                <li
                  key={item.id}
                  className='flex justify-between items-center border-b pb-2 mb-2'
                >
                  {/* Item Info */}
                  <div className='flex items-center space-x-4'>
                    <div className='w-12 h-12 bg-white flex items-center justify-center rounded'>
                      <img
                        src={item.image}
                        alt={item.title}
                        className='max-w-full max-h-full object-contain'
                      />
                    </div>
                    <div className='flex flex-col space-y-1 w-[180px]'>
                      <h3 className='text-sm font-semibold text-gray-900 truncate'>
                        {item.title}
                      </h3>
                      <p className='text-xs text-gray-500'>
                        {item.quantity} × {formatPrice(item.price)}
                      </p>
                    </div>
                  </div>

                  {/* Item Total Price */}
                  <span className='font-bold text-gray-800 pl-4'>
                    {formatPrice(item.price * item.quantity)}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Order Total */}
          <div className='flex justify-between mt-4'>
            <span className='font-semibold text-lg'>Order Total</span>
            <span className='font-bold text-lg text-orange-700'>
              {formatPrice(orderTotal)}
            </span>
          </div>
        </div>

        {/* Start New Order Button */}
        <button
          className='mt-6 w-full bg-orange-700 text-white py-2 rounded-full hover:bg-orange-600'
          onClick={() => {
            clearCart();
            onClose();
          }}
        >
          Start New Order
        </button>
      </div>
    </Modal>
  );
};

export default CartConfirmation;
