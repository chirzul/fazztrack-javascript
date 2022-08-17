const model = {}
const db = require('../config/db')

model.addSchedule = async (data) => {
  await db.query(
    'INSERT INTO public.schedules (movie_id, show_date, city, theater, address, show_time, price) VALUES($1, $2, $3, $4, $5, $6, $7)',
    [
      data.movie_id,
      data.show_date,
      data.city,
      data.theater,
      data.address,
      data.show_time,
      data.price
    ]
  )
  return 'data berhasil disimpan'
}

model.getAllSchedules = async () => {
  try {
    const query = await db.query(
      'SELECT * FROM public.schedules ORDER BY schedule_id DESC'
    )
    return query.rows
  } catch (error) {
    return error
  }
}

model.getScheduleById = async (data) => {
  try {
    const query = await db.query(
      'SELECT * FROM public.schedules WHERE schedule_id=$1',
      [data.schedule_id]
    )
    return query.rows
  } catch (error) {
    return error
  }
}

model.updateSchedule = async (data) => {
  let query = 'UPDATE public.schedules SET'
  const datas = []
  let id = 1
  if (data[1].movie_id) {
    query += ` movie_id=$${id},`
    datas.push(data[1].movie_id)
    id++
  }
  if (data[1].show_date) {
    query += ` "show_date"=$${id},`
    datas.push(data[1].show_date)
    id++
  }
  if (data[1].city) {
    query += ` city=$${id},`
    datas.push(data[1].city)
    id++
  }
  if (data[1].theater) {
    query += ` theater=$${id},`
    datas.push(data[1].theater)
    id++
  }
  if (data[1].address) {
    query += ` address=$${id},`
    datas.push(data[1].address)
    id++
  }
  if (data[1].show_time) {
    query += ` "show_time"=$${id},`
    datas.push(data[1].show_time)
    id++
  }
  if (data[1].price) {
    query += ` price=$${id},`
    datas.push(data[1].price)
    id++
  }
  query = query.slice(0, -1)
  query += ` WHERE schedule_id=$${id}`
  datas.push(data[0].schedule_id)

  await db.query(query, datas)
  return 'data berhasil diubah'
}

model.deleteSchedule = async (data) => {
  await db.query('DELETE FROM public.schedules WHERE schedule_id=$1', [
    data.schedule_id
  ])
  return 'data berhasil dihapus'
}

module.exports = model
