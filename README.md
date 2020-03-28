## styles in navbar
```css
font-family: medium-content-sans-serif-font,"Lucida Grande","Lucida Sans Unicode","Lucida Sans",Geneva,Arial,sans-serif!important;

font-style: normal!important;
font-size: 15px!important;
line-height: 20px!important;
letter-spacing: .05em!important;
text-transform: uppercase;


header,
nav {
    max-width: 1032px;
}


max-width: 1208px;
```

## Layout

- Container 
    - row
        - .col-12
            - header
    - row
        - .col-12
            - nav
    - row
        - .col-12 .col-md-6 .col-xl-4
        - .col-12 .col-md-6 .col-xl-4
        - .col-12 .col-md-6 .col-xl-4
    - row
        - .col-12 .col-md-12  .col-lg-6
        - .col-12 .col-md-12  .col-lg-6



- Container
    - row -> header
        - .col-12
            - <header></header>
    - row -> nav
        - .col-12
            - <nav></nav>
    - row
        - .col-12 .col-md-6 .col-lg-4 -> article-princ
        - .col-12 .col-md-6 .col-lg-4 -> 3 cards
        - .col-12 .col-md-6 .col-lg-4 -> article-sec
    - row
        - .col-12 .col-lg-8
        - .col-12 .col-lg-4
