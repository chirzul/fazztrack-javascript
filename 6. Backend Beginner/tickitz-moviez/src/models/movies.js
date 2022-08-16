const model = {}
const db = require('../config/db')

model.addMovie = async (data) => {
  await db.query(
    `INSERT INTO public.movies
      (title, genres, "releaseDate", duration, director, casts, synopsis, img)
      VALUES($1, $2, $3, $4, $5, $6, $7, $8)`,
    [
      data.title,
      data.genres,
      data.releaseDate,
      data.duration,
      data.director,
      data.casts,
      data.synopsis,
      data.img
    ]
  )
  return 'data berhasil disimpan'
}

model.getAllMovies = async () => {
  try {
    const query = await db.query(
      'SELECT id_movie, img, title, genres, "releaseDate" FROM public.movies ORDER BY id_movie DESC'
    )
    return query.rows
  } catch (error) {
    return error
  }
}

model.getSortedMovies = async () => {
  try {
    const query = await db.query(
      'SELECT id_movie, img, title, genres, "releaseDate" FROM public.movies ORDER BY EXTRACT(YEAR FROM "releaseDate") DESC, title ASC'
    )
    return query.rows
  } catch (error) {
    return error
  }
}

model.getMovieById = async (data) => {
  try {
    const query = await db.query(
      'SELECT * FROM public.movies WHERE id_movie=$1',
      [data.id_movie]
    )
    return query.rows
  } catch (error) {
    return error
  }
}

model.searchMovie = async (data) => {
  try {
    const query = await db.query(
      'SELECT * FROM public.movies WHERE LOWER(title) LIKE LOWER($1)',
      [`%${data.title}%`]
    )
    return query.rows
  } catch (error) {
    console.log(error)
    return error
  }
}

model.updateMovie = async (data) => {
  let query = 'UPDATE public.movies SET'
  const datas = []
  let id = 1
  if (data.title) {
    query += ` title=$${id},`
    datas.push(data.title)
    id++
  }
  if (data.genres) {
    query += ` genres=$${id},`
    datas.push(data.genres)
    id++
  }
  if (data.releaseDate) {
    query += ` "releaseDate"=$${id},`
    datas.push(data.releaseDate)
    id++
  }
  if (data.duration) {
    query += ` duration=$${id},`
    datas.push(data.duration)
    id++
  }
  if (data.casts) {
    query += ` casts=$${id},`
    datas.push(data.casts)
    id++
  }
  if (data.synopsis) {
    query += ` synopsis=$${id},`
    datas.push(data.synopsis)
    id++
  }
  if (data.img) {
    query += ` img=$${id},`
    datas.push(data.img)
    id++
  }
  query = query.slice(0, -1)
  query += ` WHERE id_movie=$${id}`
  datas.push(data.id_movie)

  await db.query(query, datas)
  return 'data berhasil diubah'
}

model.deleteMovie = async (data) => {
  await db.query('DELETE FROM public.movies WHERE id_movie=$1', [data.id_movie])
  return 'data berhasil dihapus'
}

module.exports = model