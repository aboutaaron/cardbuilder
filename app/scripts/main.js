'use strict';

;(function () {
    function readURL(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();

            reader.onload = function (e) {
                $('.chosen-image').attr('src', e.target.result);
            };

            reader.readAsDataURL(input.files[0]);
        }
    }

    $('#imageUpload').change(function (){
        readURL(this);
    });

    $('#sometext').on('change keypress paste focus textInput input', function () {
        $('.message').text(this.value);
    });

    $('.pattern').on('click', function (event) {
        var bg = 'url('+event.target.src+')';
        $('.result').css('background-image', bg);
    });
})();
