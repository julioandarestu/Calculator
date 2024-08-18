"use strict";

// Tampilan Awal
document.getElementById("history").value = "";
document.getElementById("imageTimes").style.display = "none";
document.getElementById("imageMinus").style.display = "none";
document.getElementById("imageDivide").style.display = "none";
document.getElementById("imagePlus").style.display = "none";
// Tampilan Awal

// Variabel
const hasil = document.getElementById("hasil");
let hasil2 = ""; //Variabel untuk menyimpan hasil untuk history
const history = document.getElementById("history");
// Variabel

//Function

//Menambahkan angka
const addNumber = function (num) {
  //Merestart nilai jika ingin menginput angka baru
  if (hasil2 === 0) {
    hasil.value = 0;
    // Menghilangkan angka 0 didepan
    if (hasil.value.length === 1 && hasil.value === "0") {
      hasil.value = ""; // Menghilangkan angka 0
      //Jika length value <= akan normal
      if (hasil.value.length <= 4) {
        hasil.value += num;
        hasil2 = hasil.value;
      }
      //Jika length value >=9 dan <=13 font size dan padding menyesuaikan
      else if (hasil.value.length >= 5 && hasil.value.length <= 9) {
        hasil.value += num;
        hasil2 = hasil.value;
        hasil.style.fontSize = "30px";
        hasil.style.padding = "23px 0px 0px 0px";
      }
      //Jika tidak memenuhi kondisi diatas maka eksekusi ini
      else {
        hasil.value = "0";
        hasil.style.fontSize = "40px";
        alert("Too many numbers");
        document.getElementById("imageTimes").style.display = "none";
        document.getElementById("imageMinus").style.display = "none";
        document.getElementById("imageDivide").style.display = "none";
        document.getElementById("imagePlus").style.display = "none";
        document.getElementById("image").style.display = "";
      }
    }
    //Jika tidak memenuhi kondisi diatas maka eksekusi ini
    else {
      if (hasil.value.length <= 4) {
        hasil.value += num;
        hasil2 = hasil.value;
        console.log(hasil.value);
      } else if (hasil.value.length >= 5 && hasil.value.length <= 9) {
        hasil.value += num;
        hasil2 = hasil.value;
        hasil.style.fontSize = "30px";
        hasil.style.padding = "23px 0px 0px 0px";
      } else {
        hasil.value = "0";
        hasil.style.fontSize = "40px";
        alert("Too many numbers");
        document.getElementById("imageTimes").style.display = "none";
        document.getElementById("imageMinus").style.display = "none";
        document.getElementById("imageDivide").style.display = "none";
        document.getElementById("imagePlus").style.display = "none";
        document.getElementById("image").style.display = "";
      }
    }
  } else {
    if (hasil.value.length === 1 && hasil.value === "0") {
      hasil.value = ""; // Menghilangkan angka 0
      if (hasil.value.length <= 4) {
        hasil.value += num;
        hasil2 = hasil.value;
      } else if (hasil.value.length >= 5 && hasil.value.length <= 9) {
        hasil.value += num;
        hasil2 = hasil.value;
        hasil.style.fontSize = "30px";
        hasil.style.padding = "23px 0px 0px 0px";
      } else {
        hasil.value = "0";
        hasil.style.fontSize = "40px";
        alert("Too many numbers");
        document.getElementById("imageTimes").style.display = "none";
        document.getElementById("imageMinus").style.display = "none";
        document.getElementById("imageDivide").style.display = "none";
        document.getElementById("imagePlus").style.display = "none";
        document.getElementById("image").style.display = "";
      }
    } else {
      if (hasil.value.length <= 4) {
        hasil.value += num;
        hasil2 = hasil.value;
        console.log(hasil.value);
      } else if (hasil.value.length >= 5 && hasil.value.length <= 9) {
        hasil.value += num;
        hasil2 = hasil.value;
        hasil.style.fontSize = "30px";
        hasil.style.padding = "23px 0px 0px 0px";
      } else {
        hasil.value = "0";
        hasil.style.fontSize = "40px";
        history.value = "";
        hasil.style.padding = "11px 0px 0px 0px";
        alert("Too many numbers");
        document.getElementById("imageTimes").style.display = "none";
        document.getElementById("imageMinus").style.display = "none";
        document.getElementById("imageDivide").style.display = "none";
        document.getElementById("imagePlus").style.display = "none";
        document.getElementById("image").style.display = "";
      }
    }
    // Menghilangkan angka 0 didepan
  }
  //Merestart nilai jika ingin menginput angka baru
};
//Menambahkan angka

// Operator
// const addOperator = function (num) {
//   if (hasil.value.length === 1 && hasil.value === "0") {
//     hasil.value = "";
//     hasil.value += num;
//     hasil2 = hasil.value;
//   } else {
//     hasil.value += num;
//     hasil2 = hasil.value;
//   }
// };

const operatorPlus = function (num) {
  if (hasil.value.length === 1 && hasil.value === "0") {
    hasil.value = "";
    hasil.value += num;
    hasil2 = hasil.value;
    document.getElementById("imagePlus").style.display = "";
    document.getElementById("image").style.display = "none";
    document.getElementById("imageTimes").style.display = "none";
    document.getElementById("imageMinus").style.display = "none";
    document.getElementById("imageDivide").style.display = "none";
  } else {
    hasil.value += num;
    hasil2 = hasil.value;
    document.getElementById("imagePlus").style.display = "";
    document.getElementById("image").style.display = "none";
    document.getElementById("imageTimes").style.display = "none";
    document.getElementById("imageMinus").style.display = "none";
    document.getElementById("imageDivide").style.display = "none";
  }
};

