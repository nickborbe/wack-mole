console.log('hello');

window.onload = function () {

    let mole = document.createElement('div');
    mole.classList.add('mole');

    console.log(document.getElementById('game-board'))

    //I need get each space

    function randomMole(mole) {
        let space = document.getElementsByClassName('col')

        let randomPlace = Math.floor(Math.random() * space.length)
        space[randomPlace].append(mole)

    }

    randomMole(mole)







}// end window onload