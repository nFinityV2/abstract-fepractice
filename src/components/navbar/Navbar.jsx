import Abstract from "./Abstract";

function Navbar() {
    return (
        <nav className="flex flex-row justify-evenly items-center bg-black px-4 py-5 text-white">
            <div className="w-5/12">
                <Abstract/>
            </div>
            <h1>Help Center</h1>
        </nav>
    )
}

export default Navbar;