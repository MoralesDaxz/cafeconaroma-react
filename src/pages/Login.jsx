import React from 'react'

export const Login = () => {
  return (
   <>
   <div id="contenMain">
    <section class="contenSection back1">
        <div>
            <h2 class="title1">Registrarse</h2>
        </div>
        <div class="inputGap">
            <div><input type="text" placeholder="Nombre"/></div>
            <div><input type="text" placeholder="Correo"/></div>
            <div><input type="text" placeholder="Contraseña"/></div>
            <div><input type="text" placeholder="Confirma contraseña"/></div>
        </div>
        <div><button href="#" class="regisBut">REGISTRARSE</button></div>
    </section>
    <section class="contenSection back2">
        <div>
            <h2 class="title2">Iniciar Sesión</h2>
        </div>
        <div id="svgSpinner" class="spinner">
   <div class="wrapper">
                <div class="circle"></div>
                <div class="circle"></div>
                <div class="circle"></div>
                <div class="shadow"></div>
                <div class="shadow"></div>
                <div class="shadow"></div>
            </div> 

          
         </div>
        <div class="gpLink">

            <a onclick="loginInv()" class="a0"><h3>Invitado</h3></a>
            <a href="https://es-es.facebook.com/" class="a1"><h3>Acceder con Facebook</h3></a>
            <a href="https://twitter.com/?lang=es" class="a2"><h3>Acceder con Twitter</h3></a>
            <a href="https://accounts.google.com/" class="a3"><h3>Acceder con Google</h3></a>
        </div>
    </section>
</div>

   </>
  )
}






