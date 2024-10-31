// Instruksi Soal:
// Buatlah sebuah fungsi JavaScript yang dapat mencari nilai maksimum (max) dan minimum (min) dari sebuah array berisi angka-angka. Fungsi tersebut harus mengembalikan objek yang berisi nilai maksimum dan minimum dari array tersebut.

 
// Note:
// Anda tidak diperbolehkan menggunakan metode built-in seperti Math.max() atau Math.min() secara langsung pada array.
// Gunakan logika perulangan atau metode lain untuk menemukan nilai maksimum dan minimum.
// Program harus mengembalikan nilai menggunakan return.
// Input sudah disediakan oleh codework, jadi Anda hanya perlu fokus pada implementasi logika dari soal.



function maxMin(array) {
    // Write your code here
    // Inisialisasi nilai awal untuk max dan min dari elemen pertama array
    let max = array [0]
    let min = array [0]

    // Iterasi melalui array untuk menemukan nilai max dan min
    for (let i = 1; i < array.length; i++){
        if (array[i] > max){
        max = array[i]
        }
        if (array[i] < min){
            min = array[i]
        }
    }
    // Mengembalikan objek yang berisi nilai maksimum dan minimum
    return {
        max: max,
        min: min
    };
}

// Test cases

console.log(maxMin([1, 2, 3, 4, 5])); // Output: { max: 5, min: 1 }
console.log(maxMin([-1, -2, -3, -4, -5])); // Output: { max: -1, min: -5 }
console.log(maxMin([0, 0, 0, 0, 0])); // Output: { max: 0, min: 0 }
console.log(maxMin([1, 2, 3, 4, 5, 5, 5, 5])); // Output: { max: 5, min: 1 }