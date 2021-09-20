$(document).ready(function () {
  $('#thumbnails').slides();
});

(function($) {
  $.fn.extend({
    slides: function() {

      function get_href(el) {
        hash = $(el).find('a').attr('href');

        if (hash)
          return hash.substring(0, hash.length - 4);
        else
          return false;
      }

      function set_on_focus(el) {
        $(el).addClass('on_focus');

        if (get_href(el))
          $(get_href(el)).show();
        else
          return false;

        $.each((el).siblings('li'), function() {
          $(this).removeClass('on_focus');
          $(get_href(this)).hide();
        });
      }

      return this.each(function() {
        var self = this;

        $(this).find('li > a').each(function() {
          $(this).attr('href',$(this).attr('href') + '-tab');
        });

        function parse_hash() {
          if (location.hash)
            set_on_focus($(self).find('a[href=' + location.hash + ']').parent());
        }

        if (location.hash)
          parse_hash();

        setInterval(parse_hash,100);

        $(this).find('li').each(function() {
          if($(this).hasClass('on_focus'))
            $(get_href(this)).show();
          else
            $(get_href(this)).hide();
        });

      });
    }
  });
})(jQuery)
