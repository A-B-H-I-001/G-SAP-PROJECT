var tl = gsap.timeline()

tl.from(".nav h3 ",{
    y:-100,
    duration:1,
    stagger:.1,
    opacity:0,
})
tl.from(".nav .mennu",{
    y:-100,
    duration:.1,
    opacity:0,
})
tl.from(".main h1",{
    x:-500,
    duration:.3,
    stagger:.3,
    opacity:0,
})
tl.from(".main img",{
    rotate:45,
    duration:.5,
    stagger:.3,
    opacity:0,
})