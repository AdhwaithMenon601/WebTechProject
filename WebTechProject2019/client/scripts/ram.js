document.addEventListener('click',addItem);

//Given function stores the value of name and socket type
function addItem(event) {
    var sock = 0;
    const obj = event.target;
    if (obj.tagName == 'I') {
        const img = obj.parentElement.parentElement.children[0];
        const card = obj.parentElement.parentElement.parentElement.children[1];
        const my_im = obj.parentElement.parentElement.parentElement.children[0];
        const sent_im = my_im.children[0].src;
        const nm = card.children[0].textContent;
        const proc = {
            Name : nm,
            Socket : sock
        };
        console.log(proc);
        var qrstring = "?type=RAM" + "?name=" + nm + "?sock=" + sock + "?img=" + sent_im;
        window.location.href = "mypc.html" + qrstring;
    }
}