function findPath(startIndex, endIndex, gridSize) {
    const directions = [
        [-1, 0], [1, 0], [0, -1], [0, 1]
    ];
    let queue = [[startIndex, []]];
    let visited = new Set();
    visited.add(startIndex);

    while (queue.length > 0) {
        let [current, path] = queue.shift();
        if (current === endIndex) {
            return path.concat(current);
        }

        for (let [dx, dy] of directions) {
            let x = current % gridSize + dx;
            let y = Math.floor(current / gridSize) + dy;
            let neighborIndex = y * gridSize + x;

            if (x >= 0 && x < gridSize && y >= 0 && y < gridSize &&
                !visited.has(neighborIndex) &&
                (document.querySelector(`[data-index="${neighborIndex}"]`).classList.contains('black') || neighborIndex === endIndex)) {
                visited.add(neighborIndex);
                queue.push([neighborIndex, path.concat(current)]);
            }
        }
    }
    return []; // Путь не найден
}
