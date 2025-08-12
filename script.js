function guess(choice) {
  const options = ['Con', 'Cái', 'Hoà'];
  const random = options[Math.floor(Math.random() * options.length)];
  const resultText = document.getElementById("result");

  if (choice === random) {
    resultText.textContent = `🎉 Đúng rồi! Bạn chọn ${choice}, kết quả là ${random}`;
  } else {
    resultText.textContent = `😢 Sai rồi! Bạn chọn ${choice}, kết quả là ${random}`;
  }
}
