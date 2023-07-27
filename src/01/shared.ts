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

export { N, S, W, E, toRight, toLeft }
