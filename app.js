// NAV SCROLLING SECTION
window.addEventListener("scroll", function() {
    var header = document.querySelector("nav");

    header.classList.toggle("sticky", window.scrollY > 100);
})


// ACTIVE NAV BTNS SECTION

const activePage = window.location.pathname;
const navLinks = document.querySelectorAll('.nav-btn a');

// console.log(activePage);

navLinks.forEach(link => {
    if (link.href.includes(`${activePage}`)) {
        link.classList.add("active-nav-links");
    }
});


// This is the Nav Icon Showing Mobile Nav

function navMobileBtn() {
    var navMobileBtn = $("#nav-icon");

    navMobileBtn.click(function() {
        navMobileBtn.addClass("open");
        $(".mobile-nav").css("right", "0");
        $(".mobile-nav-bg").css("display", "block");
    })
}

navMobileBtn();

// This is for the Click outside Mobile Nav

var mobileNavContainer = $(".mobile-nav");

mobileNavContainer.click(function(event) {
    const navBtn2 = document.querySelector("#nav-icon");

    if (event.target.closest("#mobile-nav-list")) return;
    navBtn2.classList.remove("open");
    $(".mobile-nav").css("right", "-100%");
    $(".mobile-nav-bg").css("display", "none");
});


function subNavTrigger() {
    $(".mobile-nav-sub-trigger-link-1").click(function() {
        $(".nav-sub-links-1").slideToggle();
    })
}

subNavTrigger();

function subNavTrigger2() {
    $(".mobile-nav-sub-trigger-link-2").click(function() {
        $(".nav-sub-links-2").slideToggle();
    })
}

subNavTrigger2();