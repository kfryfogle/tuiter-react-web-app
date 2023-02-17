/* eslint-env jquery */

const WhoToFollowListItem = (who) => {
    return(`
        <li class="list-group-item">
            <div class="wd-profile-suggestion border-0">
                <div class="wd-profile-image">
                    <img class="wd-image-frame-profile"
                         width="30px" height="30px" src="${who.avatarIcon}">
                </div>
                <div class="wd-profile-info">
                    <b>${who.userName} <i class="fa fa-check-circle"></i></b><br/>
                    @${who.handle}
                </div>
                <div class="wd-follow-box">
                    <button class="btn btn-primary wd-btn-ovrd-shape">Follow</button>
                </div>
                <div class="wd-float-done"></div>
            </div>
        </li>
    `);
}

export default WhoToFollowListItem;