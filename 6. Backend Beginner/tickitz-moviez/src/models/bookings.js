const model = {}
const db = require('../config/db')

model.addBooking = async (data) => {
  await db.query(
    'INSERT INTO public.bookings (schedule_id, user_id, seats) VALUES($1, $2, $3)',
    [data.scheduleId, data.userId, data.seats]
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
      [data.bookingId]
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
  if (data.scheduleId) {
    query += ` schedule_id=$${id},`
    datas.push(data.scheduleId)
    id++
  }
  if (data.userId) {
    query += ` user_id=$${id},`
    datas.push(data.userId)
    id++
  }
  if (data.seats) {
    query += ` seats=$${id},`
    datas.push(data.seats)
    id++
  }
  query = query.slice(0, -1)
  query += ` WHERE booking_id=$${id}`
  datas.push(data.bookingId)

  await db.query(query, datas)
  return 'data berhasil diubah'
}

model.deleteSchedule = async (data) => {
  await db.query('DELETE FROM public.bookings WHERE booking_id=$1', [
    data.bookingId
  ])
  return 'data berhasil dihapus'
}

module.exports = model
