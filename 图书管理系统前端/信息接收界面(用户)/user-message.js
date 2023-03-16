let arrow = document.querySelectorAll(".arrow");
for (var i = 0; i < arrow.length; i++) {
    arrow[i].addEventListener("click", (e) => {
        let arrowParent = e.target.parentElement.parentElement;
        arrowParent.classList.toggle("showMenu");
    });
}

let sidebar = document.querySelector(".Sidebar");
let sidebarBtn = document.querySelector(".bx-menu");
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

//localStorage.setItem("userName","张建亮")
let userName = localStorage.getItem("userName")


axios.defaults.baseURL = 'http://psskxj.natappfree.cc/yunchen'

window.addEventListener("load", () => {
    axios({
        url: '/HistoryServlet',
        method: 'post',
        data: {
            "name": userName
        }
    }).then((res) => {
        //console.log(res)
        res.data.forEach(element => {
            console.log(element)
            if (element.status == "已还书") {
                
                let message3 = `<div class="Message">
                <div class="top">
                    还书申请
                    <div class="text">
                        ${element.name}申请还书《${element.bookName}》,数量1,时间2023-3-11
                    </div>
                </div>
                <div class="result1">已同意</div>
            </div>`
                $('#content2').append(message3)
            }
            if (element.status == "借书中"||element.status == "申请还书") {
                
                let message3 = `<div class="Message">
                <div class="top">
                    借书申请
                    <div class="text">
                    ${element.name}申请借书《${element.bookName}》,数量1,时间2023-3-11
                    </div>
                </div>
                <div class="result1">已同意</div>
            </div>`
                $('#content2').append(message3)

            }
        })

    })
})

