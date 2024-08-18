document.addEventListener('DOMContentLoaded', () => {
    const gridSize = 15;
    const grid = document.getElementById('grid');
    let startCell, endCell;

    // Создаем сетку
    for (let i = 0; i < gridSize * gridSize; i++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        cell.dataset.index = i;
        grid.appendChild(cell);
    }

    // Рандомно устанавливаем стартовую и конечную точки
    const randomStart = Math.floor(Math.random() * gridSize * gridSize);
    let randomEnd;
    do {
        randomEnd = Math.floor(Math.random() * gridSize * gridSize);
    } while (randomEnd === randomStart);

    document.querySelector(`[data-index="${randomStart}"]`).classList.add('red');
    document.querySelector(`[data-index="${randomEnd}"]`).classList.add('green');
    startCell = randomStart;
    endCell = randomEnd;

    // Обработчик кнопки "СТАРТ"
    document.getElementById('startButton').addEventListener('click', () => {
        // Удаляем все белые полосы
        document.querySelectorAll('.path').forEach(el => el.remove());
        // Находим путь от старта до конца
        const path = findPath(startCell, endCell, gridSize);
        if (path.length === 0) {
            alert('Путь не найден!');
        } else {
            animatePath(path);
        }
    });

    function animatePath(path) {
        let i = 0;
        const interval = setInterval(() => {
            if (i > 0) {
                const prevCell = document.querySelector(`[data-index="${path[i - 1]}"]`);
                if (prevCell.querySelector('.path')) {
                    prevCell.removeChild(prevCell.querySelector('.path'));
                }
            }

            if (i >= path.length) {
                clearInterval(interval);
                return;
            }

            const currentCell = document.querySelector(`[data-index="${path[i]}"]`);
            const circle = document.createElement('div');
            circle.classList.add('path');
            currentCell.appendChild(circle);

            i++;
        }, 200);
    }
});
