function temperature(){
    const c = document.getElementById('celsius').value;
    const f = (c * 9/5) + 32
    document.getElementById('fahrenheit').value = f
}
function weight(){
    const kg = document.getElementById('kilo').value;
    const pound = kg*2.2
    document.getElementById('pounds').value = pound;
}
function distance(){
    const kms = document.getElementById('km').value;
    const miles = kms*2.2
    document.getElementById('miles').value = miles;
}