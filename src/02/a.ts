import { readLines } from "../helpers";

const keypad = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
]
const solve = (s: string[]) => {
    let comb = ''
    let x = 1
    let y = 1
    for (const line of s) {
        if (!line) {
            break
        }
        for (const char of line) {
            switch (char) {
                case 'U':
                    y -= 1
                    break
                case 'D':
                    y += 1
                    break
                case 'R':
                    x += 1
                    break
                case 'L':
                    x -= 1
                    break
            }
            x = x < 0 ? 0 : x > 2 ? 2 : x
            y = y < 0 ? 0 : y > 2 ? 2 : y
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
