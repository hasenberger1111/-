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
axios.defaults.baseURL = 'http://chpeva.natappfree.cc/yunchen'

window.addEventListener("load", () => {
    axios({
        url: '/PersonServlet',
    //url:'/AgreeReturnServlet',
        method: 'post',
        data: {
            //userName: "张建亮",
            name: "张建亮",
            bookName:"独步逍遥"
        },

    }).then((res) => {
        console.log(res)
    })
})






window.addEventListener('load', () => {
    axios({
        method: 'POST',
        url: '/HistoryServlet',
        data: {
            "name": "张建亮",
            "bookName": "独步逍遥"
            //  "name": "e.target.parentNode.children[0].children[0].children[0].innerText",
            // "bookName": "e.target.parentNode.children[0].children[0].children[1].innerText",
        },
        headers: { 'content-type': "application/json", }
    }).then((res) => {
        res.data.forEach(element => {
            if (element.status == "借书中") {
                var record = ` 
            <tr>
                    <td class="BookName">${element.bookName}</td>
                    <td class="quantity">${element.number}</td>
                    <td class="BorrowDate">${element.borrowTime}</td>
                    <td class="status">${element.status}</td>
                
                    <td class="operation">
                        <button>还书</button>
                    </td>
                </tr>`
                $('.record').append(record)
            }
            if (element.status == "已还书") {
                var record = ` 
            <tr>
                    <td class="BookName">${element.bookName}</td>
                    <td class="quantity">${element.number}</td>
                    <td class="BorrowDate">${element.borrowTime}</td>
                    <td class="status">${element.status}</td>
                    <td class="operation">
                        <button></button>
                    </td>
                </tr>`
                $('.record').append(record)
            }
            if (element.status == "申请借阅") {
                var record = ` 
            <tr>
                    <td class="BookName">${element.bookName}</td>
                    <td class="quantity">${element.number}</td>
                    <td class="BorrowDate"></td>
                    <td class="status">${element.status}</td>
                    <td class="operation">
                        <button></button>
                    </td>
                </tr>`
                $('.record').append(record)
            }
            if (element.status == "申请还书") {
                var record = ` 
            <tr>
                    <td class="BookName">${element.bookName}</td>
                    <td class="quantity">${element.number}</td>
                    <td class="BorrowDate">${element.borrowTime}</td>
                    <td class="status">${element.status}</td>
                    <td class="operation">
                        <button></button>
                    </td>
                </tr>`
                $('.record').append(record)
            }

            console.log(element)
        });
        //console.log(res)
        $('tr').delegate('.operation', 'click', (i) => {
            //console.log(i.target.parentNode.parentNode.children[0].innerText)
            
            let bookName = i.target.parentNode.parentNode.children[0].innerText
            console.log(bookName)
            axios({
                method: 'POST',
                url: '/ReturnBookServlet',
                data: {
                    "name": "张建亮",
                    "bookName":bookName
                    //  "name": "e.target.parentNode.children[0].children[0].children[0].innerText",
                    // "bookName": "e.target.parentNode.children[0].children[0].children[1].innerText",
                },
                headers: { 'content-type': "application/json", }
            }).then((res) => {
                console.log(res)
            })


        })
    })
})




