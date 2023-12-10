"use strict";

/**
 * Imports
 */
import { addEventListener } from "./utils/event.js";


export const segment = function ($segment, callback) {
  const /** {NodeList} */ $segmentBtns = $segment.querySelectorAll("[data-segment-btn]");
  let /** {NodeElement} */ $lastSelectedSegmentBtn = $segment.querySelector("[data-segment-btn].selected");

  addEventListener($segmentBtns, "click", function () {
    $lastSelectedSegmentBtn.classList.remove("selected");
    this.classList.add("selected");
    $lastSelectedSegmentBtn = this;
    callback(this.dataset.segmentValue);
  });
}
