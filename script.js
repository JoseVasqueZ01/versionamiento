//var Nombre = prompt("Hola ¿Cual es tu nombre?");
//alert("Hola " + Nombre);

function askName() {
    Swal.fire({
      title: 'Hola ¿Cual es tu nombre?',
      input: 'text',
      inputAttributes: {
        autocapitalize: 'off'
      },
      showCancelButton: true,
      confirmButtonText: 'Enviar',
      showLoaderOnConfirm: true,
      preConfirm: (name) => {
        return name;
      },
      allowOutsideClick: () => !Swal.isLoading()
    }).then((result) => {
      if (result.isConfirmed) {
        const name = result.value;
        Swal.fire({
          title: `¡Hola, ${name}!`,
          text: 'Bienvenido a nuestra página.',
          icon: 'success'
        });
      }
    });
  }