import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { formatPrice } from '@/utils/formatPrice';

interface CartItemProps {
  item: {
    id: number;
    title: string;
    price: number;
    quantity: number;
  };
  removeFromCart: (id: number) => void;
}

export const CartItem: React.FC<CartItemProps> = ({ item, removeFromCart }) => {
  return (
    <li key={item.id} className='border-b py-4 flex justify-between'>
      <div>
        <h3 className='font-semibold text-sm text-gray-900'>{item.title}</h3>
        <p className='text-sm text-gray-500 flex items-center space-x-2'>
          <span className='text-orange-700 font-bold'>{item.quantity}x</span>
          <span>@{formatPrice(item.price)}</span>
          <span className='text-gray-900 font-medium'>
            {formatPrice(item.price * item.quantity)}
          </span>
        </p>
      </div>
      <button onClick={() => removeFromCart(item.id)}>
        <FontAwesomeIcon
          icon={faCircleXmark}
          className='text-orange-900 hover:text-black'
          aria-label={`Remove ${item.title} from cart`}
        />
      </button>
    </li>
  );
};
