import { Search } from "lucide-react";

export default function Searchbar() {
    
    const handleSubmit = () => {

    };

    return (
        <form
            className="flex items-center gap-2"
            role="search"
            onSubmit={ handleSubmit }
        >
            <div className="px-3 py-2 rounded-lg bg-gray-100 flex items-center w-full font-medium">
                <input 
                    type="text"
                    placeholder="Search..."
                    className="bg-transparent outline-none"
                    spellCheck={ false }
                />
                <button
                    type="submit"
                    className="ml-2 text-gray-500 cursor-pointer"
                >
                    <Search size={ 18 } />
                </button>
            </div>
        </form>
    );
}