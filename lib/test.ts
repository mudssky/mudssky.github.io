import { getFileList } from './post'
// const getFileList = require('./post').getFileList
;(async function () {
  const filelist = await getFileList('../posts', /.md$/)
  console.log(filelist)
})()
// export {}
