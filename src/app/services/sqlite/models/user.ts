export interface User {
  id: number
  name: string
  nickname: string
  gender: '1' | '0'
  field: string // 逗号分隔
  type: string
  profession: string
  birthday: string
  hobbies: string
  education: string
  phone: string
  value_degree: 1 | 2 | 3
  /* for version 2
  email: string
  */
}
