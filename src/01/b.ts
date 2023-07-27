import assert from 'assert/strict'
import { readLines } from '../helpers';


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

const solve = (s: string) => {
    let pos = [0, 0]
    let dir = N
    let commands = s.split(', ');
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

        const numStr = command.substring(1) // Remove first character
        const num = parseInt(numStr)

        let [x, y] = pos
        for (let i = 0; i < num; i++) {
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
            s = JSON.stringify(pos)
            if (visited.includes(s)) {
                found = true
                break
            }
            visited.push(s)
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
