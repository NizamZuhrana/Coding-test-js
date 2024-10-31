// Instruksi Soal:
// Anda diminta untuk membuat sebuah fungsi yang memeriksa apakah terdapat jumlah 'o' dan 'x' yang sama dalam sebuah string. Program tidak bersifat case-sensitive, artinya huruf kapital tidak berpengaruh. String yang diberikan bisa mengandung karakter apa pun, tidak hanya 'o' atau 'x'.

// Buatlah fungsi yang menerima sebuah string sebagai input dan mengembalikan nilai boolean:

// true jika jumlah 'o' dan 'x' dalam string adalah sama, atau jika tidak ada 'o' dan 'x' sama sekali.
// false jika jumlah 'o' dan 'x' tidak sama.
 
// Notes:
// Program harus mengembalikan nilai menggunakan return.
// Input sudah disediakan oleh codework, jadi Anda hanya perlu fokus pada implementasi logika untuk memeriksa jumlah 'o' dan 'x' dalam string.
 

function XO(str) {
// Write your code here
// Konversi string menjadi huruf kecil (case-insensitive)
str = str.toLowerCase();

// Inisialisasi penghitung 'o' dan 'x'
let countX = 0
let countO = 0

// Iterasi melalui setiap karakter dalam string
for (let char of str){
    if (char === 'x'){
        countX++;
    } else if (char === 'o'){
        countO++;
    }
}
// Mengembalikan true jika jumlah 'o' dan 'x' sama atau tidak ada sama sekali
return countO === countX
}

console.log(XO('absdi'));
console.log(XO('xxoo'));
console.log(XO('xsnxsoqm'));
