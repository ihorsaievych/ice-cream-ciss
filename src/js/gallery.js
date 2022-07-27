jQuery(function () {
  var $gallery = jQuery('#gallery');

  jQuery('picture', $gallery).hover(function () {
    $gallery.find('picture').removeClass('big');
    jQuery(this).addClass('big');
  });
});
