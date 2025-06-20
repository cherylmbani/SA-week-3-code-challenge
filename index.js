document.addEventListener("DOMContentLoaded", function(event){
    displayPosts();
})
    function displayPosts(){
        fetch("http://localhost:3000/posts")
        .then(response=> response.json())
        .then(posts=>{
            posts.forEach(post =>{
            const ul = document.querySelector("#post-list");
               let li = document.createElement("li");
               li.textContent = post.title;
               
               ul.appendChild(li);

            })
        })
    }
//
const postListDiv = document.getElementById('post-list');
postListDiv.addEventListener("click", handlePostClick);

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

    
        
    });
}
