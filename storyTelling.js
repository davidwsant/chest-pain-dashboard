let i = 0
let storyList = ['These buttons have not been made functional.', "Nope, this button doesn't work either", 'Not this one either',
    "You're just asking for it, aren't you?", 
    "You must love pushing buttons, don't you?",
    "You're really still going?",
    "Buttons buttons buttons. They are your favorite.",
    "Somebody must be bored.",
    "Do you ever stop?", 
    "Initiating self destruct", 
    "We're all gonna die!!!!"
]

function storyTelling() {
    d3.select('#second-row').attr('class', 'button-clicked')
    d3.select('#buttons').attr('class', 'button-clicked-misc')
    d3.select('#table-element').attr('class', 'button-clicked-misc')
    d3.select('#storySVG').attr('height', '250').attr('width', '500')
    d3.select('#storyRect').attr('height', '250').attr('width', '500').attr('fill', 'none').attr('stroke', 'black')
    if (i >= storyList.length) {
        i = 0
    }
    d3.select('#storyText').text(storyList[i])
    i++
    if (i <= 3) {
        d3.select('#storyText2').text("Click anywhere to continue")
    }
    else {
        d3.select('#storyText2').text("")
    }
    
}

function notStoryTelling() {
    d3.select('#second-row').classed('button-clicked', false)
    d3.select('#buttons').attr('class', '')
    d3.select('#table-element').classed('button-clicked-misc', false)
    d3.select('#storySVG').attr('height', '0').attr('width', '0')
    d3.select('#storyRect').attr('height', '0').attr('width', '0').attr('fill', 'none').attr('stroke', 'black')
    d3.select('#storyText').text('')
    d3.select('#storyText2').text("")
}