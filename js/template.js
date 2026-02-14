export default function returnTemplate(tweet) {
  return `
        <div class="tweet container d-flex flex-column w-100 gap-3">
          <div class="tweetTop d-flex gap-3 h-50 w-100">
            <img
              src="images/circle-user.svg"
              alt="user profile"
              class="userProfile"
            />
            <div class="d-flex flex-column gap-2">
              <p class="tweetUser m-0">
                <span class="fw-bold tweetUserName">Silvestre Espinoza</span>
                <span class="tweetUserId text-dark"
                  >@silvestre.utrgv - 5hr</span
                >
              </p>
              <p class="tweetContent m-0">${tweet}</p>
            </div>
          </div>
          <div
            class="tweetBottom d-flex h-25 w-100 justify-content-around align-items-center gap-3"
          >
            <div class="stat d-flex gap-1">
              <img
                src="images/comment.svg"
                alt="comment icon"
                class="statIcon"
              />
              <span class="statCounter">1</span>
            </div>
            <div class="stat d-flex gap-1">
              <img
                src="images/retweet.svg"
                alt="retweet icon"
                class="statIcon"
              />
              <span class="statCounter">1</span>
            </div>
            <div class="stat d-flex gap-1">
              <img src="images/like.svg" alt="like icon" class="statIcon" />
              <span class="statCounter">1</span>
            </div>
            <div class="stat d-flex gap-1">
              <img src="images/share.svg" alt="share icon" class="statIcon" />
              <span class="statCounter">1</span>
            </div>
          </div>
        </div>
  `
}
