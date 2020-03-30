
// Tooltips Initialization
$(function () {
    $('[data-toggle="tooltip"]').tooltip()
    $('.popover-autor').popover({
        html: true,
        sanitize: false,
        placement: 'top',
        trigger: 'hover',
        title: '',
        content: `
        `,
        delay:800,
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
        delay:800,
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
})
