(function ($) {
  'use strict';

  Drupal.behaviors.btnIsLoading = {
    attach: function(context, settings) {

      $(document).once('btn-loading-submit-processed').on('submit', 'form', function(e) {
        $(this).find('[type="submit"]').addClass('btn-is-loading');
      });

      $(document).once('btn-loading-click-processed').on('click', '.btn-loader:not([type="submit"]), .modal .btn-success[type="submit"]', function(e) {
        $(this).addClass('btn-is-loading');
      });

    }
  };

  Drupal.behaviors.btnIndicator = {
    attach: function(context, settings) {

      $(document).once('btn-indicator-click-processed').on('click', '.btn-indicator', function(e) {
        $('.btn-indicator-active').removeClass('btn-indicator-active');
        $(this).addClass('btn-indicator-active');
      });

    }
  };

}(jQuery));
