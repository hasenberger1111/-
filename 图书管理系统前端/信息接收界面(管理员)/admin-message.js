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

// localStorage.setItem("key","value1");
// localStorage.setItem("key","value");
// var lastname = localStorage.getItem("key");
// console.log(lastname)
//localStorage.removeItem("key");

axios.defaults.baseURL = 'http://chpeva.natappfree.cc/yunchen'

//已审核
axios({
    url: '/ShowRecordServlet',
    method: 'get',
}).then((res) => {
    console.log(res)
    res.data.forEach(element => {
        if (element.status == "已还书") {
            //console.log(element)
            let message3 = `<div class="Message">
            <div class="top">
                还书申请
                <div class="text">
                    ${element.name}申请还书《${element.bookName}》,数量1,时间2023-3-11
                </div>
            </div>
            <div class="result1">已同意</div>
        </div>`
            $('#content1').append(message3)
        }
        if (element.status == "借书中") {
            //console.log(element)
            let message3 = `<div class="Message">
            <div class="top">
                借书申请
                <div class="text">
                ${element.name}申请借书《${element.bookName}》,数量1,时间2023-3-11
                </div>
            </div>
            <div class="result1">已同意</div>
        </div>`
            $('#content1').append(message3)

        }
    })

});

//待审核
axios({
    url: '/ShowRecordServlet',
    method: 'get',
}).then((res) => {
    //console.log(res)
    res.data.forEach(element => {
        if (element.status == "申请借阅") {
            let Message1 =
                `<div class="Message">
            <div class="top">
                借书申请
                <div class="text">
                <p class="name">${element.name}</p>申请借阅《<p class="bookName">${element.bookName}</p>》,数量${element.number}
                </div>
            </div>
            <button class="button1">同意</button>
            <button class="button2">拒绝</button>
        </div>`
            $('#content2').append(Message1)
        }
        if (element.status == "申请还书") {
            let Message2 =
                `<div class="Message">
            <div class="top">
                还书申请
                <div class="text">
                <p class="name"> ${element.name}</p>申请还《<p class="bookName">${element.bookName}</p>》,数量${element.number},${element.borrowTime}
                </div>
            </div>
            <button class="button1">同意</button>
            <button class="button2">拒绝</button>
        </div>`
            $('#content2').append(Message2)
        }
    })

});

$('#content2').delegate('.button1', 'click', function (e) {
    //console.log(e.target.parentNode.children[0].children[0].children[1].innerText)
    //$(e.target.parentNode).css({
     //   'display': 'none',
    //})
    $(e.target.parentNode).remove();
console.log(e.target.parentNode.children[0].children[0].children[0].innerText)
console.log(e.target.parentNode.children[0].children[0].children[1].innerText)
    axios({
        url: '/AgreeBorrowServlet',
        method: 'post',
        data: {
            "name": e.target.parentNode.children[0].children[0].children[0].innerText,
            "bookName": e.target.parentNode.children[0].children[0].children[1].innerText,
            // name: "张建亮",
            //bookName:"独步逍遥" 
        }
    }).then((res) => {

        console.log(res)

    })
    axios({
        url: '/AgreeReturnServlet',
        method: 'post',
        data: {
            // "name": "e.target.parentNode.children[0].children[0].children[0].innerText",
            // "bookName": "e.target.parentNode.children[0].children[0].children[1].innerText",
            name: "张建亮",
            bookName: "独步逍遥"
        }
    }).then((res) => {

        console.log(res)

    })
})

$('.NavLinks1').click(function () {
    $('#content1').empty();
    axios({
        url: '/ShowRecordServlet',
        method: 'get',
    }).then((res) => {
        //console.log(res)
        res.data.forEach(element => {
            if (element.status == "已还书") {
                //console.log(element)
                let message3 = `<div class="Message">
                <div class="top">
                    还书申请
                    <div class="text">
                        ${element.name}申请还书《${element.bookName}》,数量1,时间2023-3-11
                    </div>
                </div>
                <div class="result1">已同意</div>
            </div>`
                $('#content1').append(message3)
            }
            if (element.status == "借书中") {
                //console.log(element)
                let message3 = `<div class="Message">
                <div class="top">
                    借书申请
                    <div class="text">
                    ${element.name}申请借书《${element.bookName}》,数量1,时间2023-3-11
                    </div>
                </div>
                <div class="result1">已同意</div>
            </div>`
                $('#content1').append(message3)

            }
        })

    });
    $('#content1').removeClass('hide');
    $('#content2').addClass('hide');

})
$('.NavLinks2').click(function () {
    $('#content2').empty();
    $('#content1').addClass('hide');
    axios({
        url: '/ShowRecordServlet',
        method: 'get',
    }).then((res) => {
        //console.log(res)
        res.data.forEach(element => {
            if (element.status == "申请借阅") {
                let Message1 =
                    `<div class="Message">
            <div class="top">
                借书申请
                <div class="text">
                <p class="name">${element.name}</p>申请借阅《<p class="bookName">${element.bookName}</p>》,数量${element.number}
                </div>
            </div>
            <button class="button1">同意</button>
            <button class="button2">拒绝</button>
        </div>`
                $('#content2').append(Message1)
            }
            if (element.status == "申请还书") {
                let Message2 =
                    `<div class="Message">
            <div class="top">
                还书申请
                <div class="text">
                <p class="name"> ${element.name}</p>申请还《<p class="bookName">${element.bookName}</p>》,数量${element.number},${element.borrowTime}
                </div>
            </div>
            <button class="button1">同意</button>
            <button class="button2">拒绝</button>
        </div>`
                $('#content2').append(Message2)
            }
        })

    });
    $('#content2').removeClass('hide');

})

