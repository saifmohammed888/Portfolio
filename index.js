var list = document.getElementById("navs");
var items = list.getElementsByTagName("li");
var collapseBtn = document.getElementById("Colbtn");

collapseBtn.addEventListener("click", (e) => {
    document.getElementById("collapsibleNavbar").style.display = "block";
})

for (let x of items) {
    let a = x.getElementsByTagName("a");
    a[0].addEventListener("click", (e) => {
        console.log("hide")
        document.getElementById("collapsibleNavbar").style.display = "none";
    })
}

