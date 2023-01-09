//menampung pilihan layer
const pGajah =document.getElementsByClassName('gajah')[0];
const pSemut =document.getElementsByClassName('semut')[0];
const pOrang =document.getElementsByClassName('orang')[0];
const compt =document.getElementsByClassName('img-komputer')[0];
//Ambil layar info
const info = document.getElementsByClassName('info')[0];
//Menampung Pilihan Komputer
function computer (){
    var comp=Math.random()
    
    if(comp<0.34){
        comp='Gajah'
    }else if(comp>0.34 && comp<0.68){
        comp='Orang'
    }else{
        comp='Semut'
    }
    //mengubah gambar pilihan komputer
    if (comp == 'Gajah'){
        compt.setAttribute("src", "./img/gajah.png");
    }else if(comp == 'Semut'){
        compt.setAttribute("src", "./img/semut.png");
    }else if(comp=='Orang'){
        compt.setAttribute("src", "./img/orang.png")
    }

    return comp
}
//memberikan event
pGajah.addEventListener('click', function(){
    var comp = computer()
    
    //Membuat Rules
    var hasil=''

    if (comp == 'Gajah'){
        hasil='Seri'
    }else if(comp == 'Semut'){
        hasil='Kalah';
    }else if(comp=='Orang'){
        hasil='Menang';
    }
    

    info.innerHTML=hasil
})

pOrang.addEventListener('click', function(){
    var comp = computer()
    //Membuat Rules
    var hasil=''

    if (comp =='Orang'){
        hasil='Seri'
    }else if(comp == 'Gajah'){
        hasil='Kalah';
    }else if(comp=='Semut'){
        hasil='Menang';
    }

    info.innerHTML=hasil
})

pSemut.addEventListener('click', function(){
    var comp = computer()
    //Membuat Rules
    var hasil=''

    if (comp == 'Semut'){
        hasil='Seri'
    }else if(comp == 'Orang'){
        hasil='Kalah';
    }else if(comp=='Gajah'){
        hasil='Menang';
    }
    console.log(hasil)
    info.innerHTML=hasil
})






