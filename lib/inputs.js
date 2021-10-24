import fs from 'fs';
import { result } from './result';
const text = fs.readFileSync('./input.txt', 'utf-8');
const inputs = text.split('\n');

result(inputs);

export { inputs };
