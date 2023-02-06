let arrow = document.querySelectorAll(".arrow");
for (var i = 0; i < arrow.length; i++) {
    arrow[i].addEventListener("click", (e) => {
        let arrowParent = e.target.parentElement.parentElement;
        arrowParent.classList.toggle("showMenu");
    });
}

let sidebar = document.querySelector(".Sidebar");
let sidebarBtn = document.querySelector(".bx-menu");
console.log(sidebarBtn);
sidebarBtn.addEventListener("click", () => {
    sidebar.classList.toggle("close");
});
$('.NavLinks1').click(function () {
    $('#content1').removeClass('hide');
    $('#content2').addClass('hide');

})
$('.NavLinks2').click(function () {
    $('#content1').addClass('hide');
    $('#content2').removeClass('hide');
})
// $('button').click(function(){
//     $('div').toggleClass('hide');
// })