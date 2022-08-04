/**
 * * author : Muhammad Chirzul Maula
 * * deskripsi program : Mengecek aktivitas saat user online
 */

const checkActivity = (user) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (user.isOnline) {
        resolve(`${user.name} is ${user.activity}`);
      } else {
        reject(new Error(`${user.name} offline`));
      }
    }, 1000);
  });
};

const user = {
  name: "Muhammad Chirzul Maula",
  isOnline: true,
  activity: "Listening to spotify",
};

checkActivity(user)
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error.message);
  });
