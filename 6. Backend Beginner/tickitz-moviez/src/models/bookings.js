const model = {}
const db = require('../config/db')

model.addBooking = async (data) => {
  await db.query(
    'INSERT INTO public.bookings (schedule_id, user_id, seats) VALUES($1, $2, $3)',
    [data.schedule_id, data.user_id, data.seats]
  )
  return 'data berhasil disimpan'
}

model.getAllBookings = async () => {
  try {
    const query = await db.query(
      'SELECT * FROM public.bookings ORDER BY booking_id DESC'
    )
    return query.rows
  } catch (error) {
    return error
  }
}

model.getBookingById = async (data) => {
  try {
    const query = await db.query(
      'SELECT * FROM public.bookings WHERE booking_id=$1',
      [data.booking_id]
    )
    return query.rows
  } catch (error) {
    return error
  }
}

model.updateBooking = async (data) => {
  let query = 'UPDATE public.bookings SET'
  const datas = []
  let id = 1
  if (data[1].schedule_id) {
    query += ` schedule_id=$${id},`
    datas.push(data[1].schedule_id)
    id++
  }
  if (data[1].user_id) {
    query += ` user_id=$${id},`
    datas.push(data[1].user_id)
    id++
  }
  if (data[1].seats) {
    query += ` seats=$${id},`
    datas.push(data[1].seats)
    id++
  }
  query = query.slice(0, -1)
  query += ` WHERE booking_id=$${id}`
  datas.push(data[0].booking_id)

  await db.query(query, datas)
  return 'data berhasil diubah'
}

model.deleteSchedule = async (data) => {
  await db.query('DELETE FROM public.bookings WHERE booking_id=$1', [
    data.booking_id
  ])
  return 'data berhasil dihapus'
}

module.exports = model
