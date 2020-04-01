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
var postPopular = []

const filterArray = (array, word) => {
    resultFilter = array.filter((item) => {
        return item.category.toLowerCase().includes(word.toLowerCase())
    })
    console.log(resultFilter)
    printPosts(resultFilter)
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
            getPostDb()
        }
    })
}

const getPostDb = () => {
    $.ajax({
        url: "https://javascript-ajax-d0ce6.firebaseio.com/superTeam/posts/.json",
        method: "GET",
        success: (response) => { 
            addPostToArray(response)
            printPosts(arrayPost);
            console.log(response)
        }
       
    })
}
getPostDb()

const getOnePostDb = (idPost) => {
    var result =  $.ajax({
        url: `https://javascript-ajax-d0ce6.firebaseio.com/superTeam/posts/${idPost}.json`,
        method: "GET",
        success: (response) => { 
            // console.log(response)
        }
    })

    console.log(result)
    result = result.responseJSON
    return result;
}


const patchPostDb = (newData, idPost) => {
    $.ajax({
        url: `https://javascript-ajax-d0ce6.firebaseio.com/superTeam/posts/${idPost}.json`,
        method: "PATCH",
        data: JSON.stringify(newData),
        success: (response) => {
            console.log(response)
            getPostDb()
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
    arrayPost = []
    $.each(postsDb, (key, value) => {
        arrayPost.push({...value,key})

    })
    // console.log(arrayPost)
    addMostPopular(arrayPost)
}

const printPostPopular = (array) => {
    $("#wrapper-post-popular").empty();
    array.forEach((post, index) => {
        $("#wrapper-post-popular").append(`
            <li class="list-group-item d-flex align-items-start border-0">
                <span class="ranking-post align-self-start mt-3">${index+1}</span>
                <div>
                    <p class="font-weight-bold mt-3">${post.title}</p>
                    <p class="card-text m-0"><small class="text-muted font-weight-bold  ">${post.autor} in
                            ${post.tagIn}</small>
                        <p data-toggle="tooltip" data-placement="top" title="Update Mar 28"><span
                                class="article-card-date-publication card-text m-0"><small
                                    class="text-muted">March 26 . ${post.time} read</span></small> <span
                                class="icon-star"><i class="fas fa-star"></i></span></p>
                </div>
            </li>
        `)
    })
}

const addMostPopular = (arrayPost) => {
    postPopular = arrayPost.filter((post)=> {
        return post.votes > 3
    })
    console.log('popular')
    console.log(postPopular)
    printPostPopular(postPopular);
}

const printPosts = (array) => {
    $("#wrapper-post").empty();
    array.forEach((post) =>{
    $("#wrapper-post").append(`
    <div class="card mb-3 border-0 mt-5 post-show" data-id-post=${post.key}>
                        <div class="row no-gutters ">
                            <div class="col-md-6">
                                <div class="card-body pt-0 pl-0">
                                    <p class="card-text m-0"><small class="text-muted ">${post.category}
                                            theme</small>
                                    </p>
                                    <h4 class="card-text font-weight-bold m-0">${post.title}</h4>
                                    <p class="card-text"><small class="text-muted">${post.content.slice(0,100)}...</small>
                                    </p>                                    
                                    <a href="" class="article-card-autor popover-autor text-muted "><small>${post.autor}</small> </a> <small>in</small> <a href=""class="article-card-autor text-muted  popover-topic"><small>${post.tagIn}</small></a>
                                    </a>
                                    <div class="d-flex align-items-start justify-content-between">
                                        <p data-toggle="tooltip" data-placement="top" title="Update Mar 28"><span
                                                class="article-card-date-publication card-text m-0"><small
                                                    class="text-muted">${post.date} . ${post.time}</span></small> <span
                                                class="icon-star"><i class="fas fa-star"></i></span>${post.votes}</p>
                                        <div>
                                            <i class="far fa-bookmark "></i>
                                            <i class="fas fa-ellipsis-h"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6 ">
                                <img src="${post.image}" class="card-img" height="250" width="100" alt="imagen1">
                            </div>
                        </div>
                    </div>
    
    `)
        
    })

    $('.fa-star').on('click', patchPost)
}








const patchPost = (event) => {
    let idPost = $(event.target).closest('.post-show').data('id-post');
    let postCurrent = arrayPost.filter((item) => {
        return item.key === idPost
    })
    console.log(postCurrent)
    console.log(idPost);
    let votes = postCurrent[0].votes + 1;
    console.log(votes)
    let newData = {votes}
    patchPostDb(newData, idPost)
}



