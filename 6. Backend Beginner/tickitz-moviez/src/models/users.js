const model = {}
const db = require('../config/db')

model.addUser = async (data) => {
  try {
    await db.query(
      'INSERT INTO public.users (username, "password", first_name, last_name, email, phone, "role") VALUES($1, $2, $3, $4, $5, $6, $7)',
      [
        data.username,
        data.hashPassword,
        data.first_name,
        data.first_name,
        data.email,
        data.phone,
        data.role
      ]
    )
    return 'data berhasil disimpan'
  } catch (error) {
    return error
  }
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

model.getUser = async (username) => {
  try {
    const query = await db.query(
      'SELECT * FROM public.users WHERE username=$1',
      [username]
    )
    return query.rows
  } catch (error) {
    return error
  }
}

model.checkEmail = async (email) => {
  try {
    const query = await db.query('SELECT * FROM public.users WHERE email=$1', [
      email
    ])
    return query.rows
  } catch (error) {
    return error
  }
}

model.updateUser = async (data) => {
  try {
    let query = 'UPDATE public.users SET'
    const datas = []
    let id = 1
    if (data.username) {
      query += ` username=$${id},`
      datas.push(data.username)
      id++
    }
    if (data.first_name) {
      query += ` first_name=$${id},`
      datas.push(data.first_name)
      id++
    }
    if (data.last_name) {
      query += ` last_name=$${id},`
      datas.push(data.last_name)
      id++
    }
    if (data.email) {
      query += ` email=$${id},`
      datas.push(data.email)
      id++
    }
    if (data.phone) {
      query += ` phone=$${id},`
      datas.push(data.phone)
      id++
    }
    if (data.role) {
      query += ` "role"=$${id},`
      datas.push(data.role)
      id++
    }
    query += ` updated_at=now() WHERE user_id=$${id}`
    datas.push(data.user_id)

    await db.query(query, datas)
    return 'data berhasil diubah'
  } catch (error) {
    return error
  }
}

model.changePassword = async (data) => {
  try {
    await db.query('UPDATE public.users SET password=$1 WHERE user_id=$2', [
      data.hashPassword,
      data.user_id
    ])
    return 'password berhasil diubah'
  } catch (error) {
    return error
  }
}

model.deleteUser = async (data) => {
  try {
    await db.query('DELETE FROM public.users WHERE user_id=$1', [data.user_id])
    return 'data berhasil dihapus'
  } catch (error) {
    return error
  }
}

module.exports = model
