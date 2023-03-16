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
    $('.NavLinks span').toggleClass('hide');
});

$('.NavLinks1').click(function () {
    $('#content2').removeClass('hide');
    $('#content1').css({
        display: 'none'
    })
    $('#content2').css({
        display: ''
    })


})
$('.NavLinks2').click(function () {
    $('#content2').css({
        display: 'none'
    })
    $('#content1').css({
        display: 'flex'
    })
})





axios.defaults.baseURL = 'http://psskxj.natappfree.cc/yunchen'
let imgs = ['https://typora--image1.oss-cn-beijing.aliyuncs.com/d54b282a11f4b989840ff36033a4104ef440429c_raw.jpg','https://typora--image1.oss-cn-beijing.aliyuncs.com/91487C619B739FF89C8B0336DAD40710.png','https://typora--image1.oss-cn-beijing.aliyuncs.com/8C48D45BE9189855A8AA3F394DBD52F4.png','https://typora--image1.oss-cn-beijing.aliyuncs.com/F61C1AA54A6E522A4DE3C93FEC380E1F.png','https://typora--image1.oss-cn-beijing.aliyuncs.com/28A65192E84E930CC8A98EECDDBAF20F.png','https://typora--image1.oss-cn-beijing.aliyuncs.com/8AE2F0B9DDF7175FBCBD79B9DEBEF8E7.png','https://typora--image1.oss-cn-beijing.aliyuncs.com/A0CA5D8254BE48D39A43916491ED9FBC.png','https://typora--image1.oss-cn-beijing.aliyuncs.com/23A231048AEEC91BE4AFF75EB54AD89A.png','https://typora--image1.oss-cn-beijing.aliyuncs.com/1678960245164.jpg','https://typora--image1.oss-cn-beijing.aliyuncs.com/1678960245174.jpg','https://typora--image1.oss-cn-beijing.aliyuncs.com/1678960245110.jpg','https://typora--image1.oss-cn-beijing.aliyuncs.com/1678960245121.jpg','https://typora--image1.oss-cn-beijing.aliyuncs.com/1678960245132.jpg','https://typora--image1.oss-cn-beijing.aliyuncs.com/1678960245142.jpg','https://typora--image1.oss-cn-beijing.aliyuncs.com/1678960245153.jpg','https://typora--image1.oss-cn-beijing.aliyuncs.com/1678960245090.jpg','https://typora--image1.oss-cn-beijing.aliyuncs.com/1678960245100.jpg','https://typora--image1.oss-cn-beijing.aliyuncs.com/1678960245081.jpg','https://typora--image1.oss-cn-beijing.aliyuncs.com/1678960245075.jpg','https://typora--image1.oss-cn-beijing.aliyuncs.com/1678960245068.jpg']



window.addEventListener('load', () => {
    axios({
        method: 'GET',
        url: '/FindAllStudentServlet'
    }).then((res) => {
        console.log(res)
        res.data.forEach(element => {
            let reg = /\D/g;
            element.userId = element.userId.replace(reg,"");
            //console.log(element.userId);
            var i = Math.floor(Math.random() * 20);
            let UserMessage = `<div class="AllUser"><div class="UserAvatar">
            <img src=${imgs[i]}
                alt="" class="UserPhoto">
        </div>
        <div class="UserMessage">
            <h2>${element.userName}</h2>
            <p>${element.grade}&nbsp&nbsp${element.direction} <br> ID:${element.userId}</p>
        </div>
        </div>`
            $('#content1').append(UserMessage)


        });

    })
})
window.addEventListener('load', () => {
    axios({
        method: 'GET',
        url: '/ShowRecordServlet'
    }).then((res) => {
       // console.log(res)
        res.data.forEach(element => {
            if (element.status == "申请借阅") {
                let record = `<tr>
            <td class="UserName">${element.name}</td>
            <td class="BookName">${element.bookName}</td>
            <td class="quantity">${element.number}</td>
            <td class="BorrowDate"></td>
            <td class="state">${element.status}</td>
        </tr>`
            $('#content2 table').append(record)}
            else{
            let record = `<tr>
            <td class="UserName">${element.name}</td>
            <td class="BookName">${element.bookName}</td>
            <td class="quantity">${element.number}</td>
            <td class="BorrowDate">${element.borrowTime}</td>
            <td class="state">${element.status}</td>
        </tr>`
            $('#content2 table').append(record)}
            console.log(element);
        });

    })
})
$('.state').delegate('button', 'click',(e)=> {
    axios({
        method: 'post',
        url: '',
        data: {
            "name": "",
            "bookName":"",
            
        }
    })
})
