import NavItem from "./NavItem.js";
import elements from './elements.js';

const NavigationSidebar = (active, size) => {
    return(`
        <div class="container p-0 m-0">
           <div class="list-group wd-list-group">
               ${elements.map(element => {return(
                   NavItem(element, active, size));
               }).join('')}
           </div> 
           <div class="d-grid mt-2">
             <a href="tweet.html"
                class="btn btn-primary btn-block rounded-pill">
                Tweet</a>
           </div>
       </div>
    `);
}
export default NavigationSidebar;

