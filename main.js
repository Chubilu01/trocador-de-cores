background = ['#292929', '#F2F2F2', '#C7C7C7'];
text = ['Background:  #292929', 'Background:  #F2F2F2', 'Background:  #C7C7C7'];
clickNumber = 0;

const change = () => {
    document.body.style.backgroundColor = background[(clickNumber)%3];
    document.querySelector('.hex-code').innerHTML = text[(clickNumber)%3];
    clickNumber++;
}

change();