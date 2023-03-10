"use strict"

$.get("data/blog.json").done(function(data){
    let html = "";

    data.forEach(function(blog){
        html += "<div>" +
            "<h3>" + blog.title + "</h3>"
            + "<p>" + blog.content + "</p>"
            + "<div>" + "Categories: " + blog.categories + "</div>"
            + "</div>";
    })
    $("#posts").append(html);
})

$(".refresh-posts").click(function (){
        $.get("data/blog.json").done(function (data){
            let html = "";

            data.forEach(function(blog){
                html += "<div id='posts'>" +
                    "<h3>" + blog.title + "</h3>"
                    + "<p>" + blog.content + "</p>"
                    + "<div>" + "Categories: " + blog.categories + "</div>"
                    + "</div>";
            })

            $("#posts").html(html);
        })
    }
);