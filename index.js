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
            posts.forEach(post =>{
            const ul = document.querySelector("#post-list ul");
               let li = document.createElement("li");
               li.textContent = post.title;
               
               ul.appendChild(li);

            })
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
    fetch(`http://localhost:3000/posts/${id}`)
    .then(response => response.json())
    .then(post =>{
        const divDetail = document.querySelector("#post-detail");
        divDetail.innerHTML = "";
        
        let h1 = document.createElement("h1");
        h1.textContent=post.title;
        divDetail.appendChild(h1);
        
        let p = document.createElement("p");
        p.textContent = post.content;
        divDetail.appendChild(p);
        
        let address = document.createElement("address");
        address.textContent = post.author;
        divDetail.appendChild(address);

    
        
    })
    .catch(error=>{
        console.log(error);
    });
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
        
        appendPostToList(newPost);
        form.reset();
    });

    function appendPostToList(post){
        const ul=document.querySelector("#post-list ul");
        const li=document.createElement("li");
        li.textContent = post.title;

        ul.appendChild(li);
    }
}
