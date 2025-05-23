<script>

    let cursor = document.querySelector('.cursor')
    let stars = document.querySelector('.stars')
    let a = document.querySelector('a')

    let mouseX;
    let mouseY;

    window.addEventListener('mousemove', e ={">"}
        mouseX = e.clientX;
        mouseY = e.clientY;

        gsap.to(cursor, 0.5, {x: mouseX, y:mouseY{"}"})
    {"}"})

    a.addEventListener('mouseenter', () ={">"} {
        gsap.to(stars, 1, {
            scale: 1,
            opacity: 1,
            top: '-75px',
            left: '-75px',
            rotate: 0,
            ease: Elastic.easeOut.config(1, 0.3)
        })
    })

    a.addEventListener('mousemove', () ={">"} {
        gsap.to(stars, 1, {
            x: mouseX,
            y: mouseY
        })
    })

    a.addEventListener('mouseleave', () ={">"} {
        gsap.to(stars, 0.2, {
            scale: 0,
            opacity: 0,
            top: '10',
            left: '40',
            rotate: 45,
        })
    })
</script>