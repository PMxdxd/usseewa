let count = 0;
const ussee = () => {
    count++;
    if (count == 1) {
        call("ussee1");
    }
    if (count == 2) {
        call("ussee2");
    }
    if (count == 3) {
        call("ussee3");
        count = 0;
    }
}

const kamone = () => {
    call("kamone-");
}

const call = id => {
    document.getElementById(id).load();
    document.getElementById(id).play();
}