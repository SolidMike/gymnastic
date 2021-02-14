const accordion = function () {
    const accordionToggle = document.getElementsByClassName('js-accordion-toggle')

    for (let i = 0; i < accordionToggle.length; i++) {
        accordionToggle[i].addEventListener('click', function () {
            if (!(this.classList.contains('is-active'))) {
                for (let i = 0; i < accordionToggle.length; i++) {
                    accordionToggle[i].classList.remove('is-active')
                }
                this.classList.add('is-active')
            }
        })
    }
}
accordion()