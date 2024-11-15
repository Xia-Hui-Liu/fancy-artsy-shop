import { FaUser } from 'react-icons/fa';
import Link from 'next/link';

const UserLogin: React.FC = () => {
  return (
    <>
      <Link href='/login'>
        <FaUser className="w-6 h-6 sm:w-6 sm:h-6" style={{ color: '#234B67' }} />
      </Link>
    </>
  );
};

export default UserLogin;