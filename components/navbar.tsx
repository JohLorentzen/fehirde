import Link from "next/link";
import ModeToggle from "./mode-toggle";


const Navbar = async () => {


  return (
    <header className="sticky top-0 z-50 pt-4">
      <div className="max-w-6xl w-full px-4 md:px-6 mx-auto">
        <nav className="navbar">
          <Link href="/" className="text-2xl text-black logo-headline font-bold">
            Fehirde
          </Link>
          <Link href="/dashboard" className="text-2xl text-black logo-headline font-bold">
            Dashboard
          </Link>

          <div className="flex items-center space-x-4">
            <ModeToggle />
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
