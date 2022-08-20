const model = {}
const db = require('../config/db')

model.addUser = async (data) => {
  try {
    await db.query(
      `INSERT INTO public.users
        (username, "password", first_name, last_name, email, phone, "role")
        VALUES($1, $2, $3, $4, $5, $6, $7)`,
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
    await db.query(
      `UPDATE public.users
        SET first_name=COALESCE(NULLIF($1, ''), first_name),
            last_name=COALESCE(NULLIF($2, ''), last_name),
            email=COALESCE(NULLIF($3, ''), email),
            phone=COALESCE(NULLIF($4, ''), phone),
            "role"=COALESCE(NULLIF($5, ''), "role"),
            updated_at=now()
        WHERE username=$6`,
      [
        data.first_name,
        data.last_name,
        data.email,
        data.phone,
        data.role,
        data.username
      ]
    )
    return 'data berhasil diubah'
  } catch (error) {
    return error
  }
}

model.changePassword = async (data) => {
  try {
    await db.query('UPDATE public.users SET "password"=$1 WHERE username=$2', [
      data.hashPassword,
      data.username
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
