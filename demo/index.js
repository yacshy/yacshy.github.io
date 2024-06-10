import path from 'path'
import { fileURLToPath } from 'node:url';

const a = fileURLToPath(import.meta.url)
const p = path.resolve(a, '../../package.json')

console.log(
    import.meta.url,'\n',a,'\n',p
)