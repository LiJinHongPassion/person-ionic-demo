export interface User {
  id: number
  name: string
  nickname: string
  gender: 0 | 1
  field: string // 逗号分隔
  type: string
  profession: number
  birthday: string
  hobbies: string
  education: string
  phone: string
  value_degree: 1 | 2 | 3
  /* for version 2
  email: string
  */
}
