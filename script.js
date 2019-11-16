console.log('hello');

window.onload = function () {

    let points = 0;

    let mole = document.createElement('div');
    mole.classList.add('mole');

    console.log(document.getElementById('game-board'))

    //I need get each space

    
    function randomMole(mole) {
        setInterval(() => {


            let space = document.getElementsByClassName('col')

            let randomPlace = Math.floor(Math.random() * space.length)
            space[randomPlace].append(mole)

        }, 1000)
    }

    randomMole(mole)










}// end window onload