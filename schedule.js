const day = document.querySelectorAll('.day')
const bodyTable = document.querySelector('tbody')
const bodyPiket = document.querySelector('.piket-schedule')
const btn = document.querySelector('.btn')
const currentData = document.querySelector(".current-data")
const currentClock = document.querySelector('.current-clock')
const hari = new Date()
const listDay = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu" ]

// const listLsn = [
//     ["B.Indo", "Al-Quran Hadist", "B.Jerman", "B.Arab"],
//     ["Kimia","PJOK","Matematika","Biologi"],
//     ["TIK","B.Ing","B.Indo","SBK"],
//     ["Sosiologi","Sejarah","Fiqih","Ekonomi"],
//     ["PKn","B.Arab","Aqidah Akhlak"],
//     ["SKI","Fisika","Geografi"],
//     ["Libur"]
// ]

const hariAslii = () =>{
  if (hari.getHours() >= 19) {
    if (hari.getDay() == 7) {
      return 1
    }
    return hari.getDay()+1
  }else{
    return hari.getDay()
  }
}

// const hariAsli = hariAslii()
const hariAsli = 6

day.forEach(element => {
  if (hari.getHours() >= 19) {
    element.innerHTML = "Besok"
  }else{
    element.innerHTML = listDay[hariAsli]
  }
});


//Jam Digital

const seconds = () =>{
  const date = new Date()
  if (date.getSeconds() < 10){
    return "0"+date.getSeconds()
  }else{
    return date.getSeconds()
  }
}

const hours = () =>{
  const date = new Date()

  if (date.getHours() < 10) {
    return "0"+date.getHours()
  }else{
    return date.getHours()
  }
}

const minutes = ()=>{
  const date = new Date();
  if (date.getMinutes()<10 ) {
    return "0"+date.getMinutes()
  } else {
    return date.getMinutes()
  }
};

setInterval(() => {
    const date = new Date()
    const clock = document.querySelector('.clock')
    clock.innerHTML = 
    hours()+":"+
    minutes()+":"+
    seconds()
}, 1000);



