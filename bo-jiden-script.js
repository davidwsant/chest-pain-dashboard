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
        .attr('height', '50')
        .attr('fill', 'none')
        .style('stroke-width', 1)
        .style('stroke', 'black')

    heartScoreGroup.append('text')
        .attr('transform', 'translate (10, 20)')
        .text('HEART Score: 6')
        .style('font-size', '20px')
    heartScoreGroup.append('text')
        .attr('transform', 'translate (10, 40)')
        .text('Moderate risk of Major Adverse Cardiac Event')
        .style('font-size', '20px')

    heartScoreGroup.on('click', () => {
        scoreColumn2 ()

    })

    
    let heartPathwayGroup = column1SVG.append('g')
        .attr('id','heartPathway')
        .attr('transform', 'translate (10, 145)')

    heartPathwayGroup.append('rect')
        .attr('width', '480')
        .attr('height', '50')
        .attr('fill', 'none')
        .style('stroke-width', 1)
        .style('stroke', 'black')

    heartPathwayGroup.append('text')
        .attr('transform', 'translate (10, 20)')
        .text('HEART Pathway')
        .style('font-size', '20px')

    heartPathwayGroup.append('text')
        .attr('transform', 'translate (10, 40)')
        .text('Moderate Risk, Treat as High Risk')
        .style('font-size', '20px')

    heartPathwayGroup.on('click', () => {
        pathwayColumn2()
    })

    let dataGroup = column1SVG.append('g')
        .attr('id','heart-score')
        .attr('transform', 'translate (10, 215)')
        .style('font-size', '13px')

    dataGroup.append('rect')
        .attr('width', '480')
        .attr('height', '150')
        .attr('fill', 'none')
        .style('stroke-width', 1)
        .style('stroke', 'black')


    let dgShiftX1 = 10
    let dgShiftX2 = 180
    let dgShiftX3 = 280
    let dgShiftY1 = 15
    let dgShiftY2 = 40
    let dgShiftY3 = 65

    let dgLabels = dataGroup.append('g')
        .attr('transform', 'translate (0, '+dgShiftY1+')')
    dgLabels.append('text')
        .attr('transform', 'translate ('+dgShiftX2+', 0)')
        .text('Date')

    dgLabels.append('text')
        .attr('transform', 'translate ('+dgShiftX3+', 0)')
        .text('Location')

    let dgECG = dataGroup.append('g')
        .attr('transform', 'translate (0, '+dgShiftY2+')')
    dgECG.append('text')
        .attr('transform', 'translate ('+dgShiftX1+', 0)')
        .text('Last ECG')

    dgECG.append('text')
        .attr('transform', 'translate ('+dgShiftX2+', 0)')
        .text('09/18/2020')

    dgECG.append('text')
        .attr('transform', 'translate ('+dgShiftX3+', 0)')
        .text('University of Utah Hospital')

    let dgCath = dataGroup.append('g')
        .attr('transform', 'translate (0, '+dgShiftY3+')')

    dgCath.append('text')
        .attr('transform', 'translate ('+dgShiftX1+', 0)')
        .text('Last Cath Procedure')

    dgCath.append('text')
        .attr('transform', 'translate ('+dgShiftX2+', 0)')
        .text('04/04/2001')

    //column2.append('svg')
    let column2SVG = column2.append('svg')
        .attr('id', 'column2SVG')
        .attr('width', '750')
        .attr('height', '210')

    column2SVG.append('rect')
        .attr('id', 'column2Rect')
        .attr('transform', 'translate (10, 0)')
        .attr('width', '710')
        .attr('height', '35')
        .attr('fill', 'none')
        .style('stroke-width', 1)
        .style('stroke', 'black')

    column2SVG.append('text')
        .attr('id', 'colum2Line1')
        .attr('transform', 'translate (355, 25)')
        .text('Select a tab on the left to see relevant files or information')
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
        //.text('Select a tab on the left to see relevant files or information')
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
        
    column2.append('img')
        .attr('id', 'pathwayHighPic')
        .style('padding-left', '150px')
        .attr('alt', 'Heart-Pathway-High')
        .attr('src', 'Images/heart_pathway_high.jpg')
        .attr('height', '0px')
        .attr('width', '0px')
        .style('margin-left', '10px')

    d3.select('#column-1').on('click', resetStoryBoard, true)
})

function scoreColumn2 () {
    d3.select('#colum2Line1').text('HEART Score: 6')
    d3.select('#colum2Line2').text('Moderate risk of Major Adverse Cardiac Event')
    d3.select('#colum2Line3').text('12-16.6% of Adverse Cardiac Event')
    d3.select('#colum2Line4').text('History: Moderately Suspicious (+1)').attr('fill', 'black').on('click', () => {})
    d3.select('#colum2Line5').text('EKG: Non-specific repolarization disturbance (+1)')
    d3.select('#colum2Line6').text('Age: > 65 (+2)')
    d3.select('#colum2Line7').text('Risk Factors: Hypertension and Family History of CVD (+1)')
    d3.select('#colum2Line8').text('Initial Troponin: 2X normal limit (+1)')
    d3.select('#colum2Line9').text('Visit MDCalc Website').attr('fill', 'blue').on('click', ()=> {
        window.open('https://www.mdcalc.com/heart-score-major-cardiac-events')
    })
    d3.select('#MDCalcPpic').attr('height', '350px').attr('width', '710px')
    d3.select('#column2Rect').attr('height', '210')
    d3.select('#column2SVG').attr('height', '210')
    
}

function pathwayColumn2 () {
    d3.select('#colum2Line1').text('HEART Pathway')
    d3.select('#colum2Line2').text('Moderate Risk, Treat as High Risk')
    d3.select('#colum2Line3').text('Order Serial Troponins')
    d3.select('#colum2Line4').text('See HEART Pathway Publication').attr('fill', 'blue').on('click', ()=> {
        window.open('https://www.ahajournals.org/doi/10.1161/CIRCOUTCOMES.114.001384')
    })
    //d3.select('#c2L8Anchor').attr('href', 'https://www.mdcalc.com/heart-score-major-cardiac-events')
    //d3.select('#MDCalcPpic').attr('height', '350px').attr('width', '710px')
    d3.select('#column2Rect').attr('height', '105')
    d3.select('#column2SVG').attr('height', '110')
    d3.select('#pathwayHighPic').attr('height', '500px').attr('width', '550px')


    
}

function resetStoryBoard () {
    d3.select('#colum2Line4').text('').attr('fill', 'black').on('click', () => {})
    d3.select('#column2SVG').selectAll('text').text('')
    d3.select('#colum2Line1').text('Select a tab on the left to see relevant files or information')
    d3.select('#MDCalcPpic').attr('height', '0px').attr('width', '0px')
    d3.select('#column2Rect').attr('height', '35')
    d3.select('#pathwayHighPic').attr('height', '0px').attr('width', '0px')
}