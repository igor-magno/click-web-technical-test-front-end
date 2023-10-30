const observer = new IntersectionObserver(entries => {
    Array.from(entries).forEach(entry => {
        if (entry.intersectionRatio >= 1) {
            entry.target.classList.add('init-hidden-of')
        }
    })
}, {
    threshold: [0, .5, 1]
})
Array.from(document.querySelectorAll('.init-hidden')).forEach(e => {
    observer.observe(e)
})