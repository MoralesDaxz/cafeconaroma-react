import '../login.css'

const spinner = document.getElementById('svgSpinner')
const invTag = document.getElementById('invit')

function loginInv() {
    spinner.classList.remove('spinner')
    spinner.classList.add('spinnerActivo')
    invTag.textContent = 'Accediendo' //a0Activo
    invTag.classList.add('a0Activo')
    invTag.classList.remove('a0')
    setTimeout(() => {
        spinner.classList.remove('spinnerActivo')
        spinner.classList.add('spinner')
        invTag.textContent = 'Invitado' //a0Activo
        invTag.classList.add('a0')
        invTag.classList.remove('a0Activo')
        location.href = "./";
    }, 2200);
}
export const Login = () => {

    return (
        <>
            <div className='flex flex-col items-center min-h-[100vh] pt-[3rem]'>
                <div id="contenMain">
                    <section className="contenSection back1">
                        <div>
                            <h2 className="title1">Registrarse</h2>
                        </div>
                        <div className="inputGap">
                            <div><input type="text" placeholder="Nombre" /></div>
                            <div><input type="text" placeholder="Correo" /></div>
                            <div><input type="text" placeholder="Contraseña" /></div>
                            <div><input type="text" placeholder="Confirma contraseña" /></div>
                        </div>
                        <div><button href="#" className="regisBut">REGISTRARSE</button></div>
                    </section>
                    <section className="contenSection back2">
                        <div>
                            <h2 className="title2">Iniciar Sesión</h2>
                        </div>
                        <div id="svgSpinner" className="spinner">
                            <div className="wrapper">
                                <div className="circle"></div>
                                <div className="circle"></div>
                                <div className="circle"></div>
                                <div className="shadow"></div>
                                <div className="shadow"></div>
                                <div className="shadow"></div>
                            </div>
                        </div>
                        <div className="gpLink">
                            <a onClick={() => loginInv()} id='invit' className="a0 p-2"><h3>Invitado</h3></a>
                            <a href="https://es-es.facebook.com/" className="a1 p-2"><h3>Facebook</h3></a>
                            <a href="https://twitter.com/?lang=es" className="a2 p-2"><h3>Twitter</h3></a>
                            <a href="https://accounts.google.com/" className="a3 p-2"><h3>Google</h3></a>
                        </div>
                    </section>
                </div>
            </div>
        </>
    )
}






