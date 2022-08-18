const model = {}
const db = require('../config/db')
const cloudinary = require('../middlewares/cloudinary')

model.addMovie = async (data) => {
  const upload = await cloudinary.uploader.upload(data.path, {
    folder: 'tickitz_movie',
    use_filename: true,
    unique_filename: false
  })
  await db.query(
    'INSERT INTO public.movies (title, genres, release_date, duration, director, casts, synopsis, img) VALUES($1, $2, $3, $4, $5, $6, $7, $8)',
    [
      data.title,
      data.genres,
      data.release_date,
      data.duration,
      data.director,
      data.casts,
      data.synopsis,
      upload.secure_url
    ]
  )
  return 'data berhasil disimpan'
}

model.getAllMovies = async () => {
  try {
    const query = await db.query(
      'SELECT movie_id, img, title, genres, release_date FROM public.movies ORDER BY movie_id DESC'
    )
    return query.rows
  } catch (error) {
    return error
  }
}

model.getSortedMovies = async () => {
  try {
    const query = await db.query(
      'SELECT movie_id, img, title, genres, release_date FROM public.movies ORDER BY EXTRACT(YEAR FROM release_date) DESC, title ASC'
    )
    return query.rows
  } catch (error) {
    return error
  }
}

model.getMovieById = async (data) => {
  try {
    const query = await db.query(
      'SELECT * FROM public.movies WHERE movie_id=$1',
      [data.movie_id]
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
  if (data.path) {
    let img = await db.query('SELECT * FROM public.movies WHERE movie_id=$1', [
      data.movie_id
    ])
    img = img.rows[0].img
    img = img.split('/v')[1].split('/')
    img.shift()
    img = img.join('/').split('.png')[0]
    await cloudinary.uploader.destroy(img, function (result) {
      console.log(result)
    })
  }
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
  if (data.release_date) {
    query += ` release_date=$${id},`
    datas.push(data.release_date)
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
  if (data.path) {
    const upload = await cloudinary.uploader.upload(data.path, {
      folder: 'tickitz_movie',
      use_filename: true,
      unique_filename: false
    })
    const img = upload.secure_url
    query += ` img=$${id},`
    datas.push(img)
    id++
  }
  query = query.slice(0, -1)
  query += ` WHERE movie_id=$${id}`
  datas.push(data.movie_id)

  await db.query(query, datas)
  return 'data berhasil diubah'
}

model.deleteMovie = async (data) => {
  await db.query('DELETE FROM public.movies WHERE movie_id=$1', [data.movie_id])
  let img = await db.query('SELECT * FROM public.movies WHERE movie_id=$1', [
    data.movie_id
  ])
  img = img.rows[0].img
  img = img.split('/v')[1].split('/')
  img.shift()
  img = img.join('/').split('.png')[0]
  await cloudinary.uploader.destroy(img, function (result) {
    console.log(result)
  })
  return 'data berhasil dihapus'
}

module.exports = model
