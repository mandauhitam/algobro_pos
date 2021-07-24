let fruit = 'Rambutan';

counter = 0;

for (i = 0; i < 20; i++) {
    switch (fruit) {
        case 'Papaya':
            console.log('Papaya Alive');
            break;
        case 'Rambutan':
            console.log('Rambutan Kill!');
            break;
        case 'Duren':
            console.log('Durenan Alive');
            break;
    }
    let fruit = 'Duren';
}
