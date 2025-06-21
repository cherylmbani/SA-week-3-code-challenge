document.addEventListener("DOMContentLoaded", function(event){
    main();
});
function main(){
    displayPosts();
    addNewPostListener();

    document.getElementById('post-list')
    .addEventListener("click", handlePostClick);

}
function displayPosts(){
        fetch("http://localhost:3000/posts")
        .then(response=> response.json())
        .then(posts=>{
            const ul = document.querySelector("#post-list ul");
            ul.innerHTML = "";
            console.log(posts); // Added

            posts.forEach(post =>{
               let li = document.createElement("li");
               li.textContent = post.title;
               li.dataset.id = post.id;
               ul.appendChild(li);

            });
            if(posts.length>0){
                showPost(posts[0]);
            }
    
        })
        .catch(error=>{
            console.log(error);
        });
    }
//


function handlePostClick(event){
    const clickedItem = event.target.closest('[data-id]');
    if(!clickedItem) return;

    const id=clickedItem.dataset.id;

    if(id ==="local") return;
    fetch(`http://localhost:3000/posts/${id}`)
    .then(response => response.json())
    .then(post =>{
        showPost(post);
    });
}
function showPost(post){
    const divDetail = document.querySelector("#post-detail");
    divDetail.innerHTML = "";
    
    const h1 = document.createElement("h1");
    h1.textContent=post.title;
    divDetail.appendChild(h1);
        
    const p = document.createElement("p");
    p.textContent = post.content;
    divDetail.appendChild(p);
        
    let address = document.createElement("address");
    address.textContent = `Author: ${post.author}`;
    divDetail.appendChild(address);

    if(post.image){
        const img = document.createElement("img");
        img.src = post.image;
        img.alt = post.title;
        img.style.maxWidth = "100%";
        divDetail.appendChild(img);
    }
}



function addNewPostListener(){
    const form = document.getElementById("new-post-form");
    form.addEventListener("submit", function(e){
        e.preventDefault();
        
        const title = document.getElementById("title").value.trim();
        const content = document.getElementById("content").value.trim();
        const author = document.getElementById("author").value.trim();

        if(!title || !content || !author) return;
        
        const newPost = {title, content, author};

        fetch("http://localhost:3000/posts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newPost)
        })
        .then(response => response.json())
        .then(savedPost => {
            appendPostToList(savedPost);           
            showPost(savedPost);        
            form.reset();
        })
        .catch(error => console.log("Error saving post:", error));


     });
}

    function appendPostToList(post){
        const ul=document.querySelector("#post-list ul");
        const li=document.createElement("li");
        li.textContent = post.title;
        li.dataset.id = post.id;

        ul.appendChild(li);
    }
