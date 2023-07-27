console.log("I'm in contentScript");

function clickSeeMore() {
  let buttons = document.querySelectorAll('div[role="button"]');

  Array.from(buttons).forEach((button, index) => {
    if (
      button.classList.contains("x1s688f") &&
      button.parentNode.parentNode.classList.contains("x126k92a") //button must be inside a post
    ) {
      button.click();
    }
  });
}

setInterval(clickSeeMore, 2000);
