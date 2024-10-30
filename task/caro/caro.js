let boardSize = 20;
let board = [];
let currentPlayer = 'X'; 
let gameOver = false;

function initBoard() {
    let table = document.getElementById('caroBoard');
    table.innerHTML = ''; 
    for (let i = 0; i < boardSize; i++) {
        board[i] = [];
        let row = document.createElement('tr');
        for (let j = 0; j < boardSize; j++) {
            board[i][j] = ' ';
            let cell = document.createElement('td');
            cell.innerHTML = ' ';
            cell.addEventListener('click', function () {
                makeMove(i, j);
            });
            row.appendChild(cell);
        }
        table.appendChild(row);
    }
    document.getElementById('status').innerText = `Player ${currentPlayer}'s turn`;
}

function makeMove(x, y) {
    if (gameOver || board[x][y] !== ' ') {
        return; 
    }

    board[x][y] = currentPlayer;
    updateBoard();

    if (checkWin(x, y)) {
        document.getElementById('status').innerText = `Player ${currentPlayer} wins!`;
        gameOver = true;
        return;
    }

    currentPlayer = (currentPlayer === 'X') ? 'O' : 'X';
    document.getElementById('status').innerText = `Player ${currentPlayer}'s turn`;
}

function updateBoard() {
    let table = document.getElementById('caroBoard');
    for (let i = 0; i < boardSize; i++) {
        for (let j = 0; j < boardSize; j++) {
                table.rows[i].cells[j].innerHTML = board[i][j];
        }
    }
}

function checkWin(x, y) {
    return checkDirection(x, y, 1, 0) || 
           checkDirection(x, y, 0, 1) || 
           checkDirection(x, y, 1, 1) || 
           checkDirection(x, y, 1, -1);  
}

function checkDirection(x, y, dx, dy) {
    let count = 1;
    let winCell = [[x,y]];
    for (let step = 1; step < 5; step++) { 
        let nx = x + step * dx;
        let ny = y + step * dy;
        if (nx >= 0 && ny >= 0 && nx < boardSize && ny < boardSize && board[nx][ny] === currentPlayer) {
            count++;
            winCell.push([nx, ny]);
        } else {
            break;
        }
    }
    for (let step = 1; step < 5; step++) { 
        let nx = x - step * dx;
        let ny = y - step * dy;
        if (nx >= 0 && ny >= 0 && nx < boardSize && ny < boardSize && board[nx][ny] === currentPlayer) {
            count++;
            winCell.push([nx, ny]);
        } else {
            break;
        }
    }
    if (count >= 5) {
        highlightWin(winCell);
        return true;
    }
    return false;    
}

function highlightWin(cells) {
    let table = document.getElementById('caroBoard');
    cells.forEach(function([x,y])  {
        table.rows[x].cells[y].style.color = 'red';
    });
}

function resetGame() {
    currentPlayer = 'X';
    gameOver = false;
    initBoard();
}

initBoard();
