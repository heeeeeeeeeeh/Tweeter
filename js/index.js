import template from "./template.js"
let tweet = document.getElementById("tweetInput")
let charRem = document.getElementById("charRemainingNum")
let tweetSubmit = document.getElementById("draftTweetButton")

window.onload = () => {
  tweet.oninput = updateCharRem
  tweetSubmit.onclick = addTweet
}

function updateCharRem(e) {
  let tweetText = e.target.value;
  if (tweetText.length >= 160) {
    e.target.value = tweetText.substring(0, 160);
    charRem.innerHTML = 0
    tweetSubmit.setAttribute("disabled", "")
  } else {
    tweetSubmit.removeAttribute("disabled")
    charRem.innerHTML = (160 - tweetText.length)
  }
}

function addTweet() {
  let draftTweet = document.getElementById("draftTweet")
  let t = template(tweet.value)
  const fragment = document.createRange().createContextualFragment(t);
  draftTweet.after(fragment)
  tweet.value = ""
  charRem.innerHTML = 160
}
