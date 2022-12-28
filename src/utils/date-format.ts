import dayjs from "dayjs"
import utc from "dayjs/plugin/utc"
dayjs.extend(utc)
const DATE_TIME_FORMAT = "YYYY-MM-DD HH:mm:ss"

// utc转换
export function formatUtcString(
  utcString: string,
  format: string = DATE_TIME_FORMAT
) {
  return dayjs.utc(utcString).format(format)
}
// 时间戳转化
export function formatTimestamp(
  timestamp: number,
  format: string = DATE_TIME_FORMAT
) {
  return ""
}

// 获取当前时间段
export function getNowTimeFrameByUnix() {
  let timeFrame
  const nowHour = parseInt(dayjs.unix(Date.now() / 1000).format("HH"))

  const nowTime = parseInt(
    dayjs.unix(Date.now() / 1000).format("YYYY-MM-DD HH:mm:ss")
  )

  if (nowHour > 0 && nowHour <= 6) {
    timeFrame = "凌晨好"
  } else if (nowHour > 6 && nowHour <= 12) {
    timeFrame = "上午好"
  } else if (nowHour > 12 && nowHour <= 18) {
    timeFrame = "下午好"
  } else {
    timeFrame = "晚上好"
  }

  return {
    timeFrame,
    nowTime
  }
}
