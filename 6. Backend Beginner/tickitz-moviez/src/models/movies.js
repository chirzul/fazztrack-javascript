const model = {}
const db = require('../config/db')
const cloudinary = require('../middlewares/cloudinary')

model.addMovie = async (data) => {
  try {
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
  } catch (error) {
    return error
  }
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
    return error
  }
}

model.updateMovie = async (data) => {
  try {
    let img = ''
    if (data.path) {
      img = await db.query('SELECT * FROM public.movies WHERE movie_id=$1', [
        data.movie_id
      ])
      img = `tickitz${img.rows[0].img.split('tickitz')[1].split('.png')[0]}`
      await cloudinary.uploader.destroy(img, function (result) {
        console.log(result)
      })
      const upload = await cloudinary.uploader.upload(data.path, {
        folder: 'tickitz_movie',
        use_filename: true,
        unique_filename: false
      })
      img = upload.secure_url
    }
    await db.query(
      `UPDATE public.movies
        SET title=COALESCE(NULLIF($1, ''), title),
            genres=COALESCE(NULLIF($2, ''), genres),
            release_date=COALESCE(NULLIF($3, CURRENT_DATE), release_date),
            duration=COALESCE(NULLIF($4, ''), duration),
            director=COALESCE(NULLIF($5, ''), director),
            casts=COALESCE(NULLIF($6, ''), casts),
            synopsis=COALESCE(NULLIF($7, ''), synopsis),
            img=COALESCE(NULLIF($8, ''), img),
            updated_at=now()
        WHERE movie_id=$9`,
      [
        data.title,
        data.genres,
        data.release_date,
        data.duration,
        data.director,
        data.casts,
        data.synopsis,
        img,
        data.movie_id
      ]
    )
    return 'data berhasil diubah'
  } catch (error) {
    return error
  }
}

model.deleteMovie = async (data) => {
  try {
    let img = await db.query('SELECT * FROM public.movies WHERE movie_id=$1', [
      data.movie_id
    ])
    img = `tickitz${img.rows[0].img.split('tickitz')[1].split('.png')[0]}`
    await cloudinary.uploader.destroy(img, function (result) {
      console.log(result)
    })
    await db.query('DELETE FROM public.movies WHERE movie_id=$1', [
      data.movie_id
    ])
    return 'data berhasil dihapus'
  } catch (error) {
    return error
  }
}

module.exports = model
