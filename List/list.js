start()
async function start() {
    var w = Math.max(window.innerWidth);
    var wBlock = Math.max(window.innerWidth - 200, 1200);
    // var wBlock = (w - 400) / 3
    // var h = window.innerHeight;

    var body = d3.select("body")
        .style("background", "#F6F6F6")
        .style("font-family", "'Montserrat', sans-serif")
        .style("margin", "0")
        .style("padding", "0")

    var headingContainer = body.append("div")
        .attr("id", "headingContainer")
        .style("height", "200px")
        .style("width", "100%")
        .style("background", "#7db4db")
        .style("position", "relative")
    var heading = headingContainer.append("div")
        .attr("id", "heading")
        .text("Brett Farley Example Projects")
        .style("font-size", "60px")
        .style("font-weight", "bold")
        .style("width", "100%")
        // .style("height", "100%")
        .style("text-align", "center")
        .style("margin", "0")
        .style("position", "absolute")
        .style("top", "50%")
        // .style("padding-top", "80px")
        // .style("padding-bottom", "80px")
        .style("transform", "translateY(-50%)")
        // .style("padding", "30px")
        .style("color", "#fff")
    var heading2 = body.append("a")
        .attr("id", "heading")
        .text("linkedin.com/in/brettcfarley/")
        .attr("href", "https://www.linkedin.com/in/brettcfarley/")
        .style("font-size", "20px")
        .style("font-weight", "bold")
        .style("width", "100%")
        // .style("height", "100%")
        .style("text-align", "center")
        // .style("margin", "auto")
        // .style("padding-top", "80px")
        // .style("padding-bottom", "80px")
        // .style("padding", "30px")
        .style("color", "#222")
        

    var blockContainer = body.append("div")
        .classed("blockContainer", true)
        .attr("id", "blockContainer")
        .style("width", "100%")
        // .style("background", "red")
        // .style("background", "#F6F6F6")
        .style("margin", "auto") 
    var block = blockContainer.append("div")
        .classed("block", true)
        // .style("background", "orange")
        .attr("id", "block")
        // .style("width", wBlock + "px")
        // .style("display", "flex")
        // .style("gap", "20px")
        // .style("flex-wrap", "wrap")
        .style("margin", "auto")
        .style("padding", "20px")
        .style("display", "grid")
        .style("grid-column-gap", "20px")
        .style("grid-row-gap", "20px")
        // .style("grid-template-columns", "repeat(auto-fit, minmax(300px, 1fr))")

    var list = await d3.csv("list.csv")
    var blocks = block.selectAll("a")
        .attr("id", "blocks")
        .data(list).join("a")
        // .style("width", wBlock + "px")
        .style("height", "100%")
        // .style("padding", "20px")
        .style("margin", "auto")
        .style("background", "#FFF")
        .attr("href", d => d.Link)
        .attr("target", "_blank")
        .style("text-decoration", "none")
        .style("color", "#111")
        .style("box-shadow", "0 4px 12px rgba(0,0,0,.08)")

    var titles = blocks.append("div")
        .attr("id", "titles")
        .text(d => d.Title)
        .style("max-width", "100%")
        .style("margin", "auto")
        .style("font-size", "16px")
        .style("font-weight", "bold")
        .style("text-align", "center")
        .style("padding", "20px")
            // Title,Details,Image,Link

    var imageContainer = blocks.append("div")
        .attr("id", "imageContainer")
        .style("max-width", "100%")
        .style("padding-left", "20px")
        .style("padding-right", "20px")
    var images = imageContainer.append("img")
        .attr("id", "images")
        .attr("src", d=> d.Image)
        .style("max-width", "100%")
        .style("text-align", "center")
        //="img_girl.jpg" alt="Girl in a jacket" width="500" height="600">")

    var details = blocks.append("div")
        .attr("id", "details")
        .text(d => d.Details)
        .style("max-width", "100%")
        .style("margin", "auto")
        .style("font-size", "14px")
        .style("text-align", "left")
        .style("padding", "10px")
            // Title,Details,Image,Link

    console.log(list)



    // .text("Hello")
}