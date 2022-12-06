function ajax(url, metodo = 'GET'){

    const xhr = new XMLHttpRequest()
    xhr.open(metodo, url)
    xhr.send()

    return xhr
}

function cargarNav() {

    const header = document.querySelector('header')

    const xhr = ajax('header.html')

    xhr.addEventListener('load', () => {
        if( xhr.status === 200){
            header.innerHTML = xhr.response
        }else {
            const error = {
                Mensaje: "Hubo un error, algo paso",
                Error: xhr.status
            }
           console.error(error) 
        }
        
    })
}

cargarNav()

function cargarFooter() {

    const footer = document.querySelector('footer')

    const xhr = ajax('footer.html')

    xhr.addEventListener('load', () => {
        if(xhr.status === 200){
            footer.innerHTML = xhr.response
        }else {
            const error = {
                Mensaje: "Hubo un error, algo paso",
                Error: xhr.status
            }
            console.error(error)
        }
    })
}

cargarFooter()
