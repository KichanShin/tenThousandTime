const $body = document.querySelector("body");
const $jobTxt = document.querySelector("#jobTxt");
const $dateTxt = document.querySelector("#dateTxt");
const $btnHand = document.querySelector("#btnHand");
const $job = document.querySelector("#job");
const $date = document.querySelector("#date");
const $btnYellow = document.querySelector(".btn-bottom-yellow");
// 팝업 관련
const $black = document.querySelector(".black");
const $closeBtn = document.querySelector("#close-btn");

$btnHand.addEventListener("click", function () {
  if ($jobTxt.value !== "" && $dateTxt.value !== "") {
    const trainingDays = parseInt($dateTxt.value);
    if (trainingDays > 0) {
      $job.textContent = $jobTxt.value;
      $date.textContent = Math.floor(10000 / trainingDays);
    } else {
      alert("훈련 기간은 1 이상이어야 합니다.");
    }
  } else {
    alert("값을 입력해주세요.");
  }
});
// 최대 24시간 까지만 받을 수 있게 하는 코드
$dateTxt.addEventListener("input", () => {
  if ($dateTxt.value > 24) {
    $dateTxt.value = 24;
  }
});

// 모달창 뜨면 스크롤 안되게 하는 코드
$btnYellow.addEventListener("click", () => {
  $black.style.display = "block";
  $body.style.overflow = "hidden";
});

$closeBtn.addEventListener("click", () => {
  $black.style.display = "none";
  $body.style.overflow = "auto";
});

$job.addEventListener("input", function () {
  if (!isNaN($job.value)) {
    $job.value = $job.value.slice(0, -1);
  }
});
