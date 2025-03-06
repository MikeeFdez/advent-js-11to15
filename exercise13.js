/** @param {string} moves
 * @returns {true|[number, number]} Return true if robot returns or position
 */
function isRobotBack(moves) {
  // Code here
  let result = [0,0];
  const movements = {
    'U': [0,1],
    'D': [0,-1],
    'R': [1,0],
    'L': [-1,0]
  }
  const reverse = {
    'U': 'D',
    'D': 'U',
    'R': 'L',
    'L': 'R'
  }

  // Lo primero que hay que hacer es convertir el string a un array y transformar los caracteres a solo movimientos:
  let movesArr = moves.split("");
  let i = 0;
  while (i < movesArr.length) {
    if (movesArr[i] === '*') {
      movesArr = movesArr.slice(0, i).concat(movesArr[i + 1]).concat(movesArr.slice(i + 1))
    } else if (movesArr[i] === '!') {
        movesArr = movesArr.slice(0, i).concat(reverse[movesArr[i + 1]]).concat(movesArr.slice(i + 2));
    } else if (movesArr[i] === '?') {
        if (movesArr.slice(0, i).includes(movesArr[i + 1])) {
          movesArr = movesArr.slice(0, i).concat(movesArr.slice(i + 2));
        } else {
          movesArr = movesArr.slice(0, i).concat(movesArr.slice(i + 1));
        }
    } 
    i++;
  }

  // Una vez tenemos los movimientos transformados, simplemente tenemos que seguir el movimiento:
  for (let i = 0; i < movesArr.length; i++) {
    let newX = result[0] + movements[movesArr[i]][0];
    let newY = result[1] + movements[movesArr[i]][1];
    result = [newX,newY];
  }

  return (result[0] === 0 && result[1] === 0) ? true : result
}
