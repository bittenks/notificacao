const btn = document.getElementById("btn");
const container = document.getElementById("container");

btn.addEventListener("click", () => {
    createNotification();
    createNotification1()
});

function createNotification1() {
    const notif = document.createElement("div");
    notif.classList.add("toast1");

    notif.innerText =    "OI! EU SOU O SR. MEESEEKS! OLHEM PRA MIM! ";
    notif.innerHTML = "<img src='https://i.imgur.com/cmNlHdA.gif'>" 
    
    container.appendChild(notif);

    setTimeout(() => {
        notif.remove();
    }, 3000);
}

function createNotification() {
    const notif = document.createElement("div");
    notif.classList.add("toast");

    notif.innerText = "OI! EU SOU O SR. MEESEEKS! OLHEM PRA MIM! ";
    

    container.appendChild(notif);

    setTimeout(() => {
        notif.remove();
    }, 3000);
}