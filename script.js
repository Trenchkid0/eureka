let BtnSubmit = document.getElementById('btnSubmit');

let carts = []

function submitHandler(){
    let id;
    if(carts.length === 0){
        id = 1;
    }else{
        id = carts[carts.length-1].id+1;
    }
    let namaValue = document.getElementById('nama').value;
    let barangValue=document.getElementById('barang').value;
    let hargaValue=document.getElementById('harga').value;
    document.getElementById('namaCart').innerHTML += namaValue
    let tempObj = {
        id,
        nama:barangValue,
        harga:+hargaValue
    }
    carts.push(tempObj)
    getCart();
    // console.log(carts)
}

function getCart(){
    let tBody = document.getElementById('tBody');
    tBody.innerHTML = '';
    carts.forEach(cart =>{
        tBody.innerHTML += `<tr>
            <td>${cart.id}</td>
            <td>${cart.nama}</td>
            <td>${cart.harga}</td>
        </tr>`
    })

}

let BtnPrint = document.getElementById('btnPrint')

function printHandler(){
    // console.log("cetak")
    document.querySelector('.form_box').style.display = 'none';
    BtnPrint.style.display = 'none';
    window.print()
}

BtnSubmit.addEventListener('click',submitHandler)
BtnPrint.addEventListener('click',printHandler)
