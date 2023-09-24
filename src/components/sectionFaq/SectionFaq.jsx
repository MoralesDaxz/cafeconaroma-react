import React from 'react'
const dataFaq = [
    {
        question: '¿Cómo hago el pedido?',
        answer: 'Selecciona el café que desees probar y completa el proceso de compra. Si lo prefieres, te preguntaremos cada cuánto quieres que te lo mandemos a casa y así nunca te quedarás sin café.'
    },
    {
        question: '¿Por qué los precios son tan bajos?',
        answer: 'Viajamos constantemente para encontrar los mejores granos y a los agricultores más exigentes. Si podemos ofrecerte estos precios es porque tratamos directamente con los productores de café, sin intermediarios. Así obtenemos el mejor precio para ti y la persona que está detrás de los granos de café recibe el mayor beneficio posible.'
    },
    {
        question: '¿Es posible enviar café a mi oficina?',
        answer: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo unde quod corporis, tempora nesciunt dolore quos laboriosam beatae nulla eos! Alias adipisci mollitia est libero facere repudiandae, dolore magnam dicta!'
    },
]
export const SectionFaq = () => {
    return (
        <>
            <section class="contenFaq">
                <div class="titleFaq">
                    <h2>Preguntas frecuentes</h2>
                </div>
                <div class="contenLabels">
                    <article class="labelFaq">
                        <div id="boxH3_1" class="boxH3">
                            <h3 class="labelH">¿Cómo hago el pedido?</h3>
                            <img class="arrowImg" src="img/home/flecha-abajo.svg" alt="Flecha-arriba" />
                        </div>
                        <div id="lineFaq1" class="lineFaq"></div>
                        <p id="p1FAQ" class="labelPrf">Selecciona el café que desees probar y completa el proceso de compra. Si lo
                            prefieres, te preguntaremos cada cuánto quieres que te lo mandemos a casa y así nunca te
                            quedarás sin café.</p>
                    </article>
                    <article class="labelFaq">
                        <div id="boxH3_2" class="boxH3">
                            <h3 class="labelH">¿Por qué los precios son tan bajos?</h3>
                            <img class="arrowImg" src="img/home/flecha-abajo.svg" alt="Flecha-arriba" />
                        </div>
                        <div id="lineFaq2" class="lineFaq"></div>
                        <p id="p2FAQ" class="labelPrf">Viajamos constantemente para encontrar los mejores granos y a los agricultores
                            más exigentes. Si podemos ofrecerte estos precios es porque tratamos directamente con los
                            productores de café, sin intermediarios. Así obtenemos el mejor precio para ti y la persona que
                            está detrás de los granos de café recibe el mayor beneficio posible.</p>
                    </article>
                    <article class="labelFaq">
                        <div id="boxH3_3" class="boxH3">
                            <h3 class="labelH">¿Es posible enviar café a mi oficina?</h3>
                            <img class="arrowImg" src="img/home/flecha-abajo.svg" alt="flecha-abajo" />
                        </div>
                        <div id="lineFaq3" class="lineFaq"></div>
                        <p id="p3FAQ" class="labelPrf">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo unde quod corporis, tempora nesciunt dolore quos laboriosam beatae nulla eos! Alias adipisci mollitia est libero facere repudiandae, dolore magnam dicta!</p>
                    </article>
                </div>
                <a href="#" class="labelBott">
                    <p class="lbottPrf"> Resolvemos tus dudas</p>
                    <img src="img/home/fqa-flecha-blanca-derecha.svg" alt="FQA-Flecha" />
                </a>
            </section>
        </>

    )
}
