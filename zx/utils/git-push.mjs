import { addLog } from "./data.mjs"
import { baseUrl } from "./index.mjs"

export const gitPush = async() => {
    const { name } = global.project
    const path = baseUrl + name
    await gitPushBy(name, path)
}

export const gitPushBy = async(name, path) => {
    try {
        await addLog(name, `git push start`, global.version);
        const message=`build：前端${name} -- commit-version:${global.version}`
        // const message=`build：前端app、qrocde、wechat、park、console(child)commit-version:${global.version}`
        // const message ='test'
        const result = await $`cd ${path}; git add . ; sleep 2; git commit -m ${message}; git push origin;`
        if(result && result.exitCode === 0 ) {
            await addLog(name, `git push end success`, global.version);
        } else {
            await addLog(name, `git push error: ${result.stderr}`, global.version); 
        }
    } catch (error){
        console.log(error, 'error')
        if(error.exitCode === 1 & error.stdout.includes('nothing to commit, working tree clean')) {
            await addLog(name, `git push nothing to commit`, global.version);
        }
        await addLog(name, `git push error`, global.version);
    }
}

