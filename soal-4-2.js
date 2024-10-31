// 2. Pasangan Terbesar

// Instruksi Soal:
// Buatlah sebuah fungsi yang menerima sebuah angka dan mencari dua angka yang berurutan di dalam angka tersebut, yang memiliki nilai paling besar. Fungsi akan mengembalikan pasangan angka berurutan tersebut.

// Note:
// Gunakan return untuk mengembalikan hasil output.
// Platform sudah menyediakan input angka, sehingga Anda hanya perlu membuat fungsi yang akan memproses input tersebut.
 
// Contoh 1:

// Input:
// 641573

// Output:
// 73

function findLargestPair(num) {
    const numStr = num.toString(); // Mengubah angka menjadi string
    let largestPair = ''; // Inisialisasi pasangan terbesar
  
    for (let i = 0; i < numStr.length - 1; i++) {
      const currentPair = numStr[i] + numStr[i + 1]; // Mengambil pasangan berurutan
  
      // Periksa apakah pasangan saat ini lebih besar dari pasangan terbesar yang ditemukan
      if (currentPair > largestPair) {
        largestPair = currentPair; // Update pasangan terbesar
      }
    }
  
    return largestPair; // Mengembalikan pasangan terbesar
  }
  
  // Contoh Pengujian
  console.log(findLargestPair(641573)); // Output: "73"
  console.log(findLargestPair(123456)); // Output: "56"
  console.log(findLargestPair(987654)); // Output: "98"
  