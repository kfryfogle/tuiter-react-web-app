
const NavItem = (element, active, size) => {
    if (size === 'small') {
        return (`
            <a href='${element.href}' class="list-group-item list-group-item-action  ${(active === element.description) ? 'active' : ''} ">
                <i class="${element.icon}"></i>
            </a>
    `);
    }
    else {
        return (`
            <a href='${element.href}' class="list-group-item list-group-item-action ${(active === element.description) ? 'active' : ''}">
                <i class="${element.icon}"></i>
                ${element.description}
            </a>
    `);
    }
}
export default NavItem;
