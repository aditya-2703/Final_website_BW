function visit_link(element){
    var link = element.getAttribute('href');
    let name = "static\\other_html\\"+ element.id +"\\index.html"
    window.open(name, '_blank');
}

function next_gif(){
    let element = document.querySelector(".gif_played");
    curr_id = parseInt(element.id)
    new_id = (curr_id + 1)%7
    new_image = `/static/gifs/${new_id}.gif`
    element.setAttribute("id",new_id)
    element.src = new_image
}