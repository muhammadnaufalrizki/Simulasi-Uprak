let menu = [
    {
        id : 1,
        nama :'Coffe',
        price : 17000,
        description: 'Coffe + milk'
    },
    {
        id : 2,
        nama :'Teh Manis',
        price : 15000,
        description: 'Teh + Gula'
    },
    {
        id : 3,
        nama :'Soda',
        price : 20000,
        description: 'Soda + Es'
    },
];
// 
const menuSection = document.querySelector(".menu-section");
// 
let card =``;
// 
menu.map((data) => {
    card += innerCardMenu(data.name, data.id, data.desc, data.price);
    menuSection.innerHTML = card;
})
// 
function innerCardMenu(name, id, desc, price){
    

}


menu.map((data ) => {
    const pesan = document.getElementById(`pesan${data.id}`);
    pesan.addEventListener("click", function (event) {
        const jumlah = prompt("masukan jumlah pesanan");
        const total = data.price* jumlah;
        localStorage.setItem("total", total);
        localStorage.setItem("nama", data.name);
        localStorage.setItem("pesanan", data.desc);
        window.location.href = "order.html"
    })
})