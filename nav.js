function elementFromHtml(html){
    const template = document.createElement("template");
    template.innerHTML = html.trim(); // removing the whitespace
    return template.content.firstElementChild;
}

function active(url,path){
    givenurl = "";
    if(url == givenurl){
        return path +"-active"+".svg";
    }
    else{
        return path + ".svg";
    }
}
const myList = elementFromHtml(`
            <ul>
                <li><img src="${active('','icons/home')}" width="25" height = "auto" >Home</li>
                <li>Wishlist</li>
                <li>History</li>
                <hr>
                <li>Dashboard</li>
                <li>Settings</li>
            </ul>
    `);
document.getElementsByClassName("sidebar")[0].appendChild(myList);