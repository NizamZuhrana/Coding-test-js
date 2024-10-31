// 2. Calculate Vowels

// Instruksi Soal:
// Buat sebuah fungsi dalam Javascript untuk menghitung jumlah huruf vokal dalam sebuah kalimat (string). Huruf vokal yang akan dihitung terdiri dari 'a', 'i', 'u', 'e', 'o', baik huruf besar maupun huruf kecil.

// Fungsi ini akan menerima satu input berupa string, dan kamu harus mengembalikan jumlah total huruf vokal yang ada dalam string tersebut.

 
// Note:
// Huruf vokal yang dihitung adalah: 'a', 'i', 'u', 'e', 'o'. Ini berlaku untuk huruf kecil dan huruf besar.
// Gunakan return untuk mengembalikan hasil jumlah vokal.
// Input untuk string sudah disediakan, kamu hanya perlu membuat logika untuk menghitung jumlah vokal tersebut.
// Harap pastikan fungsi yang kamu buat dapat menangani semua jenis input string.
 

// Contoh 1:
// Input :
// "Selamat Pagi Duniaa"
 
// Output:
// 9

// Penjelasan:
// Dalam kalimat tersebut terdapat 9 huruf vokal yaitu 4 huruf 'a', 2 huruf 'i', 1 huruf 'u', dan 1 huruf 'e'.

// Contoh 2:
// Input:
// "Halo aku sukaa ngoding"

// Output:
// 9

// Penjelasan:
// Kalimat ini memiliki 9 huruf vokal yaitu 5 huruf 'a', 1 huruf 'i', 1 huruf 'u', 1 huruf 'o', dan 1 huruf 'e'.

function countVowels(str) {
    // Write your code here
// Definisikan daftar huruf vokal
  const vokal = ['a', 'e', 'i', 'o', 'u'];

  // Ubah string input menjadi huruf kecil agar tidak sensitif terhadap huruf besar
  const strHurufKecil = str.toLowerCase();

  // Inisialisasi penghitung untuk vokal
  let jumlahVokal = 0;

  // Loop melalui setiap karakter dalam string
  for (let char of strHurufKecil) {
    // Jika karakter adalah vokal, tambahkan ke penghitung
    if (vokal.includes(char)) {
      jumlahVokal++;
    }
  }
  // Kembalikan jumlah vokal
  return jumlahVokal;
}