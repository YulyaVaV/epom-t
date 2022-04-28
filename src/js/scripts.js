import {gsap} from "gsap";
import $ from "jquery";

const selectSingle = document.querySelector(".__select");
const selectSingle_title = selectSingle.querySelector(".__select__title");
const selectSingle_labels = selectSingle.querySelectorAll(".__select__label");

// eslint-disable-next-line no-console
console.log(selectSingle);

selectSingle_title.addEventListener("click", () => {
  if ("active" === selectSingle.getAttribute("data-state")) {
    selectSingle.setAttribute("data-state", "");
  } else {
    selectSingle.setAttribute("data-state", "active");
  }
});

// Close when click to option
for (let i = 0; i < selectSingle_labels.length; i++) {
  selectSingle_labels[i].addEventListener("click", (evt) => {
    selectSingle_title.textContent = evt.target.textContent;
    selectSingle.setAttribute("data-state", "");
  });
}


$(window).on("mousemove", function(e) {
  var w = $(window).width();
  var h = $(window).height();
  var offsetX = 0.5 - e.pageX / w;
  var offsetY = 0.5 - e.pageY / h;

  $(".parallax").each(function(i, el) {
    var offset = parseInt($(el).data("offset"));
    var translate = "translate3d(" + Math.round(offsetX * offset) + "px," + Math.round(offsetY * offset) + "px, 0px)";
    $(el).css({
      "-webkit-transform": translate,
      "transform": translate,
      "moz-transform": translate
    });
  });
});


gsap.to(".logo", {duration: 1.5, rotation: 360, scale: 1});

gsap.from(".description__frame", {
  duration: 1, 
  opacity: 0, 
  delay: 0.5, 
  y: -100, 
});

const line = document.getElementById("greenline");
line.style.width = 327;
