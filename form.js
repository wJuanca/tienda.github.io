document.addEventListener('DOMContentLoaded', function() {
  var questionSelect = document.getElementById('question');
  var submitButton = document.getElementById('submit-button');

  questionSelect.addEventListener('change', function() {
    if (questionSelect.value === 'otro') {
      submitButton.disabled = false;
      submitButton.classList.remove('disabled');
      submitButton.classList.add('enabled');
    } else {
      submitButton.disabled = true;
      submitButton.classList.remove('enabled');
      submitButton.classList.add('disabled');
    }
  });
//Respuestas automaticas para las preguntas frecuentes
  function getResponse(option) {
    var response = '';
    switch (option) {
      case 'opcion1':
        response = 'Respuesta para la opción 1';
        break;
      case 'opcion2':
        response = 'Respuesta para la opción 2';
        break;
      case 'opcion3':
        response = 'Respuesta para la opción 3';
        break;
      case 'opcion4':
        response = 'Respuesta para la opción 4';
        break;
      case 'opcion5':
        response = 'Respuesta para la opción 5';
        break;
      default:
        response = '';
    }
    return response;
  }
});