const operatorDivide = function (num) {
  if (hasil.value.length === 1 && hasil.value === "0") {
    hasil.value = "";
    hasil.value += num;
    hasil2 = hasil.value;
    document.getElementById("imageDivide").style.display = "";
    document.getElementById("image").style.display = "none";
    document.getElementById("imageTimes").style.display = "none";
    document.getElementById("imageMinus").style.display = "none";
    document.getElementById("imagePlus").style.display = "none";
  } else {
    hasil.value += num;
    hasil2 = hasil.value;
    document.getElementById("imageDivide").style.display = "";
    document.getElementById("image").style.display = "none";
    document.getElementById("imageTimes").style.display = "none";
    document.getElementById("imageMinus").style.display = "none";
    document.getElementById("imagePlus").style.display = "none";
  }
};

const operatorTimes = function (num) {
  if (hasil.value.length === 1 && hasil.value === "0") {
    hasil.value = "";
    hasil.value += num;
    hasil2 = hasil.value;
    document.getElementById("imageDivide").style.display = "none";
    document.getElementById("image").style.display = "none";
    document.getElementById("imageTimes").style.display = "";
    document.getElementById("imageMinus").style.display = "none";
    document.getElementById("imagePlus").style.display = "none";
  } else {
    hasil.value += num;
    hasil2 = hasil.value;
    document.getElementById("imageDivide").style.display = "none";
    document.getElementById("image").style.display = "none";
    document.getElementById("imageTimes").style.display = "";
    document.getElementById("imageMinus").style.display = "none";
    document.getElementById("imagePlus").style.display = "none";
  }
};

const operatorMinus = function (num) {
  if (hasil.value.length === 1 && hasil.value === "0") {
    hasil.value = "";
    hasil.value += num;
    hasil2 = hasil.value;
    document.getElementById("imageDivide").style.display = "none";
    document.getElementById("image").style.display = "none";
    document.getElementById("imageTimes").style.display = "none";
    document.getElementById("imageMinus").style.display = "";
    document.getElementById("imagePlus").style.display = "none";
  } else {
    hasil.value += num;
    hasil2 = hasil.value;
    document.getElementById("imageDivide").style.display = "none";
    document.getElementById("image").style.display = "none";
    document.getElementById("imageTimes").style.display = "none";
    document.getElementById("imageMinus").style.display = "";
    document.getElementById("imagePlus").style.display = "none";
  }
};
// Operator

//Equal (=)
const equal = function () {
  if (hasil.value.length <= 12) {
    let historyDummy = hasil2; // Variabel untuk menampilkan history
    hasil.value = eval(hasil.value);
    history.value = historyDummy + ` = ${hasil.value}`;
    hasil2 = 0;
    document.getElementById("imageTimes").style.display = "none";
    document.getElementById("imageMinus").style.display = "none";
    document.getElementById("imageDivide").style.display = "none";
    document.getElementById("imagePlus").style.display = "none";
    document.getElementById("image").style.display = "";
  } else {
    alert("Sorry Too Many Numbers");
    document.getElementById("imageTimes").style.display = "none";
    document.getElementById("imageMinus").style.display = "none";
    document.getElementById("imageDivide").style.display = "none";
    document.getElementById("imagePlus").style.display = "none";
    document.getElementById("image").style.display = "";
  }
};
//Equal (=)

//Reset (AC)
const reset = function () {
  hasil.value = 0;
  history.value = "";
  hasil.style.fontSize = "50px";
  hasil.style.padding = "0px 0px 0px 0px";
  document.getElementById("imageTimes").style.display = "none";
  document.getElementById("imageMinus").style.display = "none";
  document.getElementById("imageDivide").style.display = "none";
  document.getElementById("imagePlus").style.display = "none";
  document.getElementById("image").style.display = "";
};
//Reset (AC)

//Titik
const dot = function (num) {
  hasil.value += num;
  hasil2 = hasil.value;
};
//Titik

//Tripled (000)
const tripleZero = function (num) {
  if (hasil.value.length === 1 && hasil.value === "0") {
    hasil.value = "0";
  } else {
    hasil.value += num;
    hasil.value += num;
    hasil.value += num;
    hasil2 = hasil.value;
  }
};
//Tripled (000)

//Delete
const del = function () {
  if (hasil.value.length <= 4) {
    if (hasil.value.length >= 2) {
      hasil.value = hasil.value.slice(0, -1);
    } else {
      hasil.value = 0;
    }
    hasil.style.fontSize = "50px";
    hasil.style.padding = "0px 0px 0px 0px";
  } else if (hasil.value.length >= 5 && hasil.value.length <= 13) {
    if (hasil.value.length >= 2) {
      hasil.value = hasil.value.slice(0, -1);
    } else {
      hasil.value = 0;
    }
    hasil.style.fontSize = "40px";
    hasil.style.padding = "11px 0px 0px 0px";
  }
};
//Delete
//Function
