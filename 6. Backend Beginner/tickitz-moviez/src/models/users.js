const model = {}
const db = require('../config/db')

model.addUser = async (data) => {
  await db.query(
    'INSERT INTO public.users (username, "password", first_name, last_name, email, phone) VALUES($1, $2, $3, $4, $5, $6)',
    [
      data.username,
      data.password,
      data.firstName,
      data.lastName,
      data.email,
      data.phone
    ]
  )
  return 'data berhasil disimpan'
}

model.getAllUsers = async () => {
  try {
    const query = await db.query(
      'SELECT * FROM public.users ORDER BY created_at DESC'
    )
    return query.rows
  } catch (error) {
    return error
  }
}

model.getUserById = async (data) => {
  try {
    const query = await db.query(
      'SELECT * FROM public.users WHERE user_id=$1',
      [data.userId]
    )
    return query.rows
  } catch (error) {
    return error
  }
}

model.updateUser = async (data) => {
  let query = 'UPDATE public.users SET'
  const datas = []
  let id = 1
  if (data.username) {
    query += ` username=$${id},`
    datas.push(data.username)
    id++
  }
  if (data.password) {
    query += ` "password"=$${id},`
    datas.push(data.password)
    id++
  }
  if (data.firstName) {
    query += ` first_name=$${id},`
    datas.push(data.firstName)
    id++
  }
  if (data.lastName) {
    query += ` last_name=$${id},`
    datas.push(data.lastName)
    id++
  }
  if (data.email) {
    query += ` email=$${id},`
    datas.push(data.email)
    id++
  }
  if (data.phone) {
    query += ` "phone"=$${id},`
    datas.push(data.phone)
    id++
  }
  query = query.slice(0, -1)
  query += ` WHERE user_id=$${id}`
  datas.push(data.userId)

  await db.query(query, datas)
  return 'data berhasil diubah'
}

model.deleteSchedule = async (data) => {
  await db.query('DELETE FROM public.users WHERE user_id=$1', [data.userId])
  return 'data berhasil dihapus'
}

module.exports = model
