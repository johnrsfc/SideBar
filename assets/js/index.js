const buttonToggle = document.querySelector('.header a');
const sidebar = document.querySelector('.sidebar');

buttonToggle.addEventListener('click', (e) => {
    e.preventDefault();
    let clickBack = sidebar.classList.toggle('toggled')

    if(clickBack === true) {
        document.querySelector('.user').style.display = 'flex';
        document.querySelector('.header img').style.display = 'block';
        document.querySelector('.header').style.justifyContent = 'space-between'
        document.querySelector('.logout').style.justifyContent = 'space-between'



        let arr = document.querySelectorAll('.noneText')
        arr.forEach((arr) => {
            arr.style.display = 'block';
        });
        
    }
    if(clickBack === false){
        document.querySelector('.user').style.display = 'none';
        document.querySelector('.header img').style.display = 'none';
        document.querySelector('.header').style.justifyContent = 'center'
        document.querySelector('.logout').style.justifyContent = 'center'


        let arr = document.querySelectorAll('.noneText')
        arr.forEach((arr) => {
            arr.style.display = 'none';
        });
    }
    
})