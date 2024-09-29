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
  value_degree: '1' | '2' | '3'
}
export function toEntityUser(addUser: any){

  const user = {
    name: addUser.name,
    nickname: addUser.nickname,
    gender: addUser.gender,
    field: addUser.filedArr.join(','),
    type: "",
    profession: addUser.professionArr.join(','),
    birthday: addUser.birthday,
    hobbies: addUser.hobbiesArr.join(','),
    education: addUser.education,
    phone: addUser.phone,
    value_degree: addUser.value_degree
  };
  return user;
}
