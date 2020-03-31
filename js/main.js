$(document).ready(function () {
    //Search header,mostrar y oculta input al presionar la lupa
    $("#ocultar").hide()
    $("#view").on("click", function () {
        $('#ocultar').toggle();
    });

    //flechas izquierda navbar
    $("#boton-prueba").click(function () {
        $(".scrollmenu").animate({
            scrollLeft: "-=50",
        }, 500, function () {
            // Animation complete.
        });
    });

    //flecha derecha navbar
    $("#boton-prueba2").click(function () {
        $(".scrollmenu").animate({
            scrollLeft: "+=50",
        }, 500, function () {

            // Animation complete.
        });
    });

    // Tooltips Initialization and popover
    $('[data-toggle="tooltip"]').tooltip()
    $('.popover-autor').popover({
        html: true,
        sanitize: false,
        placement: 'top',
        trigger: 'hover',
        title: '',
        content: `
        `,
        delay: 800,
        template: `
            <div class="popover" role="tooltip">
                <div class="arrow">
                </div>
                <div class="popover-title d-flex p-2 pb-0">
                    <div class="">
                        <h5>Andy Slavitt</h5>
                        <p class="text-success m-0">Medium member since Mar 2020</p>
                        <p>Former Medicare, Medicaid & ACA head for Pres. Barack Obama</p>
                        <a class="text-muted">http://twitter.com/ASlavitt</a>
                    </div>
                    <div>
                        <img src="https://cdn-images-1.medium.com/fit/c/120/120/2*qQWdLE4x1YAzQe1ZZc1NXg.jpeg" alt="..." class="img-fluid rounded-circle  border border-success">
                    </div>
                </div>
                <div class="popover-content p-2 pt-0">
                <hr>
                    <div class="d-flex align-items-center">
                        <span class="mr-3 text-muted">Followed by 2.6k people</span>
                        <button type="button" class="btn btn-outline-success">Follow</button>
                    </div>
                </div>
            </div>`
    })

    $('.popover-topic').popover({
        html: true,
        sanitize: false,
        placement: 'top',
        trigger: 'hover',
        title: '',
        content: `
        `,
        delay: 800,
        template: `
            <div class="popover" role="tooltip">
                <div class="arrow">
                </div>
                <div class="popover-title d-flex p-2 pb-0 mb-0">
                    <div class="">
                        <h5>Elemental</h5>
                        <p class="m-0">Your life, sourced by science. A new Medium publication about health and wellness.</p>
                    </div>
                    <picture class="m-0">
                        <img src="https://cdn-images-1.medium.com/fit/c/120/120/1*GhG8ZeoE0TGfCHwL9SCrfw.png" alt="..." class="img-fluid w-100">
                    </picture>
                </div>
                <div class="popover-content p-2 pt-0">
                <hr>
                    <div class="d-flex align-items-center">
                        <span class="mr-3 text-muted">Followed by 115k people</span>
                        <button type="button" class="btn btn-outline-success">Follow</button>
                    </div>
                </div>
            </div>`
    })
});

//filtar busqueda
var arrayPost = []
var resultFilter = []
const filterArray = (array, word) => {
    resultFilter = array.filter((item) => {
        return item.category.toLowerCase().includes(word.toLowerCase())
    })
    console.log(resultFilter)
}

$("#ocultar").on("keyup", (event) => {
    let keyWord = $(event.target).val()
    filterArray(arrayPost, keyWord)
})

var postObject = {
    category: 'Medicina',
    title: 'title',
    autor: 'autor',
    content: 'consten',
    date: '2019-04-31',
    time: '2 min',
    image: '',
    tagIn: 'ncs'
}

const createdPostDb = (postObject) => {
    $.ajax({

        url: "https://javascript-ajax-d0ce6.firebaseio.com/superTeam/posts/.json",
        method: "POST",
        data: JSON.stringify(postObject),
        success: (response) => {
            console.log(response)
            console.log("registro exitoso")
        }
    })
}

const getPostDb = () => {
    $.ajax({
        url: "https://javascript-ajax-d0ce6.firebaseio.com/superTeam/posts/.json",
        method: "GET",
        success: (response) => { 
            addPostToArray(response)
            console.log(response)
        }
    })
}

const patchPostDb = (newData, idPost) => {
    $.ajax({
        url: `https://javascript-ajax-d0ce6.firebaseio.com/superTeam/posts/${idPost}.json`,
        method: "PATCH",
        data: JSON.stringify(newData),
        success: (response) => {
            console.log(response)
        }


    })
}


const clearForm = () => {
    $('#post-title').val("");
    $('#post-category').val("");
    $('#post-complete-content').val("");
    $('#post-autor').val("");
    $('#post-publication-date').val("");
    $('#post-minutes-reading').val("");
    $('#post-image').val("");
    $('#post-tag').val("");
}

const getDataPost = () => {
    console.log('Estas registrando');
    let title = $('#post-title').val();
    let category = $('#post-category').val();
    let content = $('#post-complete-content').val();
    let autor = $('#post-autor').val();
    let date = $('#post-publication-date').val();
    let time = $('#post-minutes-reading').val();
    let image = $('#post-image').val();
    let tagIn = $('#post-tag').val();
    let votes = 0;


    if (title !== '' && category !== '' && content !== '' && autor !== '' && date !== '' && time !== '' && image !== '' && tagIn !== '') {
        // Si los inputs tienen datos se creara el objeto
        let newPostObject = { title, category, content, autor, date, time, image, tagIn, votes }
        createdPostDb(newPostObject);
        clearForm()
    } else {
        // si no hay ningun dato en los inputs
        alert('Todos los campos son obligatorios >.<')
    }
}

$('#btn-register-post').on('click', getDataPost)

const addPostToArray = (postsDb) => {
    $.each(postsDb, (key, value) => {
        console.log(value)
        arrayPost.push({...value,key})

    })
    console.log(arrayPost)
}

