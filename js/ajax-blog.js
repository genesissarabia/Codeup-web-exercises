"use strict"


$("body").css("background-color", "#ffc1cc")
$.get("data/blog.json").done(function(data){
    let html = "";

    data.forEach(function(blog){
        html += "<div class='border border-dark bg-light'>" +
            "<br>" +
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
                html += "<div id='posts' class='border border-dark" +
                    " posts-color bg-light'>" +
                    "<br>" +
                    "<h3>" + blog.title + "</h3>"
                    + "<p>" + blog.content + "</p>"
                    + "<div>" + "Categories: " + blog.categories + "</div>"
                    + "</div>";
            })

            $("#posts").html(html);
        })
    }
);