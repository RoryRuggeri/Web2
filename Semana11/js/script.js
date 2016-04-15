$().ready(function() {
  $("#myform").validate({
    rules: {
      name: "required",
      lastname: "required",
      message: "required",
      city: "required",
      country: "required",
      phone: "required",
      code: {
        required: true,
        minlength: 16,
        maxlength: 16,
        number: true
      },
      activity: {
      	required: true
      },
      email: {
      required: true,
      email: true
      },
    },
    messages: {
      name: "Please write your name",
      lastname: "Please write your lastname",
      city: "Please write your city",
      country: "Please write your country",
      phone: "Phone number please",
      message: "This one's a must mate",
      code: {
        required: "This one's a must",
        minlength: "Su c&oacute;digo NIF contiene 16 d&iacute;gitos",
        maxlength: "Su c&oacute;digo NIF contiene 16 d&iacute;gitos",
        number: "Su c&oacute;digo NIF contiene 16 d&iacute;gitos"
      },
      activity: {
        required: "Por favor selecciona una actividad"
      },
      email: {
        required: "Email, please!",
        email: "Write a muggle valid e-mail"
      },
    }
  });
});

jQuery(function($){
   $("#phone_number").mask("(999) 999-9999");
});