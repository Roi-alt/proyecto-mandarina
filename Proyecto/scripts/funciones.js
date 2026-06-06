document.addEventListener('focusin', function (e) {
    if (e.target.closest('.swal2-container')) {
        e.stopImmediatePropagation();
    }
});
document.addEventListener("DOMContentLoaded", function () {
    /*nueva linea para las rutas*/
    const esSubcarpeta = window.location.pathname.includes('/Games/') || window.location.pathname.includes('/components/');
    /*nueva linea para las rutas */
    const rutaBase = esSubcarpeta ? "../" : "./";
    
    const NavCom = `
        <header class="site-header">
            <nav class="navbar navbar-expand-lg navbar-dark px-3">
                <div class="container-fluid">
                    <img src="https://static.vecteezy.com/system/resources/thumbnails/036/218/371/small/ai-generated-futuristic-blue-robot-playing-virtual-reality-games-generated-by-ai-free-photo.jpg"
                        alt="Logo" style="width: 50px; height: 50px; object-fit: cover;" class="me-2 rounded">
                    <a class="navbar-brand fw-bold" href="${rutaBase}index.html">PAPUJUEGOS</a>
                    <button class="navbar-toggler border-0" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navContent">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse" id="navContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item"><a class="nav-link" id="nav-tienda" href="${rutaBase}index.html">Home</a></li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                                    data-bs-toggle="dropdown" aria-expanded="false">
                                    Comunidad
                                </a>
                                <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDropdown">
                                    <li><a class="dropdown-item" href="#">Discusiones</a></li>
                                    <li><a class="dropdown-item" href="#">Workshop</a></li>
                                    <li><a class="dropdown-item" href="#">Mercado</a></li>
                                    <li><a class="dropdown-item" href="#">Retransmisiones</a></li>
                                </ul>
                            </li>
                            <li class="nav-item"><a class="nav-link" id="nav-acerca" href="#">Acerca de</a></li>
                            <li class="nav-item"><a class="nav-link" id="nav-soporte" href="#">Soporte</a></li>
                        </ul>
                        
                        <div class="d-flex flex-column flex-lg-row align-items-lg-center gap-3">
                            <div class="d-flex align-items-center gap-3" id="sesion">
                                <button class="small fw-bold text-uppercase btn btn-outline-light" onclick="Login()">Iniciar Sesion</button>
                                <button class="btn-gamer" onclick="SignUp()">Registrarse</button>
                            </div>

                            <div class="d-none align-items-center gap-3" id="perfil">
                                <div class="perfil-avatar" id="avatar-inicial">U</div>
                                <span class="username-nav" id="nav-username">Usuario</span>
                                <i class="bi bi-box-arrow-right btn-logout" onclick="Logout()" title="Cerrar Sesión" style="cursor: pointer;"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>`;
    document.body.insertAdjacentHTML('afterbegin', NavCom);
    VerUsu();
});
document.addEventListener("DOMContentLoaded", function () {
    const ModCom = `
        <div class="modal fade" id="mComp" tabindex="-1" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content tarco border-0">                   
                    <div class="modal-header border-0 pb-0 justify-content-center position-relative">
                        <h3 class="tilfor pb-3 mb-0 text-center w-100">Formulario de Compra</h3>
                        <button type="button" class="btn-close btn-close-white position-absolute end-0 top-0 mt-3 me-3" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>                    
                    <div class="modal-body p-0 pt-4">
                        <div id="CajErr" class="alerr mb-4"></div>                        
                        <form name="F" id="forComp" onsubmit="valfor(event)">  
                            <div class="mb-3">
                                <label for="f-correo" class="form-label lbl-form">Correo Electrónico</label>
                                <input type="text" id="f-correo" class="form-control CoInp" placeholder="nombre@ejemplo.com">
                            </div>    
                            <div class="mb-3">
                                <label for="f-ci" class="form-label lbl-form">Cédula de Identidad (8 dígitos)</label>
                                <input type="text" id="f-ci" class="form-control CoInp" placeholder="Ej. 12345678" maxlength="8">
                            </div>                
                            <div class="mb-3">
                                <label for="f-tel" class="form-label lbl-form">Teléfono / Celular (7 u 8 dígitos)</label>
                                <input type="text" id="f-tel" class="form-control CoInp" placeholder="Ej. 71234567" maxlength="8">
                            </div>
                            <div class="mb-4">
                                <label for="f-tarjeta" class="form-label lbl-form">Número de Tarjeta (Solo dígitos)</label>
                                <input type="text" id="f-tarjeta" class="form-control CoInp" placeholder="0000000000000000" maxlength="16">
                            </div>                           
                            <div class="text-center mt-3 mb-3">
                                <a class="ticket" href="#" onclick="CanTi(event)" onmouseover="this.style.color='#00FFAE'" onmouseout="this.style.color='rgba(255, 255, 255, 0.5)'">
                                    ¿Tienes un ticket? Haz clic aquí
                                </a>
                            </div>
                            <div id="BloDes" class="mb-4 p-3 text-center text-uppercase fw-bold desc">
                                ¡Gozarás de un descuento del 25% en tu compra!
                                <span class="Nup" id="NewPre"></span>
                            </div>                           
                            <button type="submit" class="btpro">PROCESAR COMPRA</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>`;
    document.body.insertAdjacentHTML('beforeend', ModCom);
});
function Comprar(precio) {
    preOr = parseFloat(precio);
    document.getElementById('forComp').reset();
    document.getElementById('CajErr').style.display = 'none';
    document.getElementById('BloDes').style.display = 'none';
    var ConMod = document.getElementById('mComp');
    var M = new bootstrap.Modal(ConMod);
    M.show();
}
function Contacto() {
    Swal.fire({
        icon: 'info',
        title: 'SOPORTE Y CONTACTO',
        html: `
                <div class="text-start px-1 gen">
                    <div class="mb-3">
                        <label class="form-label lbl-general">Nombre Completo</label>
                        <input type="text" id="gen-nombre" class="form-control inputs" placeholder="Nombre">
                    </div>

                    <div class="mb-3">
                        <label class="form-label lbl-general">Correo Electrónico</label>
                        <input type="email" id="gen-correo" class="form-control inputs" placeholder="nombre@ejemplo.com">
                    </div>
                    
                    <div class="mb-2">
                        <label class="form-label lbl-general">Mensaje o Consulta</label>
                        <textarea id="gen-mensaje" class="form-control inputs" rows="4" placeholder="Escribe tu mensaje aquí"></textarea>
                    </div>
                </div>
            `,
        background: '#1A0F2E',
        customClass: {
            popup: 'pop-general',
            icon: 'ico',
            title: 'tit-general',
            confirmButton: 'btn-pri',
            cancelButton: 'btn-sec'
        },
        buttonsStyling: false,
        showCancelButton: true,
        confirmButtonText: 'ENVIAR',
        cancelButtonText: 'CANCELAR',
        focusConfirm: false,
        preConfirm: () => {
            const nombre = Swal.getPopup().querySelector('#gen-nombre').value.trim();
            const correo = Swal.getPopup().querySelector('#gen-correo').value.trim();
            const mensaje = Swal.getPopup().querySelector('#gen-mensaje').value.trim();
            if (!nombre || !correo || !mensaje) {
                Swal.showValidationMessage('Por favor, completa todos los campos.');
                return false;
            }
            if (!correo.includes('@') || !correo.includes('.')) {
                Swal.showValidationMessage('Por favor, ingresa un correo válido.');
                return false;
            }
            return { nombre, correo, mensaje };
        }
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire({
                title: '¡Recibido!',
                text: `Gracias ${result.value.nombre}. Te responderemos pronto.`,
                icon: 'success',
                background: '#1A0F2E',
                color: '#00FFAE',
                confirmButtonColor: '#FF4757'
            });
        }
    });
}
function Prox() {
    Swal.fire({
        title: '¡Próximamente!',
        text: `Dentro de poco agregaremos más juegos a nuestro catálogo`,
        imageUrl: '../Games/Images/prox.png',
        imageWidth: 200,
        imageHeight: 200,
        customClass: {
            title: 'tit-general',
        },
        background: '#1A0F2E',
        color: '#00FFAE',
        confirmButtonColor: '#FF4757'
    });
}

