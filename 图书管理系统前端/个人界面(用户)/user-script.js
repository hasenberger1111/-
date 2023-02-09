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
axios.defaults.baseURL = 'http://jp-tyo-ntt-1.natfrp.cloud:55102/yunchenbooksmanagementsystem_war'

window.addEventListener('load', () => {
    axios({
        method: 'POST',
        url: '/HistoryServlet',
        data: {
            "name": "cui"
        },
        headers: { 'content-type': "application/json", }
    }).then((res) => {
        res.data.forEach(element => {
            let record = ` <tr>
            <td class="BookName">${element.bookName}</td>
            <td class="quantity">${element.number}</td>
            <td class="BorrowDate">${element.borrowTime}</td>
            <td class="status">${element.status}</td>
        </tr>`
            $('.record').append(record)
            console.log(element)
            
        });


        console.log(res)

    })
})

