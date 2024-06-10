import path from 'path'
import { fileURLToPath } from 'node:url';

const a = fileURLToPath(import.meta.url)
const p = path.resolve(a, '../../package.json')

console.log(
  '\x1b[42m',  'success', '\x1b[0m'
)