function copy(e) {
  console.log(e.target);
  // document.execCommand('copy');
  //
  // if (inp && inp.select) {
  //   inp.select();
  //
  //   try {
  //     document.execCommand('copy');
  //     inp.blur();
  //   }
  //   catch (err) {
  //     alert('please press Ctrl/Cmd+C to copy');
  //   }
  // }
}


$(document).foundation();
document.querySelector('.email-link').addEventListener('click', copy, true);

$('a[href*="#"]:not([href="#"])').on('click', function() {
  if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
    if (target.length) {
      $('html, body').animate({
        scrollTop: target.offset().top
      }, 700);
      return false;
    }
  }
});
