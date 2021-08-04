/* these functions are made by me (forester2015), not the offical AoPS code */

/**
 * Developer info:
 *  - Font/CORS errors: It seems like AoPs doesn't have the Roboto-Regular.ttf
 *    file anymore, but it is still in their CSS. This makes an error on the
 *    real website too. This shouldn't be much of a problem.
 **/

function show_hide(id) {
  if (document.querySelector(`#${id}`).style.display == "none") {
    document.querySelector(`#${id}`).style.display = "block";
  } else {
    document.querySelector(`#${id}`).style.display = "none";
  }
}

function show_tip(triangle, tip) {
  document.querySelector(`#${triangle}`).style.display = "block";
  document.querySelector(`#${tip}`).style.display = "block";
}

function hide_tip(triangle, tip) {
  document.querySelector(`#${triangle}`).style.display = "none";
  document.querySelector(`#${tip}`).style.display = "none";
}
