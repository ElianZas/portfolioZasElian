const formulario = document.getElementById('form');
const inputs = document.querySelectorAll('#form input');
const textareas = document.querySelectorAll('#form textarea');

const expresiones = {
	apellido: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	mensaje: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
}

const campos = {
  nombre: false,
  apellido: false,
  email: false,
  mensaje: false
}





const validarFormulario = (e) =>{
  switch (e.target.name){
    case 'nombre':
      if(expresiones.nombre.test(e.target.value)){
        document.getElementById('nombre').classList.remove('formulario--grupo-input-incorrecto');
        document.getElementById('nombre').classList.add('formulario--grupo-input-correcto');
        const svgElement = document.getElementById('nombresvg');
        // Actualiza los atributos del elemento SVG
        svgElement.setAttribute("class", "bi bi-check-circle");
        svgElement.setAttribute("viewBox", "0 0 16 16");
        
        // Remueve los elementos <path> existentes del SVG
        while (svgElement.firstChild) {
          svgElement.removeChild(svgElement.firstChild);
        }
        
        // Crea los nuevos elementos <path> y añádelos al SVG
        const path1 = document.createElementNS("http://www.w3.org/2000/svg", "path");
        path1.setAttribute("d", "M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z");
        
        const path2 = document.createElementNS("http://www.w3.org/2000/svg", "path");
        path2.setAttribute("d", "M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z");
        
        svgElement.appendChild(path1);
        svgElement.appendChild(path2);
        document.querySelector('.form-error').classList.remove('form-error-activo');

        campos['nombre'] = true;

      }else{
        document.getElementById('nombre').classList.add('formulario--grupo-input-incorrecto');
        // Obtén una referencia al elemento SVG que deseas modificar
        const svgElement = document.getElementById('nombresvg');
        // Obtén una referencia al elemento SVG que deseas modificar
        svgElement.setAttribute("class", "bi bi-x");
        svgElement.setAttribute("viewBox", "0 0 16 16");
        // Remueve los elementos <path> existentes del SVG
        while (svgElement.firstChild) {
          svgElement.removeChild(svgElement.firstChild);
        }

        // Crea los nuevos elementos <path> y añádelos al SVG
        const path1 = document.createElementNS("http://www.w3.org/2000/svg", "path");
        path1.setAttribute("d", "M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z");

        const path2 = document.createElementNS("http://www.w3.org/2000/svg", "path");
        path2.setAttribute("d", "M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z");

        svgElement.appendChild(path1);
        svgElement.appendChild(path2);
        
        document.querySelector('.form-error').classList.add('form-error-activo');
        campos['nombre'] = false;
      }

    break;

    case 'apellido':
      if(expresiones.apellido.test(e.target.value)){
        document.getElementById('apellido').classList.remove('formulario--grupo-input-incorrecto');
        document.getElementById('apellido').classList.add('formulario--grupo-input-correcto');
        const svgElement = document.getElementById('apellidosvg');
        // Actualiza los atributos del elemento SVG
        svgElement.setAttribute("class", "bi bi-check-circle");
        svgElement.setAttribute("viewBox", "0 0 16 16");
        
        // Remueve los elementos <path> existentes del SVG
        while (svgElement.firstChild) {
          svgElement.removeChild(svgElement.firstChild);
        }
        
        // Crea los nuevos elementos <path> y añádelos al SVG
        const path1 = document.createElementNS("http://www.w3.org/2000/svg", "path");
        path1.setAttribute("d", "M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z");
        
        const path2 = document.createElementNS("http://www.w3.org/2000/svg", "path");
        path2.setAttribute("d", "M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z");
        
        svgElement.appendChild(path1);
        svgElement.appendChild(path2);
        document.querySelector('#grupo-apellido p').classList.remove('form-error-activo');
        campos['apellido'] = true;

      }else{
        document.getElementById('apellido').classList.add('formulario--grupo-input-incorrecto');
        // Obtén una referencia al elemento SVG que deseas modificar
        const svgElement = document.getElementById('apellidosvg');
        // Obtén una referencia al elemento SVG que deseas modificar
        svgElement.setAttribute("class", "bi bi-x");
        svgElement.setAttribute("viewBox", "0 0 16 16");
        // Remueve los elementos <path> existentes del SVG
        while (svgElement.firstChild) {
          svgElement.removeChild(svgElement.firstChild);
        }

        // Crea los nuevos elementos <path> y añádelos al SVG
        const path1 = document.createElementNS("http://www.w3.org/2000/svg", "path");
        path1.setAttribute("d", "M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z");

        const path2 = document.createElementNS("http://www.w3.org/2000/svg", "path");
        path2.setAttribute("d", "M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z");

        svgElement.appendChild(path1);
        svgElement.appendChild(path2);
        
        document.querySelector('#grupo-apellido p').classList.add('form-error-activo');
        campos['apellido'] = false;
      }
    break;

  case 'email':
    if(expresiones.email.test(e.target.value)){
      document.getElementById('email').classList.remove('formulario--grupo-input-incorrecto');
      document.getElementById('email').classList.add('formulario--grupo-input-correcto');
      const svgElement = document.getElementById('emailsvg');
      // Actualiza los atributos del elemento SVG
      svgElement.setAttribute("class", "bi bi-check-circle");
      svgElement.setAttribute("viewBox", "0 0 16 16");
      
      // Remueve los elementos <path> existentes del SVG
      while (svgElement.firstChild) {
        svgElement.removeChild(svgElement.firstChild);
      }
      
      // Crea los nuevos elementos <path> y añádelos al SVG
      const path1 = document.createElementNS("http://www.w3.org/2000/svg", "path");
      path1.setAttribute("d", "M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z");
      
      const path2 = document.createElementNS("http://www.w3.org/2000/svg", "path");
      path2.setAttribute("d", "M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z");
      
      svgElement.appendChild(path1);
      svgElement.appendChild(path2);
      document.querySelector('#grupo-email p').classList.remove('form-error-activo');
      campos['email'] = true;

    }else{
      document.getElementById('email').classList.add('formulario--grupo-input-incorrecto');
      // Obtén una referencia al elemento SVG que deseas modificar
      const svgElement = document.getElementById('emailsvg');
      // Obtén una referencia al elemento SVG que deseas modificar
      svgElement.setAttribute("class", "bi bi-x");
      svgElement.setAttribute("viewBox", "0 0 16 16");
      // Remueve los elementos <path> existentes del SVG
      while (svgElement.firstChild) {
        svgElement.removeChild(svgElement.firstChild);
      }

      // Crea los nuevos elementos <path> y añádelos al SVG
      const path1 = document.createElementNS("http://www.w3.org/2000/svg", "path");
      path1.setAttribute("d", "M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z");

      const path2 = document.createElementNS("http://www.w3.org/2000/svg", "path");
      path2.setAttribute("d", "M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z");

      svgElement.appendChild(path1);
      svgElement.appendChild(path2);
      
      document.querySelector('#grupo-email p').classList.add('form-error-activo');
      campos['email'] = true;
    }
    break;


  case 'mensaje':
    if(expresiones.mensaje.test(e.target.value)){
      document.getElementById('mensaje').classList.remove('formulario--grupo-input-incorrecto');
      document.getElementById('mensaje').classList.add('formulario--grupo-input-correcto');
      const svgElement = document.getElementById('mensajesvg');
      // Actualiza los atributos del elemento SVG
      svgElement.setAttribute("class", "bi bi-check-circle");
      svgElement.setAttribute("viewBox", "0 0 16 16");
      
      // Remueve los elementos <path> existentes del SVG
      while (svgElement.firstChild) {
        svgElement.removeChild(svgElement.firstChild);
      }
      
      // Crea los nuevos elementos <path> y añádelos al SVG
      const path1 = document.createElementNS("http://www.w3.org/2000/svg", "path");
      path1.setAttribute("d", "M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z");
      
      const path2 = document.createElementNS("http://www.w3.org/2000/svg", "path");
      path2.setAttribute("d", "M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z");
      
      svgElement.appendChild(path1);
      svgElement.appendChild(path2);
      document.querySelector('#grupo-mensaje p').classList.remove('form-error-activo');
      campos[mensaje] = true;

    }else{
      document.getElementById('mensaje').classList.add('formulario--grupo-input-incorrecto');
      // Obtén una referencia al elemento SVG que deseas modificar
      const svgElement = document.getElementById('mensajesvg');
      // Obtén una referencia al elemento SVG que deseas modificar
      svgElement.setAttribute("class", "bi bi-x");
      svgElement.setAttribute("viewBox", "0 0 16 16");
      // Remueve los elementos <path> existentes del SVG
      while (svgElement.firstChild) {
        svgElement.removeChild(svgElement.firstChild);
      }

      // Crea los nuevos elementos <path> y añádelos al SVG
      const path1 = document.createElementNS("http://www.w3.org/2000/svg", "path");
      path1.setAttribute("d", "M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z");

      const path2 = document.createElementNS("http://www.w3.org/2000/svg", "path");
      path2.setAttribute("d", "M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z");

      svgElement.appendChild(path1);
      svgElement.appendChild(path2);
      
      document.querySelector('#grupo-mensaje p').classList.add('form-error-activo');
      campos['mensaje'] = true;
    }
    break;
  } 
}


