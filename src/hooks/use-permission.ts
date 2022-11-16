import { useStore } from "@/store"

export function usePermission(pageName: string, hanldeName: string) {
  const store = useStore()
  const permissions = store.state.login.permissions

  const verifyPermission = `system:${pageName}:${hanldeName}`
  // 返回boolean值

  // !!将值转换为boolean

  // !name=>false
  // !!name=>true

  return !!permissions.find((item: any) => {
    return item === verifyPermission
  })
}
