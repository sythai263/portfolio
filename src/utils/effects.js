const effects3 = ['fade-right', 'fade-down', 'fade-left']
const effects2 = ['fade-up', 'fade-down']


function getEffect3(index) {
    return effects3[index % 3];
}

function getEffect2(index) {
    return effects2[index % 2];
}
export { getEffect2, getEffect3 }