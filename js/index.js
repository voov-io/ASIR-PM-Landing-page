const scroll =  document.getElementById('scroll');

scroll.addEventListener("scroll", function name(e) {
    let factor = e.scrollLeft / (e.scrollWidth - e.width());
    if(factor < 0.2) {
        let move = $(e.lastChild);
        move.remove();
        e.prepend(move);
        e.scrollLeft += move.width();
    } else if(factor > 0.8) {
        let move = $(e.firstChild);
        move.remove();
        e.append(move);
        e.scrollLeft -= move.width();
    }
})
