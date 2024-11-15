import Link from "next/link"

const Announcementbar: React.FC = () => {
  return(
    <>
        <div className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center w-full h-9 bg-black text-white text-sm">
            <Link href='/holiday-sale'>
                <span>Black Friday Price Drop + Extra 15% Off!</span>
            </Link>
        </div>
    </>
  );

};

export default Announcementbar;