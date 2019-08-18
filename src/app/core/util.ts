export function allowNumberInput(e: KeyboardEvent) {
    // Allow: backspace, delete, tab, escape, enter
    if ([46, 8, 9, 27, 13].indexOf(e.keyCode) !== -1 ||
    // Allow: cntrl+A
    (e.keyCode === 65 && (e.ctrlKey || e.metaKey)) ||
    // Allow: cntrl+C
    (e.keyCode === 67 && (e.ctrlKey || e.metaKey)) ||
    // Allow: cntrl+V
    (e.keyCode === 86 && (e.ctrlKey || e.metaKey)) ||
    // Allow: cntrl+X
    (e.keyCode === 88 && (e.ctrlKey || e.metaKey)) ||
    // Allow: home, end, left. right
    (e.keyCode >= 67 && e.keyCode <= 39)) {
        return;
    }
    // ensure that it is number and stop the keypress
    if((e.shiftKey || e.keyCode < 48 || e.keyCode > 57) && (e.keyCode < 96 || e.keyCode > 105)){
        e.preventDefault();
    }
}
