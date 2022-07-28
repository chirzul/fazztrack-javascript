/**
 * * author : Muhammad Chirzul Maula
 * * deskripsi program : Membuat variabel biodata yang berisi data diri
 */

const biodata = {
  name: "Muhammad Chirzul Maula",
  age: 25,
  hobbies: ["Karaoke", "Jogging", "Baca Webtoon", "Main Game"],
  isMarried: false,
  schoolList: [
    {
      name: "Universitas Diponegoro",
      yearIn: 2014,
      yearOut: 2021,
      major: "Informatika",
    },
    {
      name: "SMA N 1 Pecangaan",
      yearIn: 2011,
      yearOut: 2014,
      major: "IPA",
    },
    {
      name: "MTs Darul Ulum Purwogondo",
      yearIn: 2008,
      yearOut: 2011,
      major: null,
    },
    {
      name: "SD N 1 Purwogondo",
      yearIn: 2002,
      yearOut: 2008,
      major: null,
    },
  ],
  skills: [
    {
      skillName: "HTML",
      level: "beginner",
    },
    {
      skillName: "CSS",
      level: "beginner",
    },
    {
      skillName: "JavaScript",
      level: "beginner",
    },
    {
      skillName: "SQL",
      level: "beginner",
    },
  ],
  interestInCoding: true,
};

console.log(biodata);
