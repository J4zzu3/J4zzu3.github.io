document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById('whatsappForm');
    
    const numeroWhatsApp = "51946734856"; 

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Evita que la página se recargue

        const tipoCliente = document.getElementById('tipoCliente').value;
        const nombre = document.getElementById('nombre').value.trim();

        if (tipoCliente && nombre) {

            let mensaje = "";
            
            if (tipoCliente === "empresa") {
                mensaje = `Hola, soy una empresa. Mi razón social es ${nombre} y requiero de tus servicios contables.`;
            } else if (tipoCliente === "persona") {
                mensaje = `Hola, mi nombre es ${nombre} y requiero de tus servicios de asesoría contable.`;
            }

            const mensajeCodificado = encodeURIComponent(mensaje);
            
            const urlWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${mensajeCodificado}`;
            
            window.open(urlWhatsApp, '_blank');
            
            form.reset();
        }
    });
});