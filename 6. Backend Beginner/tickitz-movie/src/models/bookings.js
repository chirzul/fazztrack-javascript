const model = {};
const db = require('../config/db');

model.addBooking = async (data) => {
  try {
    await db.query(
      `INSERT INTO public.bookings (id_schedule, id_user, seats) VALUES($1, $2, $3);
      `,
      [data.id_schedule, data.id_user, data.seats]
    );
    return 'data berhasil disimpan';
  } catch (error) {
    throw error;
  }
};

model.getAllBookings = async () => {
  try {
    const query = await db.query('SELECT * FROM public.bookings');
    return query.rows;
  } catch (error) {
    return error;
  }
};

model.getBookingById = async (data) => {
  try {
    const query = await db.query(
      `SELECT * FROM public.bookings WHERE id_booking=$1`,
      [data.id_booking]
    );
    return query.rows;
  } catch (error) {
    return error;
  }
};

model.updateBooking = async (data) => {
  let query = `UPDATE public.bookings SET`;
  const datas = [];
  let id = 1;
  if (data.id_schedule) {
    query += ` id_schedule=$${id},`;
    datas.push(data.id_schedule);
    id++;
  }
  if (data.id_user) {
    query += ` id_user=$${id},`;
    datas.push(data.id_user);
    id++;
  }
  if (data.seats) {
    query += ` seats=$${id},`;
    datas.push(data.seats);
    id++;
  }
  query = query.slice(0, -1);
  query += ` WHERE id_booking=$${id}`;
  datas.push(data.id_booking);
  try {
    await db.query(query, datas);
    return 'data berhasil diubah';
  } catch (error) {
    throw error;
  }
};

model.deleteSchedule = async (data) => {
  try {
    await db.query(`DELETE FROM public.bookings WHERE id_booking=$1`, [
      data.id_booking,
    ]);
    return 'data berhasil dihapus';
  } catch (error) {
    throw error;
  }
};

module.exports = model;
