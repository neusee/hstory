import { Search } from "lucide-react";
import { useRouter, usePathname } from "next/navigation";

export default function Searchbar() {
    const router = useRouter();
    const pathname = usePathname();
    const isSearchPage = pathname === "/search";
    
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // 검색 로직
    };

    const handleSearchbarFocus = () => {
        if (!isSearchPage) {
            router.push("/search");
        }
    };

    return (
        <form
            className="flex items-center"
            role="search"
            onSubmit={ handleSubmit }
        >
            <div className="px-3 py-2 rounded-lg bg-gray-100 flex w-full font-medium">
                <input 
                    type="text"
                    placeholder="Search..."
                    className="outline-none text-black placeholder-gray-400"
                    spellCheck={ false }
                    onFocus={ handleSearchbarFocus }
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