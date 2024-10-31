function removeDuplicates(input) {

    // 1. Buat variabel untuk menyimpan hasil akhir
    let result = ""; 
    // 2. Buat set untuk melacak karakter yang sudah muncul
        let seen = new Set();
    
    // 3. Munculkan huruf pertama, kemudian munculkan huruf lain yang berbeda
    for (let i = 0; i < input.length; i++) {
        if (!seen.has(input[i])) {result += input[i]; seen.add(input[i]);}
    }
    // 4. Munculkan hasil
    return result; 
    }
    
    console.log(removeDuplicates("HAAALOO SEEMUAAA")); // Output: HALLSOEUA
    