export function currentDateFormat(fmtStr: string): string {
  return dateFormat(new Date().getTime(), fmtStr)
}

// 参数是毫秒级的时间戳
export function dateFormat(timeStamp: number, fmtStr: string): string {
  const currentDate = new Date(timeStamp)
  const opt: any = {
    yyyy: currentDate.getFullYear(), // 年
    MM:
      currentDate.getMonth() + 1 < 10
        ? '0' + (currentDate.getMonth() + 1)
        : currentDate.getMonth() + 1, //
    dd:
      currentDate.getDate() < 10
        ? '0' + currentDate.getDate()
        : currentDate.getDate(), // 日
    hh:
      currentDate.getHours() < 10
        ? '0' + currentDate.getHours()
        : currentDate.getHours(), // 时
    mm:
      currentDate.getMinutes() < 10
        ? '0' + currentDate.getMinutes()
        : currentDate.getMinutes(), // 分
    ss:
      currentDate.getSeconds() < 10
        ? '0' + currentDate.getSeconds()
        : currentDate.getSeconds(), // 秒
    // 有其他格式化字符需求可以继续添加，
  }
  for (const key in opt) {
    const pattern = new RegExp(`${key}`, 'g')
    if (pattern.test(fmtStr)) {
      fmtStr = fmtStr.replace(pattern, opt[key] + '')
    }
  }
  //   console.log(opt)
  return fmtStr
}

// 计算一个时间戳(秒)，离当前时间戳的距离
export function TimestampDiff(lastTimestamp: number) {
  const currentTimestamp = Math.floor(new Date().getTime() / 1000)
  const diffSeconds = currentTimestamp - lastTimestamp
  // const second=1
  const minute = 60
  const hour = minute * 60
  const day = hour * 24
  const month = day * 30
  const year = month * 12

  let resStr = ''
  if (diffSeconds > year) {
    resStr = `${Math.floor(diffSeconds / year)}年前`
  } else if (diffSeconds > month) {
    resStr = `${Math.floor(diffSeconds / month)}月前`
  } else if (diffSeconds > day) {
    resStr = `${Math.floor(diffSeconds / day)}天前`
  } else if (diffSeconds > hour) {
    resStr = `${Math.floor(diffSeconds / hour)}小时前`
  } else if (diffSeconds > minute) {
    resStr = `${Math.floor(diffSeconds / minute)}分钟前`
  } else {
    resStr = `${Math.floor(diffSeconds)}秒前`
  }
  return resStr
}

export function getElementToPageTop(el: any): number {
  if (el.parentElement) {
    return getElementToPageTop(el.parentElement) + el.offsetTop
  }
  return el.offsetTop
}
