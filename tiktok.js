function tikTok() {
  for (let i = 0; i < 100; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
      console.log("TikTok");
    } else if (i % 5 == 0) {
      console.log("Tok");
    } else if (i % 3 == 0) {
      console.log("Tik");
    } else {
      console.log(i);
    }
  }
}

tikTok();
