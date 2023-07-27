import fs from 'fs';


function readLines(filePath: string): string[] {
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    return fileContent.split('\n');
}

const N = 'N'
const S = 'S'
const W = 'W'
const E = 'E'

const solve = (line: string) => {
    let pos = [0, 0]
    let dir = N
    let commands = line.split(', ');
    for (const command of commands) {
        const letter = command[0]
        let new_dir: string
        if (letter === 'R') {
            switch (dir) {
                case N:
                    new_dir = E
                    break;
                case E:
                    new_dir = S
                    break;
                case S:
                    new_dir = W
                    break;
                case W:
                    new_dir = N
                    break;
                default: {
                    throw new Error(dir)
                }
            }
        } else if (letter === 'L') {
            switch (dir) {
                case N:
                    new_dir = W
                    break;
                case E:
                    new_dir = N
                    break;
                case S:
                    new_dir = E
                    break;
                case W:
                    new_dir = S
                    break;
                default: {
                    throw new Error(dir)
                }
            }
        } else {
            throw new Error(dir)
        }

        dir = new_dir

        const stepsStr = command.substring(1) // Remove first character
        const steps = parseInt(stepsStr)

        let new_pos: number[]
        const [x, y] = pos
        switch (dir) {
            case N:
                new_pos = [x, y - steps]
                break;
            case E:
                new_pos = [x + steps, y]
                break;
            case S:
                new_pos = [x, y + steps]
                break;
            case W:
                new_pos = [x - steps, y]
                break;
            default: {
                throw new Error(dir)
            }
        }
        pos = new_pos

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
