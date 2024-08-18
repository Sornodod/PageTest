document.addEventListener('DOMContentLoaded', () => {
    let isDrawingRoad = false;

    // Функция для переключения режима рисования дороги
    function toggleRoadDrawing() {
        if (window.isPlacingTower) return; // Если башня установлена, не разрешаем дорогу
        isDrawingRoad = !isDrawingRoad;
        document.getElementById('roadButton').textContent = isDrawingRoad ? 'ДОРОГА (ВКЛ)' : 'ДОРОГА';
    }

    // Функция для обработки кликов на ячейки
    function handleCellClick(event) {
        const cell = event.target;
        if (isDrawingRoad && !cell.classList.contains('blue') && !cell.classList.contains('green')) {
            cell.classList.toggle('black');
        }
    }

    // Добавление обработчика кликов на ячейки
    document.getElementById('grid').addEventListener('click', handleCellClick);

    // Установка обработчика на кнопку "ДОРОГА"
    document.getElementById('roadButton').addEventListener('click', toggleRoadDrawing);
});
