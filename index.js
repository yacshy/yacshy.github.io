import minimist from 'minimist'
import {execSync} from 'child_process'

const successLog = (str) => `\x1b[42m${str} !!\x1b[0m`

(async () => {
    const argvs = minimist(process.argv.slice(2), {
        default: {
            m: 'modified some files',
        },
    })
    const gitCommitMessage = argvs['m']

    try {
        await execSync('quickref-cli build --i refs --o docs', {
            stdio: 'inherit',
        })


        const addStr = 'git add .'
        await execSync(addStr, {stdio: 'inherit'})
        console.log(successLog(addStr))

        const commitStr = `git commit -m "${gitCommitMessage}"`
        await execSync(commitStr, {stdio: 'inherit'})
        console.log(successLog(commitStr))

        const pushStr = 'git push'
        await execSync(pushStr, {stdio: 'inherit'})
        console.log(successLog(pushStr))
    } catch (err) {
        console.error(err)
        throw err
    }
})()
