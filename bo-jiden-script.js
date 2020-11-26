console.log('Script read in')
d3.select(window).on('load', () => {
    //console.log('Page was read in')
    //d3.select('body').on('click', resetStoryBoard, true)
    let column1 = d3.select('#column-1')
    let column2 = d3.select('#column-2')
    let column1SVG = column1.append('svg')
        .attr('width', '500')
        .attr('height', '500')

    let chiefComplaintGroup = column1SVG.append('g')
        .attr('id','chief-complaint')
        .attr('transform', 'translate (10, 15)')
        
    chiefComplaintGroup.append('rect')
        .attr('width', '480')
        .attr('height', '25')
        .attr('fill', 'none')
        .style('stroke-width', 1)
        .style('stroke', 'black')

    chiefComplaintGroup.append('text')
        .attr('transform', 'translate (240, 18)')
        .text('Chief Complaint: Chest Pain')
        .style('font-size', '20px')
        .style('text-anchor', 'middle')

    let heartScoreGroup = column1SVG.append('g')
        .attr('id','heart-score')
        .attr('transform', 'translate (10, 75)')
    
    heartScoreGroup.append('rect')
        .attr('width', '480')
        .attr('height', '45')
        .attr('fill', 'none')
        .style('stroke-width', 1)
        .style('stroke', 'black')

    heartScoreGroup.append('text')
        .attr('transform', 'translate (10, 18)')
        .text('Heart Score: 6')
        .style('font-size', '20px')
    heartScoreGroup.append('text')
        .attr('transform', 'translate (10, 38)')
        .text('Moderate risk of Major Adverse Cardiac Event')
        .style('font-size', '20px')

    heartScoreGroup.on('click', () => {
        fillColumn2 ()

    })

    //column2.append('svg')
    let column2SVG = column2.append('svg')
        .attr('id', 'column2SVG')
        .attr('width', '750')
        .attr('height', '210')

    column2SVG.append('rect')
        .attr('transform', 'translate (10, 0)')
        .attr('width', '710')
        .attr('height', '210')
        .attr('fill', 'none')
        .style('stroke-width', 1)
        .style('stroke', 'black')

    column2SVG.append('text')
        .attr('id', 'colum2Line1')
        .attr('transform', 'translate (355, 25)')
        //.text('Column 2 Line 1')
        .style('font-size', '20px')
        .style('text-anchor', 'middle')

    column2SVG.append('text')
        .attr('id', 'colum2Line2')
        .attr('transform', 'translate (355, 50)')
        //.text('Select a tab on the left to see relevant files or information')
        .style('font-size', '20px')
        .style('text-anchor', 'middle')

    column2SVG.append('text')
        .attr('id', 'colum2Line3')
        .attr('transform', 'translate (355, 75)')
        .text('Select a tab on the left to see relevant files or information')
        .style('font-size', '20px')
        .style('text-anchor', 'middle')

    column2SVG.append('text')
        .attr('id', 'colum2Line4')
        .attr('transform', 'translate (20, 95)')
        //.text('Column 2 Line 3')
        .style('font-size', '16px')

    column2SVG.append('text')
        .attr('id', 'colum2Line5')
        .attr('transform', 'translate (20, 115)')
        //.text('Column 2 Line 3')
        .style('font-size', '16px')

    column2SVG.append('text')
        .attr('id', 'colum2Line6')
        .attr('transform', 'translate (20, 135)')
        //.text('Column 2 Line 3')
        .style('font-size', '16px')

    column2SVG.append('text')
        .attr('id', 'colum2Line7')
        .attr('transform', 'translate (20, 155)')
        //.text('Column 2 Line 3')
        .style('font-size', '16px')

    column2SVG.append('text')
        .attr('id', 'colum2Line8')
        .attr('transform', 'translate (20, 175)')
        //.text('Column 2 Line 3')
        .style('font-size', '16px')

    column2SVG.append('text')
        .attr('id', 'colum2Line9')
        .attr('transform', 'translate (20, 195)')
        //.text('Column 2 Line 3')
        .style('font-size', '16px')
        .attr('class', 'link')

        

    column2.append('img')
        .attr('id', 'MDCalcPpic')
        .attr('alt', 'MDCalc-Picture')
        .attr('src', 'Images/MDCalc-picture.png')
        .attr('height', '0px')
        .attr('width', '0px')
        .style('margin-left', '10px')
        //<img src="images/bo-jiden.jpeg" style="margin-left:1200px; padding-bottom: 0px;" alt="DBMI Logo" height="75px" width="75px"></img>

// History: Moderately Suspicious +1
// EKG: Non-specific repolarization disturbance +1
// Age: > 65 +2
// Risk Factors: +1
    // Hypertension 
    // Family history of CVD 
// Initial Troponin: +1 
    //2x normal limit
    
// Overall score of 6, moderate score 
// 12-16.6% risk of adverse caridiac event. 
// https://www.mdcalc.com/heart-score-major-cardiac-events#next-steps 
    d3.select('#column-1').on('click', resetStoryBoard, true)
})

function fillColumn2 () {
    d3.select('#colum2Line1').text('HEART Score: 6')
    d3.select('#colum2Line2').text('Moderate risk of Major Adverse Cardiac Event')
    d3.select('#colum2Line3').text('12-16.6% of Adverse Cardiac Event')
    d3.select('#colum2Line4').text('History: Moderately Suspicious (+1)')
    d3.select('#colum2Line5').text('EKG: Non-specific repolarization disturbance (+1)')
    d3.select('#colum2Line6').text('Age: > 65 (+2)')
    d3.select('#colum2Line7').text('Risk Factors: Hypertension and Family History of CVD (+1)')
    d3.select('#colum2Line8').text('Initial Troponin: 2X normal limit (+1)')
    d3.select('#colum2Line9').text('Visit MDCalc Website').attr('fill', 'blue').on('click', ()=> {
        window.open('https://www.mdcalc.com/heart-score-major-cardiac-events')
    })
    //d3.select('#c2L8Anchor').attr('href', 'https://www.mdcalc.com/heart-score-major-cardiac-events')
    d3.select('#MDCalcPpic').attr('height', '350px').attr('width', '710px')
    
}

function resetStoryBoard () {
    d3.select('#column2SVG').selectAll('text').text('')
    d3.select('#colum2Line3').text('Select a tab on the left to see relevant files or information')
    d3.select('#MDCalcPpic').attr('height', '0px').attr('width', '0px')
}