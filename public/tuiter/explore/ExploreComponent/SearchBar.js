/* eslint-env jquery */
const SearchBar = () => {
    return(`
        <div class="flex-container">
            <div class="flex-box wd-flex-box-search">
                <a><i class="fa fa-search wd-search-icon"></i></a>
                <input class="wd-search-input-sm" placeholder="Search Tuiter"/>
            </div>
            <div class="flex-box flex-box-gear text-center">
                <a href="#"><i class="fa fa-cog fa-2x"></i></a>
            </div>
        </div>
    `);

}

export default SearchBar;