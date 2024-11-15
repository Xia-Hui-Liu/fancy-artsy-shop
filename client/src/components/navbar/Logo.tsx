import Image from 'next/image';
import Link from 'next/link';

const Logo: React.FC = () => {
  return (
    <>
      <Link href="/">
        <div className="relative w-40 h-12 p-2 sm:w-40 sm:h-10 md:w-48 md:h-12 lg:w-56 lg:h-14 xl:w-64 xl:h-13">
          <Image
            src="/images/logo.jpg"
            alt="fancy-artsy"
            fill 
            style={{ objectFit: 'contain' }} 
            priority
          />
        </div>
      </Link>
    </>
  );
};

export default Logo;