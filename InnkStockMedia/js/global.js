"use strict";

/**
 * Imports
 */
import { ripple } from "./utils/ripple.js";

/**
 * Header On-Scroll State
 */

const /** {NodeElement} */ $header = document.querySelector("[data-header]");

window.addEventListener("scroll", () => {
  $header.classList[window.scrollY > 50 ? "add" : "remove"]("active");
})

/**
 * Adds a ripple effect
 */

const /** {NodeList} */ $rippleElems = document.querySelectorAll("[data-ripple]");
$rippleElems.forEach($rippleElem => ripple($rippleElem));

/**
 * Filter Functionality
 */
window.filterObj = {};