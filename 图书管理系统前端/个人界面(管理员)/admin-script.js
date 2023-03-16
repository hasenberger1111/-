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





axios.defaults.baseURL = 'http://frp-fly.top:53497/yunchen'


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
            let UserMessage = `<div class="AllUser"><div class="UserAvatar">
            <img src="https://typora--image1.oss-cn-beijing.aliyuncs.com/d54b282a11f4b989840ff36033a4104ef440429c_raw.jpg"
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
