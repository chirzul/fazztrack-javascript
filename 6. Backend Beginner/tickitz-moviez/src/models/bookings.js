const model = {}
const db = require('../config/db')

model.addBooking = async (data) => {
  try {
    await db.query(
      'INSERT INTO public.bookings (schedule_id, user_id, seats) VALUES($1, $2, $3)',
      [data.schedule_id, data.user_id, data.seats]
    )
    return 'data berhasil disimpan'
  } catch (error) {
    return error
  }
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
  try {
    let query = 'UPDATE public.bookings SET'
    const datas = []
    let id = 1
    if (data.schedule_id) {
      query += ` schedule_id=$${id},`
      datas.push(data.schedule_id)
      id++
    }
    if (data.user_id) {
      query += ` user_id=$${id},`
      datas.push(data.user_id)
      id++
    }
    if (data.seats) {
      query += ` seats=$${id},`
      datas.push(data.seats)
      id++
    }
    query = query.slice(0, -1)
    query += ` WHERE booking_id=$${id}`
    datas.push(data.booking_id)

    await db.query(query, datas)
    return 'data berhasil diubah'
  } catch (error) {
    return error
  }
}

model.deleteSchedule = async (data) => {
  try {
    await db.query('DELETE FROM public.bookings WHERE booking_id=$1', [
      data.booking_id
    ])
    return 'data berhasil dihapus'
  } catch (error) {
    return error
  }
}

module.exports = model
