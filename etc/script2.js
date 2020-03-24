$('.TestimonialCreator').hover( function() {
    testCaption = document.getElementsByClassName('TestimonialCaption')
    testName = document.getElementsByClassName('TestimonialName')
    testimonialNameText = $(this).attr("data-testimonial-header")
    testimonialCaptionText = $(this).attr("data-testimonial-caption")
    testCaption[0].innerText = testimonialCaptionText
    testName[0].innerText = testimonialNameText
})

$('.HeroHover').hover( function() {
    spotlightImage = document.getElementsByClassName('HeroSpotlight-image')
    spotlightTitle = document.getElementsByClassName('HeroTitle')
    spotlightCaption = document.getElementsByClassName('HeroCaption')

    dataSpotlightImage = $(this).attr("data-spotlight-image")
    dataSpotlightTitle = $(this).attr("data-spotlight-header")
    dataSpotlightCaption = $(this).attr("data-spotlight-caption")

    // spotlightImage[0].style = dataSpotlightImage 
    spotlightImage[0].style = `background-image: url(${dataSpotlightImage});`
    spotlightTitle[0].innerText = dataSpotlightTitle
    spotlightCaption[0].innerText = dataSpotlightCaption
})