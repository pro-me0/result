/* var one = document.getElementById('one');
var two = document.getElementById('two');
 */
let save = () => {
    let cont = document.getElementById('text').value;
    window.open("data:application/txt," + encodeURIComponent(cont), "_self");
}