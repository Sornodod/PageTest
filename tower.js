document.addEventListener('DOMContentLoaded', () => {
    const grid = document.getElementById('grid');
    window.isPlacingTower = false;

    document.getElementById('towerButton').addEventListener('click', () => {
        if (window.isDrawingRoad) {
            window.isDrawingRoad = false;
            document.getElementById('roadButton').textContent = 'ДОРОГА';
        }
        window.isPlacingTower = !window.isPlacingTower;
        document.getElementById('towerButton').textContent = window.isPlacingTower ? 'БАШНЯ (ВКЛ)' : 'БАШНЯ';
    });

    grid.addEventListener('click', (event) => {
        if (window.isPlacingTower && event.target.classList.contains('cell')) {
            const cell = event.target;
            if (!cell.classList.contains('black') && !cell.classList.contains('red') && !cell.classList.contains('green')) {
                cell.classList.add('blue');
                // Удаляем анимацию из башни
                removeTowerAnimation();
            }
        }
    });

    function removeTowerAnimation() {
        // Удаляем все элементы с классом path
        document.querySelectorAll('.path').forEach(el => el.remove());
    }
});
