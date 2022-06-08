import {buttonClick , copyClick} from './modules/buttonClick'

import './assets/css/style.css'


function click(evt){
    if(evt.target.id === 'button'){
        buttonClick();
    };
    if (evt.target.id === 'copy-button') {
        copyClick();
    };
}
const bts = document.getElementById('buttons');
bts.addEventListener('click', click);









  