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
axios.defaults.baseURL = 'http://psskxj.natappfree.cc/yunchen'

let imgs = ['https://typora--image1.oss-cn-beijing.aliyuncs.com/d54b282a11f4b989840ff36033a4104ef440429c_raw.jpg','https://typora--image1.oss-cn-beijing.aliyuncs.com/91487C619B739FF89C8B0336DAD40710.png','https://typora--image1.oss-cn-beijing.aliyuncs.com/8C48D45BE9189855A8AA3F394DBD52F4.png','https://typora--image1.oss-cn-beijing.aliyuncs.com/F61C1AA54A6E522A4DE3C93FEC380E1F.png','https://typora--image1.oss-cn-beijing.aliyuncs.com/28A65192E84E930CC8A98EECDDBAF20F.png','https://typora--image1.oss-cn-beijing.aliyuncs.com/8AE2F0B9DDF7175FBCBD79B9DEBEF8E7.png','https://typora--image1.oss-cn-beijing.aliyuncs.com/A0CA5D8254BE48D39A43916491ED9FBC.png','https://typora--image1.oss-cn-beijing.aliyuncs.com/23A231048AEEC91BE4AFF75EB54AD89A.png','https://typora--image1.oss-cn-beijing.aliyuncs.com/1678960245164.jpg','https://typora--image1.oss-cn-beijing.aliyuncs.com/1678960245174.jpg','https://typora--image1.oss-cn-beijing.aliyuncs.com/1678960245110.jpg','https://typora--image1.oss-cn-beijing.aliyuncs.com/1678960245121.jpg','https://typora--image1.oss-cn-beijing.aliyuncs.com/1678960245132.jpg','https://typora--image1.oss-cn-beijing.aliyuncs.com/1678960245142.jpg','https://typora--image1.oss-cn-beijing.aliyuncs.com/1678960245153.jpg','https://typora--image1.oss-cn-beijing.aliyuncs.com/1678960245090.jpg','https://typora--image1.oss-cn-beijing.aliyuncs.com/1678960245100.jpg','https://typora--image1.oss-cn-beijing.aliyuncs.com/1678960245081.jpg','https://typora--image1.oss-cn-beijing.aliyuncs.com/1678960245075.jpg','https://typora--image1.oss-cn-beijing.aliyuncs.com/1678960245068.jpg']
var i = Math.floor(Math.random() * 20);


//localStorage.setItem("userName","张建亮")
let userName = localStorage.getItem("userName")
window.addEventListener("load", () => {
    axios({
        url: '/PersonServlet',
        method: 'post',
        data: {
            userName: userName,


        },

    }).then((res) => {
        res.data.forEach(res => {
            console.log(res)
            let message = `
            <img src=${imgs[i]}
            alt="" id="avatar"><div id="message">
        <div id="name">&nbsp ${res.userName}<br></div>
        <div id="id">ID:${res.userId}</div>
        <div id="grade">期数:${res.grade}</div>
        <div id="derection">方向:${res.direction}</div>
    </div>
`
            $('#PersonMessage').append(message)
        })
    })
})






window.addEventListener('load', () => {
    axios({
        method: 'POST',
        url: '/HistoryServlet',
        data: {
            "name": userName,
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

            //console.log(element)
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

        $('tr').delegate('.operation', 'click', (i) => {
            let bookName = i.target.parentNode.parentNode.children[0].innerText
            axios({
                method: 'POST',
                url: '/ReturnBookServlet',
                data: {
                    "name": userName,
                    "bookName": bookName
                },

            }).then((res) => {
                (i.target.parentNode.parentNode.children[3]).innerText = ('申请还书')
            })
        })
    })
})




