import { testMock } from "@/mock/test"
const testmock = {
  async install() {
    const res = await testMock()
    console.log("mock", res)
  }
}

export { testmock }
