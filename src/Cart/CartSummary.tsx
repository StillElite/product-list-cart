import { formatPrice } from '@/utils/formatPrice';

interface CartSummaryProps {
  cartItems: {
    price: number;
    quantity: number;
  }[];
}

export const CartSummary: React.FC<CartSummaryProps> = ({ cartItems }) => {
  const orderTotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div>
      <div className='flex justify-between py-4 mt-4'>
        <span className='font-semibold'>Order Total</span>
        <span className='font-semibold'>{formatPrice(orderTotal)}</span>
      </div>
      <div className='bg-orange-50 rounded-md p-4 flex justify-center'>
        <img
          src='/product-list-cart/images/icon-carbon-neutral.svg'
          alt='Carbon neutral'
        />
        <p className='text-sm pl-2'>
          This is a <span className='font-semibold'>carbon-neutral </span>
          delivery
        </p>
      </div>
    </div>
  );
};
