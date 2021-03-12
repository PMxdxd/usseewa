let count = 0;
// document.getElementById("ussee1").load();
const ussee = () => {
    if (count == 0) {
        call("ussee1");
    }
    if (count == 1) {
        call("ussee2");
    }
    if (count == 2) {
        call("ussee3");
        count = 0;
    }
    count++;
}

const kamone = () => {
    call("kamone-");
}

const call = id => {
    document.getElementById(id).load();
    document.getElementById(id).play();
}