let listJam = [
  [

  ],
  [
    //Senin
    {
      mapel: "Upacara",
      JamStart: 7,
      MinuteStart: 15,
      JamEnd: 7,
      MinuteEnd: 55,
    },
    {
      mapel: "Fisika",
      JamStart: 7,
      MinuteStart: 55,
      JamEnd: 9,
      MinuteEnd: 15,
    },
    {
      mapel: "Seni Budaya",
      JamStart: 9,
      MinuteStart: 15,
      JamEnd: 9,
      MinuteEnd: 55,
    },
    {
      mapel: "Istirahat",
      JamStart: 9,
      MinuteStart: 55,
      JamEnd: 10,
      MinuteEnd: 10,
    },
    {
      mapel: "Seni Budaya",
      JamStart: 10,
      MinuteStart: 10,
      JamEnd: 10,
      MinuteEnd: 50,
    },
    {
      mapel: "Akidah Ahklak",
      JamStart: 10,
      MinuteStart: 50,
      JamEnd: 12,
      MinuteEnd: 10,
    },
    {
      mapel: "Ishoma",
      JamStart: 12,
      MinuteStart: 10,
      JamEnd: 12,
      MinuteEnd: 50,
    },
    {
      mapel: "Bahasa Arab",
      JamStart: 12,
      MinuteStart: 50,
      JamEnd: 14,
      MinuteEnd: 10,
    },
  ],
  [
    {
      mapel: "Bahasa Indonesia",
      JamStart: 7,
      MinuteStart: 15,
      JamEnd: 9,
      MinuteEnd: 15,
    },
    {
      mapel: "Bahasa Jepang",
      JamStart: 9,
      MinuteStart: 5,
      JamEnd: 9,
      MinuteEnd: 55,
    },
    {
      mapel: "Istirahat",
      JamStart: 9,
      MinuteStart: 55,
      JamEnd: 10,
      MinuteEnd: 10,
    },
    {
      mapel: "Bahasa Jepang",
      JamStart: 10,
      MinuteStart: 10,
      JamEnd: 10,
      MinuteEnd: 50,
    },
    {
      mapel: "Al-Qur'an Hadist",
      JamStart: 10,
      MinuteStart: 50,
      JamEnd: 12,
      MinuteEnd: 10,
    },
    {
      mapel: "Ishoma",
      JamStart: 12,
      MinuteStart: 10,
      JamEnd: 12,
      MinuteEnd: 50,
    },
    {
      mapel: "Fiqih",
      JamStart: 12,
      MinuteStart: 50,
      JamEnd: 14,
      MinuteEnd: 10,
    },
  ],
  [
    {
      mapel: "Wali Kelas",
      JamStart: 7,
      MinuteStart: 0,
      JamEnd: 7,
      MinuteEnd: 15,
    },
    {
      mapel: "Bina Mental",
      JamStart: 7,
      MinuteStart: 15,
      JamEnd: 7,
      MinuteEnd: 45,
    },
    {
      mapel: "Sejarah",
      JamStart: 7,
      MinuteStart: 45,
      JamEnd: 9,
      MinuteEnd: 5,
    },
    {
      mapel: "Prakarya",
      JamStart: 9,
      MinuteStart: 5,
      JamEnd: 9,
      MinuteEnd: 45,
    },
    {
      mapel: "Istirahat",
      JamStart: 9,
      MinuteStart: 45,
      JamEnd: 10,
      MinuteEnd: 0,
    },
    {
      mapel: "Prakarya",
      JamStart: 10,
      MinuteStart: 0,
      JamEnd: 10,
      MinuteEnd: 40,
    },
    {
      mapel: "Sosiologi",
      JamStart: 10,
      MinuteStart: 40,
      JamEnd: 12,
      MinuteEnd: 0,
    },
    {
      mapel: "Ishoma",
      JamStart: 12,
      MinuteStart: 0,
      JamEnd: 12,
      MinuteEnd: 45,
    },
    {
      mapel: "Sosiologi",
      JamStart: 12,
      MinuteStart: 45,
      JamEnd: 13,
      MinuteEnd: 25,
    },
    {
      mapel: "Kimia",
      JamStart: 13,
      MinuteStart: 25,
      JamEnd: 14,
      MinuteEnd: 45,
    },
  ],
  [
    {
      mapel: "Sosiologi",
      JamStart: 7,
      MinuteStart: 15,
      JamEnd: 8,
      MinuteEnd: 35,
    },
    {
      mapel: "PJOK",
      JamStart: 8,
      MinuteStart: 35,
      JamEnd: 9,
      MinuteEnd: 55,
    },
    {
      mapel: "Istirahat",
      JamStart: 9,
      MinuteStart: 55,
      JamEnd: 10,
      MinuteEnd: 10,
    },
    {
      mapel: "Kimia",
      JamStart: 10,
      MinuteStart: 10,
      JamEnd: 12,
      MinuteEnd: 10,
    },
    {
      mapel: "Ishoma",
      JamStart: 12,
      MinuteStart: 10,
      JamEnd: 12,
      MinuteEnd: 45,
    },
    {
      mapel: "Biologi",
      JamStart: 12,
      MinuteStart: 45,
      JamEnd: 14,
      MinuteEnd: 45,
    },
  ],
  [
    {
      mapel: "Yasinan",
      JamStart: 7,
      MinuteStart: 0,
      JamEnd: 7,
      MinuteEnd: 30,
    },
    {
      mapel: "Bahasa Inggris",
      JamStart: 7,
      MinuteStart: 30,
      JamEnd: 9,
      MinuteEnd: 30,
    },
    {
      mapel: "Istirahat",
      JamStart: 9,
      MinuteStart: 30,
      JamEnd: 9,
      MinuteEnd: 45,
    },
    {
      mapel: "Matematika",
      JamStart: 9,
      MinuteStart: 45,
      JamEnd: 11,
      MinuteEnd: 45,
    },
  ],
  [
    {
      mapel: "Apel Motivasi",
      JamStart: 7,
      MinuteStart: 0,
      JamEnd: 7,
      MinuteEnd: 30,
    },
    {
      mapel: "SKI",
      JamStart: 7,
      MinuteStart: 30,
      JamEnd: 8,
      MinuteEnd: 50,
    },
    {
      mapel: "Fisika",
      JamStart: 8,
      MinuteStart: 50,
      JamEnd: 10,
      MinuteEnd: 10,
    },
    {
      mapel: "Istirahat",
      JamStart: 10,
      MinuteStart: 10,
      JamEnd: 10,
      MinuteEnd: 25,
    },
    {
      mapel: "Fisika",
      JamStart: 10,
      MinuteStart: 25,
      JamEnd: 11,
      MinuteEnd: 5,
    },
    {
      mapel: "Pendidikan Pancasila",
      JamStart: 11,
      MinuteStart: 5,
      JamEnd: 12,
      MinuteEnd: 15,
    },
    {
      mapel: "Ishoma",
      JamStart: 12,
      MinuteStart: 15,
      JamEnd: 13,
      MinuteEnd: 15,
    },
    {
      mapel: "Biologi",
      JamStart: 13,
      MinuteStart: 15,
      JamEnd: 14,
      MinuteEnd: 35,
    },
  ],
];

