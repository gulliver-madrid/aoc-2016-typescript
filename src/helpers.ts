import fs from 'fs';

function readLines(filePath: string): string[] {
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    return fileContent.split('\n');
}

const clamp = (x: number, a: number, b: number) => Math.max(a, Math.min(x, b))

export { readLines, clamp }
