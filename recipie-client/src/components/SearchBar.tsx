import SearchIcon from '../assets/images/icon-search.svg';

export default function SearchBar() {
    return (
        <div className="search-bar">
            <img src={SearchIcon} alt="" />
            <input type="text" placeholder="Search recipes..." />
        </div>
    )
}