const daftarPiket = [
  ['Libur'],
  ["Rasha","Fahri","Salsabila","Saskiya","Adinda","Jinur","Hikmatul"],
  ["Nazmy",'Baihaqi','Fawaz', 'Widya', 'Amanda', 'Irqathaya'],
  ['Altaf', 'Jami', 'Fudil', 'Rara','Salwa','Fatimah'],
  ['A. Fawaz','Intan','Jimut','Zahra',"A. Rahma"],
  ['Maulana', 'Dzacky','Jisal','Tiara','Khairunnisa','Azaria','Suci'],
  ['Faiz', "Hanif", "Jasmine",'Nurul','Shafa','A. Janna','Nadya']
]


const Piket = daftarPiket[hariAsli].forEach(element =>{
  const listPiket = document.createElement('tr')
  listPiket.className = 'data'
  listPiket.innerHTML = `<td>${element}</td>`
  bodyPiket.append(listPiket)
})

const minute = value =>{
  if (value == 0 || value < 10) {
    return "0"+value
  }else
  return value
}

if (hariAsli != 0) {
  for (let i = 0; i < listJam[hariAsli].length; i++) {
    const listData = document.createElement('tr')
    listData.className = 'data'
    listData.innerHTML = `<td>${listJam[hariAsli][i].JamStart}:${minute(listJam[hariAsli][i].MinuteStart)} - ${listJam[hariAsli][i].JamEnd}:${minute(listJam[hariAsli][i].MinuteEnd)}</td><td>${listJam[hariAsli][i].mapel}</td>`
    bodyTable.append(listData)
  }
}else{
  const listData = document.createElement('tr')
  listData.className = 'data'
  listData.innerHTML = "<td>Libur</td><td>Libur</td>"
  bodyTable.append(listData)
}

const Istirahat = (hari) => {
  if (hari <= 4) {
    return "9:55 - 10:10"
  } else if(hari == 5){
    return "9:30 - 9:45"
  }else if (hari == 6) {
    return "10:10 - 10:25"
  }
}


setInterval(() => {
  const date = new Date();
  const timeConv = (jam, menit) => {
    return jam * 60 + menit;
  };
  if (date.getDay() == 0) {
    currentClock.innerHTML = "Libur"
    currentData.innerHTML = "Libur";
  } else {
    for (let i = 0; i < listJam[date.getDay()].length; i++) {
      const roster = listJam[date.getDay()][i];
      const realConv = timeConv(date.getHours(), date.getMinutes());
      // const realConv = timeConv(jamS,minS);
      const listConvStart = timeConv(roster.JamStart, roster.MinuteStart);
      const listConvEnd = timeConv(roster.JamEnd, roster.MinuteEnd);
      const t = listJam[date.getDay()][listJam[date.getDay()].length-1]
      // if (
      //   (realConv >= timeConv(9, 55)-1 & realConv <= timeConv(10, 10)-1 & date.getDay() <= 4) ||
      //   (realConv >= timeConv(9, 30)-1 & realConv <= timeConv(9, 45)-1 & date.getDay() == 5) ||
      //   (realConv >= timeConv(10, 10)-1 & realConv <= timeConv(10, 25)-1 & date.getDay() == 6)
      // ) {
      //   currentData.innerHTML = "Istirahat";
      //   currentClock.innerHTML = Istirahat(date.getDay())
      // } else if (
      //   (realConv >= timeConv(12, 10)) &
      //   (realConv <= timeConv(13, 0)) &
      //   (date.getDay() <= 4)
      // ) {
      //   currentData.innerHTML = "Ishoma";
      //   currentClock.innerHTML = "12:10 - 13:00"
      // }
      if (realConv >= listConvStart && realConv <= listConvEnd) {
        currentData.innerHTML = roster.mapel;
        currentClock.innerHTML = `${roster.JamStart}:${minute(roster.MinuteStart)} - ${roster.JamEnd}:${minute(roster.MinuteEnd)}`
        break;
      // } else if (
      //   (date.getHours() >= roster.Pulang) &
      //   ((date.getHours() <= 22) & (date.getMinutes() < 1))
      // ) {
      //   currentData.textContent = "Istirahat";
      } else {
        currentData.textContent = "Pulang";
        currentClock.innerHTML = `>${t.JamEnd}:${t.MinuteEnd}`
      }
    }
  }
}, 1000);


