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
        .attr('height', '180')
        .attr('fill', 'none')
        .style('stroke-width', 1)
        .style('stroke', 'black')


    let dgShiftX1 = 10
    let dgShiftX2 = 180
    let dgShiftX3 = 280
    let dgShiftY1 = 15
    let dgShiftY2 = 45
    let dgShiftY3 = 75
    let dgShiftY4 = 105
    let dgShiftY5 = 135
    let dgShiftY6 = 165

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

    dgECG.on('click', () => {
        ecgColumn2()
    })

    let dgCath = dataGroup.append('g')
        .attr('transform', 'translate (0, '+dgShiftY3+')')

    dgCath.append('text')
        .attr('transform', 'translate ('+dgShiftX1+', 0)')
        .text('Last Cath Procedure')

    dgCath.append('text')
        .attr('transform', 'translate ('+dgShiftX2+', 0)')
        .text('04/04/2001')

    dgCath.append('text')
        .attr('transform', 'translate ('+dgShiftX3+', 0)')
        .text("St. Mark's Hospital")

    dgCath.on('click', () => {
        cathColumn2()
    })
    
    let dgECHO = dataGroup.append('g')
        .attr('transform', 'translate (0, '+dgShiftY4+')')

    dgECHO.append('text')
        .attr('transform', 'translate ('+dgShiftX1+', 0)')
        .text('Last ECHO')

    dgECHO.append('text')
        .attr('transform', 'translate ('+dgShiftX2+', 0)')
        .text('06/03/2018')

    dgECHO.append('text')
        .attr('transform', 'translate ('+dgShiftX3+', 0)')
        .text('Utah Valley Hospital')

    dgECHO.on('click', () => {
        echoColumn2()
    })
    
        let dgCardioNote = dataGroup.append('g')
        .attr('transform', 'translate (0, '+dgShiftY5+')')

    dgCardioNote.append('text')
        .attr('transform', 'translate ('+dgShiftX1+', 0)')
        .text('Last Cardiology Note')

    dgCardioNote.append('text')
        .attr('transform', 'translate ('+dgShiftX2+', 0)')
        .text('09/19/2020')

    dgCardioNote.append('text')
        .attr('transform', 'translate ('+dgShiftX3+', 0)')
        .text('University of Utah Hospital')

    dgCardioNote.on('click', () => {
        cardioColumn2()
    })

    let dgDischarge = dataGroup.append('g')
        .attr('transform', 'translate (0, '+dgShiftY6+')')

    dgDischarge.append('text')
        .attr('transform', 'translate ('+dgShiftX1+', 0)')
        .text('Last Discharge Summary')

    dgDischarge.append('text')
        .attr('transform', 'translate ('+dgShiftX2+', 0)')
        .text('09/19/2020')

    dgDischarge.append('text')
        .attr('transform', 'translate ('+dgShiftX3+', 0)')
        .text('University of Utah Hospital')

    dgDischarge.on('click', () => {
        dischargeColumn2()
    })

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
        .style('font-size', '16px')

    column2SVG.append('text')
        .attr('id', 'colum2Line10')
        .attr('transform', 'translate (20, 215)')
        .style('font-size', '16px')

    column2SVG.append('text')
        .attr('id', 'colum2Line11')
        .attr('transform', 'translate (20, 235)')
        .style('font-size', '16px')

    column2SVG.append('text')
        .attr('id', 'colum2Line12')
        .attr('transform', 'translate (20, 255)')
        .style('font-size', '16px')

    column2SVG.append('text')
        .attr('id', 'colum2Line13')
        .attr('transform', 'translate (20, 275)')
        .style('font-size', '16px')

    column2SVG.append('text')
        .attr('id', 'colum2Line14')
        .attr('transform', 'translate (20, 295)')
        .style('font-size', '16px')

    column2SVG.append('text')
        .attr('id', 'colum2Line15')
        .attr('transform', 'translate (20, 315)')
        .style('font-size', '16px')

    column2SVG.append('text')
        .attr('id', 'colum2Line16')
        .attr('transform', 'translate (20, 335)')
        .style('font-size', '16px')

    column2SVG.append('text')
        .attr('id', 'colum2Line17')
        .attr('transform', 'translate (20, 355)')
        .style('font-size', '16px')

    column2SVG.append('text')
        .attr('id', 'colum2Line18')
        .attr('transform', 'translate (20, 375)')
        .style('font-size', '16px')

    column2SVG.append('text')
        .attr('id', 'colum2Line19')
        .attr('transform', 'translate (20, 395)')
        .style('font-size', '16px')

    column2SVG.append('text')
        .attr('id', 'colum2Line20')
        .attr('transform', 'translate (20, 415)')
        .style('font-size', '16px')

    column2SVG.append('text')
        .attr('id', 'colum2Line21')
        .attr('transform', 'translate (20, 435)')
        .style('font-size', '16px')

    column2SVG.append('text')
        .attr('id', 'colum2Line22')
        .attr('transform', 'translate (20, 455)')
        .style('font-size', '16px')

    column2SVG.append('text')
        .attr('id', 'colum2Line23')
        .attr('transform', 'translate (20, 475)')
        .style('font-size', '16px')

    column2SVG.append('text')
        .attr('id', 'colum2Line24')
        .attr('transform', 'translate (20, 495)')
        .style('font-size', '16px')

    column2SVG.append('text')
        .attr('id', 'colum2Line25')
        .attr('transform', 'translate (20, 515)')
        .style('font-size', '16px')

    column2SVG.append('text')
        .attr('id', 'colum2Line26')
        .attr('transform', 'translate (20, 535)')
        .style('font-size', '16px')

    column2SVG.append('text')
        .attr('id', 'colum2Line27')
        .attr('transform', 'translate (20, 555)')
        .style('font-size', '16px')

    column2SVG.append('text')
        .attr('id', 'colum2Line28')
        .attr('transform', 'translate (20, 575)')
        .style('font-size', '16px')

    column2SVG.append('text')
        .attr('id', 'colum2Line29')
        .attr('transform', 'translate (20, 595)')
        .style('font-size', '16px')

    column2SVG.append('text')
        .attr('id', 'colum2Line30')
        .attr('transform', 'translate (20, 615)')
        .style('font-size', '16px')

    column2SVG.append('text')
        .attr('id', 'colum2Line31')
        .attr('transform', 'translate (20, 635)')
        .style('font-size', '16px')

    column2SVG.append('text')
        .attr('id', 'colum2Line32')
        .attr('transform', 'translate (20, 655)')
        .style('font-size', '16px')

    column2SVG.append('text')
        .attr('id', 'colum2Line33')
        .attr('transform', 'translate (20, 675)')
        .style('font-size', '16px')

    column2SVG.append('text')
        .attr('id', 'colum2Line34')
        .attr('transform', 'translate (20, 695)')
        .style('font-size', '16px')

    column2SVG.append('text')
        .attr('id', 'colum2Line35')
        .attr('transform', 'translate (20, 715)')
        .style('font-size', '16px')

    column2SVG.append('text')
        .attr('id', 'colum2Line36')
        .attr('transform', 'translate (20, 735)')
        .style('font-size', '16px')

    column2SVG.append('text')
        .attr('id', 'colum2Line37')
        .attr('transform', 'translate (20, 755)')
        .style('font-size', '16px')

    column2SVG.append('text')
        .attr('id', 'colum2Line38')
        .attr('transform', 'translate (20, 775)')
        .style('font-size', '16px')

    column2SVG.append('text')
        .attr('id', 'colum2Line39')
        .attr('transform', 'translate (20, 795)')
        .style('font-size', '16px')

    column2SVG.append('text')
        .attr('id', 'colum2Line40')
        .attr('transform', 'translate (20, 815)')
        .style('font-size', '16px')

    column2SVG.append('text')
        .attr('id', 'colum2Line41')
        .attr('transform', 'translate (20, 835)')
        .style('font-size', '16px')

    column2SVG.append('text')
        .attr('id', 'colum2Line42')
        .attr('transform', 'translate (20, 855)')
        .style('font-size', '16px')

    column2SVG.append('text')
        .attr('id', 'colum2Line43')
        .attr('transform', 'translate (20, 875)')
        .style('font-size', '16px')

    column2SVG.append('text')
        .attr('id', 'colum2Line44')
        .attr('transform', 'translate (20, 895)')
        .style('font-size', '16px')



        

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

    column2.append('img')
        .attr('id', 'ECGPic')
        .attr('alt', 'bo-jiden-ECG')
        .attr('src', 'Images/bo-jiden-ecg.jpg')
        .attr('height', '0px')
        .attr('width', '0px')
        .style('padding-left', '15px')
        .style('margin-top', '-15px')

    d3.select('#column-1').on('click', resetStoryBoard, true)
})

