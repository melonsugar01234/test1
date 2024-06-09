function Header() {
    return (
        <>
        <header className="drop-shadow-md flex border-b-4 p-5 gap-5 text-2xl">

        <h1 className="font-extrabold	">Mini Reg</h1>
        <nav className="flex gap-3 text-sm mt-2">
            <a href="#">Course List</a>
            <a href="#">About Us</a>
            <a href="#">Contact Us</a>
        </nav>
        </header>
        <h2 className=" font-bold m-5 text-xl text-slate-600 ml-10">Courses</h2>
        <hr className="drop-shadow-lg"></hr>
        </>
    );
}

export default Header;