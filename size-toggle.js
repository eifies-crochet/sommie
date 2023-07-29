const LARGER_TEXT_LOCAL_STORAGE_KEY = "useLargerText";
const DEFAULT_LARGER_TEXT_VALUE = true;
const LARGER_TEXT_CLASSNAME = "larger-text";
const TOGGLE_BUTTON_ID = "size-toggle";

function getLargerTextValue() {
  return JSON.parse(localStorage.getItem(LARGER_TEXT_LOCAL_STORAGE_KEY)) ?? DEFAULT_LARGER_TEXT_VALUE;
}

function setToggleButtonPressed(valueStr) {
  document.getElementById(TOGGLE_BUTTON_ID).setAttribute("aria-checked", valueStr);
}

function setLargerText() {
  const largerText = getLargerTextValue();
  document.body.classList.toggle(LARGER_TEXT_CLASSNAME, largerText);
  setToggleButtonPressed(JSON.stringify(largerText));
}

function toggleLargerText() {
  const newLargerText = document.body.classList.toggle(LARGER_TEXT_CLASSNAME);
  const largerTextStr = JSON.stringify(newLargerText);
  setToggleButtonPressed(largerTextStr);
  localStorage.setItem(LARGER_TEXT_LOCAL_STORAGE_KEY, largerTextStr);
}
