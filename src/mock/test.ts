import axios from "axios"
const baseUrl =
  "https://www.fastmock.site/mock/4a604eed76b0cdf462aca9bd5be40e93/test"
export function testMock() {
  return new Promise((resolve, reject) => {
    axios
      .get(`${baseUrl}/test`)
      .then((res) => {
        resolve(res)
      })
      .catch((err) => {
        reject(err)
      })
  })
}