function scoreColumn2 () {
    d3.select('#column2SVG').selectAll('text').text('')
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
    d3.select('#column2SVG').selectAll('text').text('')
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

function ecgColumn2 () {
    d3.select('#column2SVG').selectAll('text').text('')
    d3.select('#column2Rect').attr('height', '65')
    d3.select('#column2SVG').attr('height', '65')
    d3.select('#colum2Line1').text('Last ECG 09/18/2020')
    d3.select('#colum2Line2').text('University of Utah Hospital')
    d3.select('#ECGPic').attr('height', '350px').attr('width', '710px')

}

function cathColumn2 () {
    d3.select('#column2Rect').attr('height', '725')
    d3.select('#column2SVG').attr('height', '725')
    d3.select('#colum2Line1').text('Last Cath Prodecure 04/04/2001')
    d3.select('#colum2Line2').text('Internal Jugular Central Line Procedure Notes')
    d3.select('#colum2Line3').text("St. Mark's Hospital")
    d3.select('#colum2Line4').text("INDICATION: Acute Angina")
    d3.select('#colum2Line5').text("PROCEDURE OPERATOR: Killary Hinton")
    d3.select('#colum2Line6').text("ATTENDING PHYSICIAN: In Attendance (Y)")
    d3.select('#colum2Line8').text("CONSENT:")
    d3.select('#colum2Line9').attr('fill', 'black').on('click', ()=> {}).text("Consent was obtained from Bo Jiden prior to the procedure. Indications, risks, and ")
    d3.select('#colum2Line10').text("benefits were explained at length. The procedure was performed emergently and the ")
    d3.select('#colum2Line11').text("permission was implied because of the emergent nature.")
    d3.select('#colum2Line13').text("PROCEDURE SUMMARY:")
    d3.select('#colum2Line14').text("The CDC Central Line Insertion Practices form was completed by an independent")
    d3.select('#colum2Line15').text("observer (Lonika Melinsky) starting with the first handwash prior to starting sterile")
    d3.select('#colum2Line16').text("technique. A time out was performed. My hands were washed immediately prior to the ")
    d3.select('#colum2Line17').text("procedure. I wore a surgical cap, mask with protective eyewear, full gown and sterile ")
    d3.select('#colum2Line18').text("gloves throughout the procedure. The patient was placed in Trendelenburg position. ")
    d3.select('#colum2Line19').text("RIGHT chest region was prepped using chlorhexidine scrub and draped in sterile")
    d3.select('#colum2Line20').text("fashion using a full drape and sterile probe cover employed. The medial and lateral")
    d3.select('#colum2Line21').text("heads of the sternocleidomastoid muscle were identified as was the carotid pulse.")
    d3.select('#colum2Line22').text("The Internal Jugular vein was identified using the ultrasound. Anesthesia was")
    d3.select('#colum2Line23').text("achieved over the vein using 1% lidocaine. Using real-time out of plane guidance,")
    d3.select('#colum2Line24').text("the introducer needle was inserted into the Internal Jugular vein under direct ")
    d3.select('#colum2Line25').text("ultrasound visualization. Venous blood was withdrawn. The syringe was removed and a ")
    d3.select('#colum2Line26').text("guidewire was advanced into the introducer needle. The guidewire was visualized in")
    d3.select('#colum2Line27').text("the Internal Jugular Vein by ultrasound. A small incision was made at the skin")
    d3.select('#colum2Line28').text("surface with a scalpel and the introducer needle was exchanged for a dilator over ")
    d3.select('#colum2Line29').text("the guidewire. After appropriate dilation was obtained, the dilator was exchanged ")
    d3.select('#colum2Line30').text("over the wire for a central venous catheter. The wire was removed and the catheter ")
    d3.select('#colum2Line31').text("was sutured in place at 2 cm. A sterile sorbaview shield was placed over the")
    d3.select('#colum2Line32').text("catheter at the insertion site. The patient tolerated the procedure without any")
    d3.select('#colum2Line33').text("hemodynamic compromise. At time of procedure completion, all ports aspirated and")
    d3.select('#colum2Line34').text("flushed properly. Post-procedure chest x-ray is pending at this time. Estimated")
    d3.select('#colum2Line35').text("blood loss is 500 mL.")

}

function echoColumn2() {
    d3.select('#column2Rect').attr('height', '415')
    d3.select('#column2SVG').attr('height', '415')
    d3.select('#colum2Line1').text('Last Echocardiogram 06/03/2018')
    d3.select('#colum2Line2').text('Echocardiogram Results')
    d3.select('#colum2Line3').text("Utah Valley Hospital")
    d3.select('#colum2Line5').text("LVEF Transcribed Results")
    d3.select('#colum2Line6').text("LVEF Study Date: 06/03/2018 MDT ")
    d3.select('#colum2Line7').text("Modality Source: Echo (Outside)")
    d3.select('#colum2Line8').text("LVEF Location: IMC")
    d3.select('#colum2Line9').text("Ejection Fraction: 40%")
    d3.select('#colum2Line10').attr('fill', 'black').on('click', ()=> {}).text("LVEF scanned into iCentra: Yes ")
    d3.select('#colum2Line11').text("RARA TEADE, RN - 06/23/2018 10:29 MDT")
    d3.select('#colum2Line12').text("")
    d3.select('#colum2Line13').text("Result type:       LVEF Transcribed Results - Text")
    d3.select('#colum2Line14').text("Result date:	    October 23, 2018 12:20 MDT")
    d3.select('#colum2Line15').text("Result status:	    Auth (Verified)")
    d3.select('#colum2Line16').text("Result title:	    Ejection Fraction")
    d3.select('#colum2Line17').text("Performed by:	    RARA TEADE, RN on June 3, 2018 10:29 MDT")
    d3.select('#colum2Line18').text("Verified by:	    RARA TEADE, RN on June 3, 2018 10:29 MDT")
    d3.select('#colum2Line19').text("Encounter info:	RRT000040952, YYT Hospital, Prereg")
    
}

function cardioColumn2 () {
    d3.select('#column2Rect').attr('height', '815')
    d3.select('#column2SVG').attr('height', '815')
    d3.select('#colum2Line1').text('Last Cardiology Note 09/19/2020')
    d3.select('#colum2Line2').text('Cardiology Note')
    d3.select('#colum2Line3').text("University of Utah Hospital")
    d3.select('#colum2Line5').text("DISCHARGE DIAGNOSIS: Non-ST elevation myocardial infarction")
    d3.select('#colum2Line7').text("PRIMARY CARE PHYSICIAN: Bunter Hiden")
    d3.select('#colum2Line9').text("DISCHARGE MEDICATIONS")
    //d3.select('#colum2Line8').text("CONSENT:")
    d3.select('#colum2Line10').attr('fill', 'black').on('click', ()=> {}).text("1. Aspirin 325 mg daily.")
    d3.select('#colum2Line11').text("2. Plavix 75 mg daily.")
    d3.select('#colum2Line12').text("3. Lopressor 50 mg twice daily.")
    d3.select('#colum2Line13').text("4. Lipitor 80 mg daily.")
    d3.select('#colum2Line14').text("5. Wellbutrin SR 150 mg as previously directed.")
    d3.select('#colum2Line16').text("HPI: Patient reports no orthopnea, chest pain, PND, TIA symptoms, or syncope.")
    d3.select('#colum2Line18').text("ROS: Pertinent positives as above, all others are negative per 10 system review.")
    d3.select('#colum2Line20').text("LABORATORY DATA/DIAGNOSTIC STUDIES:")
    d3.select('#colum2Line21').text("The patient had an EKG done today which was reviewed today by me. The EKG showed")
    d3.select('#colum2Line22').text("sinus rhythm with a QT interval of 420 ms and a QRS of 100 ms. ")
    d3.select('#colum2Line23').text("Patient has a CHADS-VAS score of 2. Discussed anti-coagulation with patient. ")
    d3.select('#colum2Line24').text("Patient will remain on Plavix, Lopressor and Lipitor. Patient will follow up with ")
    d3.select('#colum2Line25').text("their PCP for routine blood draws and dosing adjustments. Patient’s decision ")
    d3.select('#colum2Line26').text("regarding anti-coagulation was based on guideline directed shared decision making.")
    d3.select('#colum2Line27').text("The risks, benefits, indications, alternatives, and outcomes were discussed today ")
    d3.select('#colum2Line28').text("with the patient in their appointment. All decisions were made with the patient in")
    d3.select('#colum2Line29').text("a shared decision process and the patient agrees with the above plan.")
    d3.select('#colum2Line30').text("")
    d3.select('#colum2Line31').text("ASSESSMENT/PLAN:")
    d3.select('#colum2Line32').text("Given the patients lead failure, I have recommended a lead extraction. The risk of")
    d3.select('#colum2Line33').text("the procedure were described including but not necessarily limited to death,")
    d3.select('#colum2Line34').text("myocardial infarction, stroke, cardiac tamponade, possible open heart surgery or ")
    d3.select('#colum2Line35').text("other surgical procedure to correct a complication, bleeding possibly requiring ")
    d3.select('#colum2Line36').text("blood or blood product, transfusion, infection, vascular injury, pneumothorax, ")
    d3.select('#colum2Line37').text("deep vein thrombosis, nerve injury, possible medical device malfunction, cancer ")
    d3.select('#colum2Line38').text("from radiation exposure, vascular avulsion, heart valve disruption, heart inversion")
    d3.select('#colum2Line39').text("or perforation, lead fragment embolization or orphaning, or pulmonary embolus.")

}

function dischargeColumn2 () {
    d3.select('#column2Rect').attr('height', '905')
    d3.select('#column2SVG').attr('height', '905')
    d3.select('#colum2Line1').text('Last Discharge Summary 09/19/2020')
    d3.select('#colum2Line2').text('Cardiac Discharge Summary')
    d3.select('#colum2Line3').text("University of Utah Hospital")
    d3.select('#colum2Line5').text("DATE OF ADMISSION: 09/18/2020")
    d3.select('#colum2Line6').text("DATE OF DISCHARGE: 09/18/2020")
    d3.select('#colum2Line7').text("PRIMARY CARE PHYSICIAN: Araña Grande")
    d3.select('#colum2Line9').text("DISCHARGE MEDICATIONS")
    d3.select('#colum2Line10').attr('fill', 'black').on('click', ()=> {}).text("1. Aspirin 325 mg daily.")
    d3.select('#colum2Line11').text("2. Plavix 75 mg daily.")
    d3.select('#colum2Line12').text("3. Lopressor 50 mg twice daily.")
    d3.select('#colum2Line13').text("4. Lipitor 80 mg daily.")
    d3.select('#colum2Line14').text("5. Wellbutrin SR 150 mg as previously directed.")
    d3.select('#colum2Line16').text("PROCEDURE:  Cardiac catheterization with angioplasty and stent placement to the LAD")
    d3.select('#colum2Line17').text("and RCA.")
    d3.select('#colum2Line19').text("HISTORY OF PRESENT ILLNESS:  This 78-year-old male with no previous history of heart ")
    d3.select('#colum2Line20').text("disease presented complaining of a 4-day history of waxing and waning chest pain ")
    d3.select('#colum2Line21').text("radiating to the left arm. He was admitted to the hospital. Peak troponin was 1.5, ")
    d3.select('#colum2Line22').text("peak CPK 420, MB 6.2 and index 1.5%. The patient then underwent cardiac ")
    d3.select('#colum2Line23').text("catheterization, which revealed a 90% proximal LAD lesion, a 60% lesion of the first ")
    d3.select('#colum2Line24').text("obtuse marginal and a 90% mid RCA lesion with a normal ejection fraction. He was  ")
    d3.select('#colum2Line25').text("then transferred here for intervention.")
    d3.select('#colum2Line27').text("PAST MEDICAL HISTORY:  Hypertension.")
    d3.select('#colum2Line29').text("MEDICATIONS PRIOR TO ADMISSION:  None. The patient had stopped taking his ")
    d3.select('#colum2Line30').text("antihypertensive medications.")
    d3.select('#colum2Line32').text("FAMILY HISTORY:  Positive for coronary artery disease. Mother had an MI at the age ")
    d3.select('#colum2Line33').text("of 65 and father died of sudden cardiac death at the age of 70.")
    d3.select('#colum2Line34').text("LABORATORY DATA:  On the day of discharge, white blood cell count 8700, hemoglobin ")
    d3.select('#colum2Line35').text("14.2, hematocrit 41.8, platelet count 280,000. Sodium 141, potassium 3.9, chloride 107,")
    d3.select('#colum2Line36').text(" CO2 of 26, BUN 10, creatinine 1.1, glucose 90. CPK 165, MB 4.2 and troponin 1.66.")
    d3.select('#colum2Line38').text("DISCHARGE STATUS:  The patient is discharged home for outpatient followup with Dr. ")
    d3.select('#colum2Line39').text("Mao Zedong in 1 to 2 weeks. He will also follow up with his primary care physician, ")
    d3.select('#colum2Line40').text("Dr. Araña Grande, within 4 to 6 weeks. The patient has been advised the importance ")
    d3.select('#colum2Line41').text("of smoking cessation. He does plan to quit. He has been given a copy of the ")
    d3.select('#colum2Line42').text("discharge plan with instructions, medications and prescriptions and will talk to Dr. ")
    d3.select('#colum2Line43').text("Araña Grande at the time of his followup visit regarding indication for cardiac ")
    d3.select('#colum2Line44').text("rehab and if he has any further questions or concerns.")

}

function resetStoryBoard () {
    d3.select('#colum2Line4').text('').attr('fill', 'black').on('click', () => {})
    d3.select('#colum2Line9').text('').attr('fill', 'black').on('click', () => {})
    d3.select('#column2SVG').selectAll('text').text('')
    d3.select('#colum2Line1').text('Select a tab on the left to see relevant files or information')
    d3.select('#MDCalcPpic').attr('height', '0px').attr('width', '0px')
    d3.select('#column2Rect').attr('height', '35')
    d3.select('#pathwayHighPic').attr('height', '0px').attr('width', '0px')
    d3.select('#ECGPic').attr('height', '0px').attr('width', '0px')

}