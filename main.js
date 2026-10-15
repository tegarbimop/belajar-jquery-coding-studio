const el = $("p")
console.log(el) 

const el2 = $('#hello')
console.log(el2)

const el3 = $('.jquery')
console.log(el3)

// .html() 
const el4 = $("#text")
el4.html("<h1>hello</h1>")

// .attr()
const inp = $("input")
// inp.attr("type", "checkbox")

// add & remove class
el4.addClass("blue")
el4.removeClass("blue")

// css()
inp.css("border", "1px solid blue")


// DOM events
const el5 = $("#text")
el.mouseenter(function() {
    el.css("border", "1px solid red")
})


// effects animation
const btnshow = $("#show")
const btnhide = $("#hide")
const btnfadein = $("#fadeIn")
const btnfadeout = $("#fadeOut")
const btntoggle = $("#toggle")

const div = $("div")

btnshow.click(function() {
    div.show("slow")
})

btnhide.click(function() {
    div.hide("slow")
})

btnfadein.click(function() {
    div.fadeIn("slow")
})

btnfadeout.click(function() {
    div.fadeOut("slow")
})

btntoggle.click(function() {
    div.slideToggle("slow")
})