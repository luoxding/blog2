export const isMac = () => {
    // win32 代表window平台
    // darwin 代表mac平台
    //
    return process.platform === "darwin" ? true : false;
}

/**
 * dvs项目基础路径
 */
export const baseUrl = isMac() ? '/Users/tanghongling/Desktop/aehyok/github/' : '/e/work/git/dvs-2.x/'