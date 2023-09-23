function showmenu()
{
    var x = document.getElementById('myUL');
    if (x.style.display == 'none') {
        x.style.display = 'flex';
    } else {
        x.style.display = 'none';
    }
}