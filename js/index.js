window.onload = () => {
  let tweet = document.getElementById("tweetInput")

  tweet.oninput = updateCharRem
}

function updateCharRem(e) {
  let tweetText = e.target.value;
  let charRem = document.getElementById("charRemainingNum")
  if (tweetText.length > 160) {
    e.target.value = tweetText.substring(0, 160);
    charRem.innerHTML = 0
  } else {
    charRem.innerHTML = (160 - tweetText.length)
  }
}
