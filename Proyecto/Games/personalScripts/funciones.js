    document.addEventListener('focusin', function(e) {
        if (e.target.closest('.swal2-container')) {
            e.stopImmediatePropagation();
        }
    });
    document.addEventListener("DOMContentLoaded", function() {
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
    function Prox(){
        Swal.fire({
            title: '¡Próximamente!',
            text: `Dentro de poco agregaremos más juegos a nuestro catálogo`,
            imageUrl: 'prox.png',
            imageWidth: 200,
            imageHeight: 200,
            customClass:{
                title: 'tit-general',
            },
            background: '#1A0F2E',
            color: '#00FFAE',
            confirmButtonColor: '#FF4757'
        });
    }

    function Login() {
        Swal.fire({
            title: 'INICIAR SESIÓN',
            html: `
                <div class="text-start px-1 gen">
                    <div class="mb-3">
                        <label class="form-label lbl-general">Nombre de Usuario</label>
                        <input type="text" id="log-usuario" class="form-control inputs" placeholder="Ej. Raynor">
                    </div>
                    <div class="mb-3">
                        <label class="form-label lbl-general">Correo Electrónico</label>
                        <input type="email" id="log-correo" class="form-control inputs" placeholder="Ej. nombre@correo.com">
                    </div>
                    <div class="mb-3">
                        <label class="form-label lbl-general">Contraseña</label>
                        <input type="password" id="log-clave" class="form-control inputs" placeholder="••••••••">
                    </div>
                    
                    <div class="form-check mt-3">
                        <input class="form-check-input" type="checkbox" id="log-terminos" style="cursor:pointer;">
                        <label class="form-check-label small text-white-50" for="log-terminos" style="cursor:pointer; font-size: 12px;">
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
            confirmButtonText: 'SIGUIENTE',
            cancelButtonText: 'CANCELAR',
            focusConfirm: false,
            preConfirm: () => {
                const usuario = Swal.getPopup().querySelector('#log-usuario').value.trim();
                const correo = Swal.getPopup().querySelector('#log-correo').value.trim();
                const clave = Swal.getPopup().querySelector('#log-clave').value.trim();
                const terminos = Swal.getPopup().querySelector('#log-terminos').checked;
                if (!usuario || !clave || !correo) {
                    Swal.showValidationMessage('Por favor, completa todos los campos.');
                    return false;
                }
                if (!terminos) {
                    Swal.showValidationMessage('Debes aceptar los términos y condiciones para continuar.');
                    return false;
                }
                return { usuario: usuario, clave: clave };
            }
        }).then((result) => {
            if (result.isConfirmed) {
                SignUp(result.value);
            }
        });
    }
    function SignUp(DatLog) {
        Swal.fire({
            title: 'VERIFICACIÓN DE REGISTRO (SIGN UP)',
            html: `
                <div class="text-start px-1 gen">
                    <p class="text-white-50 small mb-3 text-center" style="font-size:12px;">
                        Por seguridad, repite tus credenciales para confirmar la creación de tu cuenta.
                    </p>
                    <div class="mb-3">
                        <label class="form-label lbl-general">Confirmar Usuario</label>
                        <input type="text" id="sign-usuario" class="form-control inputs" placeholder="Repite tu usuario">
                    </div>
                    
                    <div class="mb-3">
                        <label class="form-label lbl-general">Confirmar Contraseña</label>
                        <input type="password" id="sign-clave" class="form-control inputs" placeholder="Repite tu contraseña">
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
            cancelButtonText: 'ATRÁS',
            focusConfirm: false,
            preConfirm: () => {
                const User = Swal.getPopup().querySelector('#sign-usuario').value.trim();
                const Pass = Swal.getPopup().querySelector('#sign-clave').value.trim();

                if (!User || !Pass) {
                    Swal.showValidationMessage('Por favor, rellene ambos campos de confirmación.');
                    return false;
                }
                if (User !== DatLog.usuario || Pass !== DatLog.clave) {
                    Swal.showValidationMessage('Los datos no coinciden, por favor revíselos');
                    return false;
                }
                return { usuario: User };
            }
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: '¡CUENTA CREADA!',
                    text: `Bienvenido a nuestra tienda ${result.value.usuario.toUpperCase()}.`,
                    icon: 'success',
                    background: '#1A0F2E',
                    color: '#00FFAE',
                    confirmButtonColor: '#FF4757'
                });
            } else if (result.isDismissed && Swal.DismissReason.cancel) {
                Login();
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