let form = document.querySelector('form');
form.addEventListener('submit',(frm)=>{
    frm.preventDefault();
    addData();
});


ipfield = document.querySelectorAll('#ipfield');
let ia = [ ipfield[0],ipfield[1], ipfield[2] ];
let cta = parseInt(ipfield[3].value);
let se = parseInt(ipfield[4].value);

    document.addEventListener(('click','keypress'),(event)=>{
        ia.forEach(inp => {
    var num1 = parseInt(inp.value);
if(num1>20 || num1 < 0){
        inp.value= "";
        alert("Marks Entry Criteria:\nFor IAs: Min - 0  Max - 20\nFor CTA: Min - 0  Max - 10\nFor Sem-End: Min - 0  Max - 100\n\nIA marks cannot me more than 20 or less than 0");
    }
});

if(ipfield[3].value > 10 || ipfield[3].value < 0){
    ipfield[3].value = "";
    alert("Marks Entry Criteria:\nFor IAs: Min - 0  Max - 20\nFor CTA: Min - 0  Max - 10\nFor Sem-End: Min - 0  Max - 100\n\nCTA cannot be given more than 10 or less than 0");
}
if(ipfield[4].value > 100 || ipfield[4].value < 0){
    ipfield[4].value = "";
    alert("Marks Entry Criteria:\nFor IAs: Min - 0  Max - 20\nFor CTA: Min - 0  Max - 10\nFor Sem-End: Min - 0  Max - 100\n\nSem-End marks should be in between range of 0 - 100");
}
});



function addData(){
    let back = document.querySelector('.ba');
    back.style.visibility = "visible";
    let table = document.querySelector('.tab');
    table.style.visibility = "visible";
    let tr = document.querySelector('#elmts');
    let td1 = document.createElement('td');
    tr.insertAdjacentElement('beforeend',td1);
    td1.innerText=ipfield[0].value;
    let td2 = document.createElement('td');
    tr.insertAdjacentElement('beforeend',td2);
    td2.innerText=ipfield[1].value;
    let td3 = document.createElement('td');
    tr.insertAdjacentElement('beforeend',td3);
    td3.innerText=ipfield[2].value;
    let td4 = document.createElement('td');
    tr.insertAdjacentElement('beforeend',td4);
    td4.innerText=ipfield[3].value;
    let td5 = document.createElement('td');
    tr.insertAdjacentElement('beforeend',td5);
    td5.innerText=ipfield[4].value;
}
