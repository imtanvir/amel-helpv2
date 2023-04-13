const leftSideNav = () =>{
    const navBar = document.getElementById("leftSideNavBar");
    const ishidden = navBar.style.visibility == 'hidden';
    const isshow = navBar.style.visibility == 'visible';
    if (ishidden) {
        navBar.style.visibility = 'visible';
    } else if (isshow) {
        navBar.style.visibility = 'hidden';
    }
    console.log('hello');
}

export default leftSideNav;