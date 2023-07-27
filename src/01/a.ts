import fs from 'fs';


function readLines(filePath: string): string[] {
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    return fileContent.split('\n');
}

const lines = readLines( './data/01/input.txt');

console.log(lines[0]);
