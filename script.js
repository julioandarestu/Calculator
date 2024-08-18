"use strict";

// Tampilan Awal
document.getElementById("history").value = "";
// Tampilan Awal

// Variabel
const hasil = document.getElementById("hasil");
let hasil2 = ""; //Variabel untuk menyimpan hasil untuk history
const history = document.getElementById("history");
// Variabel

//Function
const addNumber = function (num) {
  if (hasil2 === 0) {
    //Merestart nilai jika sudah dioperasikan >=1
    hasil.value = 0;
    if (hasil.value.length === 1 && hasil.value === "0") {
      hasil.value = ""; // Menghilangkan angka 0
      if (hasil.value.length <= 4) {
        hasil.value += num;
        hasil2 = hasil.value;
      } else if (hasil.value.length >= 9 && hasil.value.length <= 13) {
        hasil.value += num;
        hasil2 = hasil.value;
        hasil.style.fontSize = "20px";
        hasil.style.padding = "10px 0px 0px 0px";
      } else if (hasil.value.length >= 5 && hasil.value.length <= 8) {
        hasil.value += num;
        hasil2 = hasil.value;
        hasil.style.fontSize = "30px";
        hasil.style.padding = "50px 0px 0px 0px";
      } else {
        hasil.value = "0";
        hasil.style.fontSize = "40px";
        alert("Too many numbers");
      }
    } else {
      if (hasil.value.length <= 4) {
        hasil.value += num;
        hasil2 = hasil.value;
        console.log(hasil.value);
      } else if (hasil.value.length >= 9 && hasil.value.length <= 13) {
        hasil.value += num;
        hasil2 = hasil.value;
        hasil.style.fontSize = "20px";
        hasil.style.padding = "10px 0px 0px 0px";
      } else if (hasil.value.length >= 5 && hasil.value.length <= 8) {
        hasil.value += num;
        hasil2 = hasil.value;
        hasil.style.fontSize = "30px";
        hasil.style.padding = "50px 0px 0px 0px";
      } else {
        hasil.value = "0";
        hasil.style.fontSize = "40px";
        alert("Too many numbers");
      }
    }
  } else {
    if (hasil.value.length === 1 && hasil.value === "0") {
      hasil.value = ""; // Menghilangkan angka 0
      if (hasil.value.length <= 4) {
        hasil.value += num;
        hasil2 = hasil.value;
      } else if (hasil.value.length >= 9 && hasil.value.length <= 13) {
        hasil.value += num;
        hasil2 = hasil.value;
        hasil.style.fontSize = "20px";
        hasil.style.padding = "30px 0px 0px 0px";
      } else if (hasil.value.length >= 5 && hasil.value.length <= 8) {
        hasil.value += num;
        hasil2 = hasil.value;
        hasil.style.fontSize = "30px";
        hasil.style.padding = "50px 0px 0px 0px";
      } else {
        hasil.value = "0";
        hasil.style.fontSize = "40px";
        alert("Too many numbers");
      }
    } else {
      if (hasil.value.length <= 4) {
        hasil.value += num;
        hasil2 = hasil.value;
        console.log(hasil.value);
      } else if (hasil.value.length >= 9 && hasil.value.length <= 13) {
        hasil.value += num;
        hasil2 = hasil.value;
        hasil.style.fontSize = "20px";
        hasil.style.padding = "30px 0px 0px 0px";
      } else if (hasil.value.length >= 5 && hasil.value.length <= 8) {
        hasil.value += num;
        hasil2 = hasil.value;
        hasil.style.fontSize = "30px";
        hasil.style.padding = "50px 0px 0px 0px";
        console.log(hasil.value);
      } else {
        hasil.value = "0";
        hasil.style.fontSize = "40px";
        history.value = "";
        hasil.style.padding = "0px 0px 0px 0px";
        alert("Too many numbers");
      }
    }
  }
};

const addOperator = function (num) {
  if (hasil.value.length === 1 && hasil.value === "0") {
    hasil.value = "";
    hasil.value += num;
    hasil2 = hasil.value;
    hasil.replace("+", "");
  } else {
    hasil.value += num;
    hasil2 = hasil.value;
  }
};

const equal = function () {
  if (hasil.value.length <= 12) {
    let historyDummy = hasil2; // Variabel untuk menampilkan history
    hasil.value = eval(hasil.value);
    history.value = historyDummy + ` = ${hasil.value}`;
    hasil2 = 0;
  } else {
    alert("Sorry Too Many Numbers");
  }
};

const reset = function () {
  hasil.value = 0;
  history.value = "";
  hasil.style.fontSize = "40px";
  hasil.style.padding = "0px 0px 0px 0px";
};

const dot = function (num) {
  hasil.value += num;
  hasil2 = hasil.value;
};

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

const del = function () {
  if (hasil.value.length <= 4) {
    if (hasil.value.length >= 2) {
      hasil.value = hasil.value.slice(0, -1);
    } else {
      hasil.value = 0;
    }
    hasil.style.fontSize = "50px";
    hasil.style.padding = "0px 0px 0px 0px";
  } else if (hasil.value.length >= 9 && hasil.value.length <= 13) {
    if (hasil.value.length >= 2) {
      hasil.value = hasil.value.slice(0, -1);
    } else {
      hasil.value = 0;
    }
    hasil.style.fontSize = "20px";
    hasil.style.padding = "30px 0px 0px 0px";
  } else if (hasil.value.length >= 5 && hasil.value.length <= 8) {
    if (hasil.value.length >= 2) {
      hasil.value = hasil.value.slice(0, -1);
    } else {
      hasil.value = 0;
    }
    hasil.style.fontSize = "30px";
    hasil.style.padding = "50px 0px 0px 0px";
  }
};
//Function
