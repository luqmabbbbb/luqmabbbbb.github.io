function getpilihanComputer (){
    
    const comp = Math.round(Math.random()*9)

    if (comp <= 3){
             return 'gajah'
        }else if (comp <= 6){
             return 'orang'
        }else{
             return 'semut'
        }
}

function getHasil(comp, user){
    
    if(user === 'gajah' && comp == 'gajah'){
        return 'seri'
    }
    else if(user === 'gajah' && comp == 'semut'){
        return 'kalah'
    }
    
    else if(user === 'gajah' && comp == 'orang'){
        return 'menang'
    }
    
    else if(user === 'orang' && comp == 'orang'){
        return 'seri'
    }
    
    else if(user === 'orang' && comp == 'gajah'){
        return 'kalah'
    }
    
    else if(user === 'orang' && comp == 'semut'){
        return 'menang'
    }
    
    else if(user === 'semut' && comp == 'semut'){
        return 'seri'
    }
    
    else if(user === 'semut' && comp == 'orang'){
        return 'kalah'
    }
    
    else if(user === 'semut' && comp == 'gajah'){
        return 'menang'
    }
    else{alert('karakter yang anda masukkan salah')}
}


const pGajah = document.querySelector('.gajah')
pGajah.addEventListener('click', function(){
    const pilihanComputer = getpilihanComputer()
    const pilihanPlayer =  pGajah.className
    const hasil = getHasil(pilihanComputer, pilihanPlayer)

    const pComp =  document.querySelector('.img-komputer')
    pComp.setAttribute('src', 'asset/'+ pilihanComputer +'.png')

    const info = document.querySelector('.info')
    info.innerHTML = hasil

})

const pOrang = document.querySelector('.orang')
pOrang.addEventListener('click', function(){
    const pilihanComputer = getpilihanComputer()
    const pilihanPlayer =  pOrang.className
    const hasil = getHasil(pilihanComputer, pilihanPlayer)

    const pComp =  document.querySelector('.img-komputer')
    pComp.setAttribute('src', 'asset/'+ pilihanComputer +'.png')

    const info = document.querySelector('.info')
    info.innerHTML = hasil

})

const pSemut = document.querySelector('.semut')
pSemut.addEventListener('click', function(){
    const pilihanComputer = getpilihanComputer()
    const pilihanPlayer =  pSemut.className
    const hasil = getHasil(pilihanComputer, pilihanPlayer)

    const pComp =  document.querySelector('.img-komputer')
    pComp.setAttribute('src', 'asset/'+ pilihanComputer +'.png')

    const info = document.querySelector('.info')
    info.innerHTML = hasil

})

