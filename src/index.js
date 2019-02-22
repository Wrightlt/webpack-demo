import {cube} from './math.js'
if (process.env.NODE_ENV === 'production') {
  console.log('Looks like we are in production mode!')
}
if (process.env.NODE_ENV === 'development') {
  console.log('Looks like we are in development mode!')
}

function component() {
    var element = document.createElement('pre');

    element.innerHTML = [
        'Hello webpack!',
        '5 cubed id equal to ' + cube(5)
    ].join('\n\n')

    return element;
}

var element = component()
document.body.appendChild(element)