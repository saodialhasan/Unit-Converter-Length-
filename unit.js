let meter = document.getElementById('meter');
let cm = document.getElementById('cm');
let foot = document.getElementById('foot');
let mile = document.getElementById('mile');
let inch = document.getElementById('inch');
let km = document.getElementById('km');

alert('Please input Meter value.')


meter.addEventListener('input', function(){
    let a = this.value;
    let b = a*100;
    cm.value = b;
}); 
// m to Foot
meter.addEventListener('input', function(){
    let meter = this.value;
    let c = meter* 3.28084;
    foot.value = c;
} );
// m to mile
meter.addEventListener('input', function(){
    let meter = this.value;
    let d = meter * 0.000621371;
    mile.value = d;
});
// m to inch
meter.addEventListener('input', function(){
    let meter = this.value;
    let e = meter * 39.97;
    inch.value = e;
});
//  m to km
meter.addEventListener('input', function(){
    let meter = this.value;
    let f = meter* 0.001;
    km.value = f;
});

// << End>>


