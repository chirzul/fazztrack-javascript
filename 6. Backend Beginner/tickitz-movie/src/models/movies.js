const model = {};
const db = require('../config/db');

model.addMovie = async (data) => {
  try {
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
        data.img,
      ]
    );
    return 'data berhasil disimpan';
  } catch (error) {
    throw error;
  }
};

model.getAllMovies = async () => {
  try {
    const query = await db.query(
      'SELECT id_movie, img, title, genres FROM public.movies'
    );
    return query.rows;
  } catch (error) {
    return error;
  }
};

model.getMovieById = async (data) => {
  try {
    const query = await db.query(
      `SELECT * FROM public.movies WHERE id_movie=$1`,
      [data.id_movie]
    );
    return query.rows;
  } catch (error) {
    return error;
  }
};

model.updateMovie = async (data) => {
  try {
    await db.query(
      `UPDATE public.movies SET title=$1, genres=$2, "releaseDate"=$3, duration=$4, director=$5, casts=$6, synopsis=$7, img=$8 WHERE id_movie=$9`,
      [
        data.title,
        data.genres,
        data.releaseDate,
        data.duration,
        data.director,
        data.casts,
        data.synopsis,
        data.img,
        data.id_movie,
      ]
    );
    return 'data berhasil diubah';
  } catch (error) {
    throw error;
  }
};

model.deleteMovie = async (data) => {
  try {
    await db.query(`DELETE FROM public.movies WHERE id_movie=$1`, [
      data.id_movie,
    ]);
  } catch (error) {
    throw error;
  }
};

module.exports = model;
