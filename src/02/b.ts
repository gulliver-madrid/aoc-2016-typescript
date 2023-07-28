import { clamp, readLines } from "../helpers";

const keypad = `
    0 0 1 0 0
    0 2 3 4 0
    5 6 7 8 9
    0 A B C 0
    0 0 D 0 0
`.trim().split('\n').map(line => line.trim().split(' '))

const solve = (s: string[]) => {
    let comb = ''
    let x = 0
    let y = 2
    for (const line of s) {
        if (!line) {
            break
        }
        for (const char of line) {
            let new_x = x
            let new_y = y
            switch (char) {
                case 'U':
                    new_y -= 1
                    break
                case 'D':
                    new_y += 1
                    break
                case 'R':
                    new_x += 1
                    break
                case 'L':
                    new_x -= 1
                    break
            }
            new_x = clamp(new_x, 0, 4)
            new_y = clamp(new_y, 0, 4)
            if (keypad[new_y][new_x] !== '0') {
                x = new_x
                y = new_y
            }
        }
        comb += (keypad[y][x])
    }
    return comb
}

function main() {
    const lines = readLines('./data/02/input.txt');
    console.log(solve(lines))
}

if (require.main === module) {
    main()
}

export { solve }
