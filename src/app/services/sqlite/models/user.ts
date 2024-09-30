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
export function toEntityUser(addUser: any, isAdd = true){

  const user: any = {
    name: addUser.name,
    nickname: addUser.nickname,
    gender: addUser.gender,
    field: addUser.fieldArr.join(','),
    type: "",
    profession: addUser.professionArr.join(','),
    birthday: addUser.birthday,
    hobbies: addUser.hobbiesArr.join(','),
    education: addUser.education,
    phone: addUser.phone,
    value_degree: addUser.value_degree
  };
  if(!isAdd){
    user.id = addUser.id;
  }
  return user;
}

export function toEditUser(user: User){
  return {
    id: user.id,
    name: user.name,
    nickname: user.nickname,
    gender: user.gender,
    fieldArr: user.field.split(','),
    type: "",
    professionArr: user.profession.split(','),
    birthday: user.birthday,
    hobbiesArr: user.hobbies.split(','),
    education: user.education,
    phone: user.phone,
    value_degree: user.value_degree
  };
}