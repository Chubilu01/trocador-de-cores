const background = ['#292929', '#F2F2F2', '#C7C7C7'];
const text = ['Background:  #292929', 'Background:  #F2F2F2', 'Background:  #C7C7C7'];
let clickNumber = 0;

const mouseClick = () => {
    document.body.style.backgroundColor = background[clickNumber];
    document.querySelector('.hex-code').innerHTML = text[clickNumber];
    clickNumber++;
    if (clickNumber == 3) {
        clickNumber = 0;
    }
}

mouseClick();