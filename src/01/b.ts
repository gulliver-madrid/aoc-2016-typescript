import assert from 'assert/strict'
import { readLines } from '../helpers';
import { toRight, toLeft, N, E, S, W } from './shared';

const solve = (line: string) => {
    let pos = [0, 0]
    let dir = N
    let commands = line.split(', ');
    const visited: string[] = []
    let found = false
    for (const command of commands) {
        const letter = command[0]
        if (letter === 'R') {
            dir = toRight[dir]
        } else if (letter === 'L') {
            dir = toLeft[dir]
        } else {
            throw new Error(dir.toString())
        }

        const stepsStr = command.substring(1) // Remove first character
        const steps = parseInt(stepsStr)

        let [x, y] = pos
        for (let i = 0; i < steps; i++) {
            switch (dir) {
                case N:
                    y -= 1
                    break;
                case E:
                    x += 1
                    break;
                case S:
                    y += 1
                    break;
                case W:
                    x -= 1
                    break;
                default: {
                    throw new Error(dir)
                }
            }

            pos = [x, y]
            const posStr = JSON.stringify(pos)
            if (visited.includes(posStr)) {
                found = true
                break
            }
            visited.push(posStr)
        }
        if (found) {
            break
        }
    }
    assert(found)
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
