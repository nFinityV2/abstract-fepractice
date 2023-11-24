import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Search = () => {
    return (
        <>
            <form action="#" method="get" className="flex justify-center">
                <input type="search" placeholder="Search" className="bg-white w-11/12 lg:w-2/3 px-4 py-4 border-black border-solid border rounded-md" />
                <button className=""><FontAwesomeIcon icon={faArrowRight} size="lg" /></button>
            </form>
            
        </>
    )
}

export default Search;