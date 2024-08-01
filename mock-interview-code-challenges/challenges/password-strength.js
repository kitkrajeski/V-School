function analyzePasswordStrength(password) {
  let strength = 0;
  if (password.length >= 8) {
    strength++;
  } else {
    return false;
  }
  /[a-z]/.test(password) ? strength++ : null;
  /[A-Z]/.test(password) ? strength++ : null;
  /\d/.test(password) ? strength++ : null;
  /[^a-zA-Z0-9]/.test(password) ? strength++ : null;

  return strength;
}

console.log(analyzePasswordStrength("Bikram-3")); // 4
console.log(analyzePasswordStrength("Bikram123!")); // 5
console.log(analyzePasswordStrength("password")); // 2
console.log(analyzePasswordStrength("PASSWORD123")); // 3
console.log(analyzePasswordStrength("123456")); // 1
console.log(analyzePasswordStrength("Pa$$w0rd!")); // 5
console.log(analyzePasswordStrength("short")); // false
