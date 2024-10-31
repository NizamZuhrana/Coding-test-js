// 1. Kalkulasi Poin

// Instruksi Soal:
// Buatlah sebuah fungsi bernama findTotal yang menerima sebuah array dari angka-angka. Fungsi ini akan menghitung total poin berdasarkan aturan berikut:

// Tambah 2 poin untuk setiap bilangan genap.
// Tambah 3 poin untuk setiap bilangan ganjil, kecuali angka 7.
// Tambah 6 poin untuk setiap angka 7 yang ada di dalam array.
// Jika array kosong atau tidak ada angka di dalamnya, maka fungsi harus mengembalikan false.
 
// Note:
// Gunakan return untuk mengembalikan hasil output.
// Platform sudah menyediakan input array, sehingga Anda hanya perlu membuat fungsi findTotal yang memproses semua jenis input.
 
// Contoh 1:

// Input:
// 1, 2, 3

// Output:
// 8

function findTotal(numbers) {
    if (numbers.length === 0) return false; // Mengembalikan false jika array kosong
  
    let totalPoints = 0; // Inisialisasi total poin
  
    for (let i = 0; i < numbers.length; i++) {
      const num = numbers[i];
  
      if (num % 2 === 0) {
        totalPoints += 2; // Tambah 2 poin untuk bilangan genap
      } else if (num === 7) {
        totalPoints += 6; // Tambah 6 poin untuk angka 7
      } else {
        totalPoints += 3; // Tambah 3 poin untuk bilangan ganjil lainnya
      }
    }
  
    return totalPoints; // Mengembalikan total poin
  }
  
  // Contoh Pengujian
  console.log(findTotal([1, 2, 3])); // Output: 8
  console.log(findTotal([])); // Output: false
  console.log(findTotal([7, 2, 4, 1])); // Output: 14
  console.log(findTotal([5, 7, 8, 10])); // Output: 15
  