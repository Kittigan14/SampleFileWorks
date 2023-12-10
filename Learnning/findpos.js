const pos1 = ['n', 'e', 'n', 'E', 'e', 'n'];
const pos2 = ['n', 'e', 'e', 'N', 'e', 'n'];
const pos3 = ['n', 'e', 'W', 'w', 'w', 'w', 'n'];
const pos4 = ['n', 'e', 'n', 'e', 'e', 's'];
const pos5 = ['w', 'e', 'n', 'X', 'e', 's'];

findPos(pos1);
findPos(pos2);
findPos(pos3);
findPos(pos4);
findPos(pos5);

function findPos(pos) {
    const data = Array(41);
    let datamove = 31;
    data[31] = 'user';

    for (let i = 0; i < pos.length; i += true) {
        let position = pos[i].toUpperCase();
        if (position === 'N') {
            data.splice(datamove, 1);
            data[datamove -= 7] = 'user';

        } else if (position === 'E') {
            data.splice(datamove, 1);
            data[datamove += 1] = 'user';

        } else if (position === 'W') {
            data.splice(datamove, 1);
            data[datamove -= 1] = 'user';

        } else if (position === 'S') {
            data.splice(datamove, 1);
            data[datamove += 7] = 'user';
        }
    }

    if (pos.some(direction => ['A', 'B', 'C', 'D', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'O', 'P', 'Q', 'R', 'T', 'U', 'V', 'X', 'Y', 'Z'].includes(direction))) {
        console.log('GAME OVER!, YOU FOUL!!!');
    } else if (data[13] == 'user') {
        console.log('Last Position : TG1 , You WIN!');
    } else if (data[14] == 'user') {
        console.log('Last Position : TG2 , You WIN!');
    } else {
        console.log('Last Position : ' + datamove + ' You LOSE :(');
    }
}