const regexUs = /^[a-zA-Z0-9._-]{3,16}$/;
const regexCor = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function VerUsu() {
    const ActivUs = localStorage.getItem("ActivUs");
    const divSesion = document.getElementById("sesion");
    const divPerfil = document.getElementById("perfil");
    if (ActivUs) {
        divSesion.classList.add("d-none");
        divSesion.classList.remove("d-flex");
        divPerfil.classList.remove("d-none");
        divPerfil.classList.add("d-flex");
        document.getElementById("nav-username").innerText = ActivUs;
        document.getElementById("avatar-inicial").innerText = ActivUs.charAt(0).toUpperCase();
    } else {
        divSesion.classList.remove("d-none");
        divSesion.classList.add("d-flex");
        divPerfil.classList.add("d-none");
        divPerfil.classList.remove("d-flex");
    }
}

function SignUp() {
    Swal.fire({
        title: 'REGISTRARSE (SIGN UP)',
        html: `
                <div class="text-start px-1 gen">
                    <div class="mb-3">
                        <label class="form-label lbl-general">Nombre de Usuario</label>
                        <input type="text" id="reg-usuario" class="form-control inputs" placeholder="Ej. Raynor">
                    </div>
                    <div class="mb-3">
                        <label class="form-label lbl-general">Correo Electrónico</label>
                        <input type="email" id="reg-correo" class="form-control inputs" placeholder="Ej. nombre@correo.com">
                    </div>
                    <div class="mb-3">
                        <label class="form-label lbl-general">Contraseña</label>
                        <input type="password" id="reg-clave" class="form-control inputs" placeholder="••••••••">
                    </div>
                    <div class="form-check mt-3">
                        <input class="form-check-input" type="checkbox" id="reg-terminos" style="cursor:pointer;">
                        <label class="form-check-label small text-white-50" for="reg-terminos" style="cursor:pointer; font-size: 12px;">
                            Acepto los términos, condiciones y políticas de privacidad.
                        </label>
                    </div>
                </div>
            `,
        background: '#1A0F2E',
        customClass: {
            popup: 'pop-general',
            title: 'tit-general',
            confirmButton: 'btn-pri',
            cancelButton: 'btn-sec'
        },
        buttonsStyling: false,
        showCancelButton: true,
        confirmButtonText: 'REGISTRAR',
        cancelButtonText: 'CANCELAR',
        focusConfirm: false,
        preConfirm: () => {
            const usuario = Swal.getPopup().querySelector('#reg-usuario').value.trim();
            const correo = Swal.getPopup().querySelector('#reg-correo').value.trim();
            const clave = Swal.getPopup().querySelector('#reg-clave').value.trim();
            const terminos = Swal.getPopup().querySelector('#reg-terminos').checked;

            if (!usuario || !clave || !correo) {
                Swal.showValidationMessage('Por favor, completa todos los campos.');
                return false;
            }
            if (!terminos) {
                Swal.showValidationMessage('Debes aceptar los términos y condiciones.');
                return false;
            }
            if (clave.length < 8) {
                Swal.showValidationMessage("La contraseña debe tener un mínimo de 8 caracteres");
                return false;
            }
            if (!regexUs.test(usuario)) {
                Swal.showValidationMessage("El usuario debe tener de 3 a 16 caracteres y no contener espacios.");
                return false;
            }
            if (!regexCor.test(correo)) {
                Swal.showValidationMessage("Ingrese un correo válido");
                return false;
            }
            if (/^[^0-9]+$/.test(clave)) {
                Swal.showValidationMessage("La contraseña debe incluir al menos un número");
                return false;
            }
            if (/^[^a-z]+$/.test(clave)) {
                Swal.showValidationMessage("La contraseña debe incluir al menos una letra minúscula");
                return false;
            }
            if (/^[^A-Z]+$/.test(clave)) {
                Swal.showValidationMessage("La contraseña debe incluir al menos una letra mayúscula");
                return false;
            }
            if (/^[^!@#$%^&*(),.?":{}|<>_+-]+$/.test(clave)) {
                Swal.showValidationMessage("La contraseña debe incluir al menos un carácter especial");
                return false;
            }
            return { usuario, correo, clave };
        }
    }).then((result) => {
        if (result.isConfirmed) {
            localStorage.setItem("NuevoUser", JSON.stringify(result.value));
            Swal.fire({
                title: '¡REGISTRO EXITOSO!',
                text: 'Tu cuenta ha sido creada. Ahora puedes iniciar sesión.',
                icon: 'success',
                background: '#1A0F2E',
                color: '#00FFAE',
                confirmButtonColor: '#FF4757'
            }).then(() => {
                Login();
            });
        }
    });
}

function Login() {
    Swal.fire({
        title: 'INICIAR SESIÓN',
        html: `
                <div class="text-start px-1 gen">
                    <div class="mb-3">
                        <label class="form-label lbl-general">Nombre de Usuario</label>
                        <input type="text" id="log-usuario" class="form-control inputs" placeholder="Ingresa tu usuario">
                    </div>
                    <div class="mb-3">
                        <label class="form-label lbl-general">Contraseña</label>
                        <input type="password" id="log-clave" class="form-control inputs" placeholder="Ingresa tu contraseña">
                    </div>
                </div>
            `,
        background: '#1A0F2E',
        customClass: {
            popup: 'pop-general',
            title: 'tit-general',
            confirmButton: 'btn-pri',
            cancelButton: 'btn-sec'
        },
        buttonsStyling: false,
        showCancelButton: true,
        confirmButtonText: 'INGRESAR',
        cancelButtonText: 'CANCELAR',
        focusConfirm: false,
        preConfirm: () => {
            const user = Swal.getPopup().querySelector('#log-usuario').value.trim();
            const pass = Swal.getPopup().querySelector('#log-clave').value.trim();
            if (!user || !pass) {
                Swal.showValidationMessage('Por favor, rellene ambos campos.');
                return false;
            }
            const User = JSON.parse(localStorage.getItem("NuevoUser"));

            if (!User || User.usuario.toLowerCase() !== user.toLowerCase() || User.clave !== pass) {
                Swal.showValidationMessage('Usuario o contraseña incorrectos.');
                return false;
            }
            return { usuario: User.usuario };
        }
    }).then((result) => {
        if (result.isConfirmed) {
            localStorage.setItem("ActivUs", result.value.usuario);
            Swal.fire({
                title: '¡BIENVENIDO!',
                text: `Hola de nuevo, ${result.value.usuario.toUpperCase()}.`,
                icon: 'success',
                background: '#1A0F2E',
                color: '#00FFAE',
                confirmButtonColor: '#FF4757'
            }).then(() => {
                VerUsu();
            });
        }
    });
}

function Logout() {
    Swal.fire({
        title: 'CERRAR SESIÓN',
        text: `¿Estás seguro de cerrar sesión?`,
        icon: 'info',
        background: '#1A0F2E',
        color: '#00FFAE',
        showCancelButton: true,
        confirmButtonText: 'CONTINUAR',
        cancelButtonText: 'CANCELAR',
        customClass: {
            title: 'tit-general',
            icon: 'ico',
            confirmButton: 'btn-pri',
            cancelButton: 'btn-sec'
        },
    }).then((result) => {
        if (result.isConfirmed) {
            localStorage.removeItem("ActivUs");
            VerUsu();
        }
    });
}

function valfor(event) {
    event.preventDefault();
    const errorDiv = document.getElementById('CajErr');
    const correo = document.getElementById('f-correo').value.trim();
    const ci = document.getElementById('f-ci').value.trim();
    const tel = document.getElementById('f-tel').value.trim();
    const tarjeta = document.getElementById('f-tarjeta').value.trim();
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const regNum = /^[0-9]+$/;
    const regexCI = /^[0-9]{8}$/;
    const regexTel = /^[0-9]{7,8}$/;

    errorDiv.style.display = 'none';
    errorDiv.innerText = '';

    if (!regexEmail.test(correo)) {
        MosEr('Por favor, introduce un correo electrónico válido.');
        return;
    }
    if (!regexCI.test(ci)) {
        MosEr('El Cárnet de Identidad debe contener exactamente 8 dígitos numéricos.');
        return;
    }
    if (!regexTel.test(tel)) {
        MosEr('El número telefónico debe tener 7 u 8 dígitos numéricos.');
        return;
    }
    if (!tarjeta || !regNum.test(tarjeta)) {
        MosEr('El número de tarjeta es obligatorio y debe contener solo dígitos.');
        return;
    }
    Swal.fire({
        title: '¡COMPRA EXITOSA!',
        text: 'Procesando tus datos de forma segura...',
        icon: 'success',
        background: '#110920',
        color: '#ffffff',
        iconColor: '#00FFAE',
        confirmButtonText: 'Aceptar',
        customClass: {
            popup: 'pop-general',
            confirmButton: 'btn-pri'
        },
        buttonsStyling: false
    });
    document.getElementById('forComp').reset();
}
function MosEr(mensaje) {
    const errorDiv = document.getElementById('CajErr');
    errorDiv.innerText = mensaje;
    errorDiv.style.display = 'block';
}
function CanTi(event) {
    event.preventDefault();
    Swal.fire({
        title: 'CANJEAR TICKET',
        text: 'Introduce el código de 4 dígitos de tu cupón:',
        input: 'text',
        inputAttributes: {
            maxlength: '4',
            placeholder: 'Ej. 4582',
            style: 'text-center; letter-spacing: 5px; font-size: 20px;'
        },
        background: '#1A0F2E',
        color: '#ffffff',
        customClass: {
            popup: 'pop-general',
            title: 'tit-general',
            input: 'inputs text-center',
            confirmButton: 'btn-pri',
            cancelButton: 'btn-sec'
        },
        buttonsStyling: false,
        showCancelButton: true,
        confirmButtonText: 'VALIDAR',
        cancelButtonText: 'CANCELAR',
        inputValidator: (value) => {
            const regexTicket = /^[0-9]{4}$/;
            if (!value.trim()) {
                return 'El espacio no puede estar vacío.';
            }
            if (!regexTicket.test(value.trim())) {
                return 'El ticket solo puede tener 4 digitos numéricos';
            }
        }
    }).then((result) => {
        if (result.isConfirmed) {
            const Npre = preOr * 0.75;
            document.getElementById('NewPre').innerText = `NUEVO PRECIO: $ ${Npre.toFixed(2)} USD`;
            const bloqueDesc = document.getElementById('BloDes');
            bloqueDesc.style.display = 'block';
            Swal.fire({
                title: '¡TICKET APLICADO!',
                text: 'El descuento del 25% se ha reflejado en tu orden de compra.',
                icon: 'success',
                background: '#1A0F2E',
                color: '#00FFAE',
                confirmButtonColor: '#FF4757'
            });
        }
    });
}