textareas.forEach((textarea) =>{
  textarea.addEventListener('keyup', validarFormulario);
  textarea.addEventListener('blur', validarFormulario);

});


inputs.forEach((input) =>{
  input.addEventListener('keyup', validarFormulario);
  input.addEventListener('blur', validarFormulario);

});



formulario.addEventListener('submit', (e) => {
  e.preventDefault();
  if(campos.nombre && campos.apellido  && campos.email  && campos.mensaje ){
    formulario.submit();
    formulario.reset();
    document.getElementById('formulario--mensaje-exito').classList.add('formulario--mensaje-exito-activo');
    setTimeout(() =>{
      document.getElementById('formulario--mensaje-exito').classList.remove('formulario--mensaje-exito-activo');
    }, 3000);

    document.querySelectorAll('.formulario--grupo-input-correcto').forEach((icono) =>{
    icono.classList.remove('formulario--grupo-input-correcto');
    })
    var svgElement = document.getElementById('nombresvg');
    svgElement.remove();
    var svgElement = document.getElementById('apellidosvg');
    svgElement.remove();
    var svgElement = document.getElementById('emailsvg');
    svgElement.remove();
    var svgElement = document.getElementById('mensajesvg');
    svgElement.remove();

    
  }else{
    document.getElementById('formulario--mensaje-error').classList.add('formulario--mensaje-error-activo');
  }

});






// inputs.forEach((input) =>{
//   input.addEventListener('keyup', () => {
//     console.log('Tecla levantada');
//   });
// })



// const inputs = document.querySelectorAll(".campo");

// const validateInputs = ()=>{
//   const nombreValue= nombre.value;
//   const apellidoValue= apellido.value.trim();
//   const emailValue= email.value.trim();
//   const mensajeValue= mensaje.value.trim();

//   if(nombreValue === ''){
//       setError(nombre, 'Ingresa tu nombre');
//   }else{
//       setCorrecto(nombre);
//   }

// }



// inputs.forEach(ipt =>{
//   ipt.addEventListener("focus", () =>{
//       ipt.parentNode.classList.add("focus");
//       const icon = ipt.nextElementSibling;
//       icon.classList.add("focus");
//       ipt.parentNode.classList.add("not-empty");
//   })
//   ipt.addEventListener("blur", () =>{
//       ipt.parentNode.classList.remove("focus");
//       const icon = ipt.nextElementSibling; // Seleccionar el siguiente elemento después del input
//       icon.classList.remove("focus");
//   })
// })
