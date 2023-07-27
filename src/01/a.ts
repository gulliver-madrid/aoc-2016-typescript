import fs from 'fs';


function readLines(filePath: string): string[] {
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    return fileContent.split('\n');
}

const N = 'N'
const S = 'S'
const W = 'W'
const E = 'E'

const toRight = {
    N: E,
    E: S,
    S: W,
    W: N
}
const toLeft = {
    N: W,
    E: N,
    S: E,
    W: S
}

const solve = (line: string) => {
    let pos = [0, 0]
    let dir = N
    let commands = line.split(', ');
    for (const command of commands) {
        const letter = command[0]
        if (letter === 'R') {
            dir = toRight[dir]
        } else if (letter === 'L') {
            dir = toLeft[dir]
        } else {
            throw new Error(dir)
        }

        const stepsStr = command.substring(1) // Remove first character
        const steps = parseInt(stepsStr)

        let [x, y] = pos
        switch (dir) {
            case N:
                y -= steps
                break;
            case E:
                x += steps
                break;
            case S:
                y += steps
                break;
            case W:
                x -= steps
                break;
            default: {
                throw new Error(dir)
            }
        }
        pos = [x, y]
    }
    return Math.abs(pos[0]) + Math.abs(pos[1])
}

function main() {
    const lines = readLines('./data/01/input.txt');
    console.log(solve(lines[0]))
}

if (require.main === module) {
    main()
}

export { solve }
