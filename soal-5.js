// 1. Word Formatter

// Instruksi Soal:
// Anda diminta untuk membuat sebuah fungsi yang dapat merapikan sebuah string acak. Setiap kata dalam string tersebut harus memiliki huruf kapital di awalnya.
 
// Notes:
// Untuk menampilkan output, silakan gunakan Return.
// Codework sudah menyediakan inputan, sehingga Anda hanya perlu membuat codingan yang mengelola inputan tersebut.
 
// Contoh 1:
// Input:
// SeLamAT PAGi semua halOo

// Output:
// Selamat Pagi Semua Haloo

function formatWords(inputString) {
    // Memisahkan input menjadi kata-kata, mengubah setiap kata menjadi kapital di awal
    return inputString
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join(' ');
}

// Contoh penggunaan
const inputString = "SeLamAT PAGi semua halOo";
const outputString = formatWords(inputString);
console.log(outputString);  // Output: Selamat Pagi Semua Haloo
