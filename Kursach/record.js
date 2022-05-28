class blog{
    constructor(author, title, category, description){
        this.author = author;
        this.title = title;
        this.category = category;
        this.description = description;

        this.addArticle();
    }

    addArticle(){
        let article = document.createElement("article");

        let h1 = document.createElement("h1");
        h1.textContent = this.title;
        article.appendChild(h1);

        let p1 = document.createElement("p");
        p1.innerHTML = `Категория:<strong>${this.category}</strong>`;
        article.appendChild(p1);

        let p2 = document.createElement("p");
        
        p2.innerHTML =`Автор:<strong>${this.author}</strong>`;
        article.appendChild(p2);

        let p3 = document.createElement("p");
        p3.textContent = this.description;
        article.appendChild(p3);

        
        let archiveBtn = document.createElement("button");
        archiveBtn.style.backgroundColor = "#787878";
        archiveBtn.style.color = "white";
        archiveBtn.style.padding = "5px 12px 5px 12px";
        archiveBtn.style.borderRadius = "5px";
        archiveBtn.style.fontSize = "15px";
        archiveBtn.style.border = "0 solid grey";
        archiveBtn.style.float = "right";
        archiveBtn.style.margin = "0 10px 0 10px";
        archiveBtn.textContent = "Архив";
        archiveBtn.addEventListener('click', function(){
            let archiveLi = document.createElement("li");
            archiveLi.innerHTML = `<p>${h1.textContent}</p>`;
            let archiveList = document.getElementById("archiveList");
            archiveList.appendChild(archiveLi);
            
            this.parentNode.parentNode.parentNode.removeChild(this.parentNode.parentNode);
        })
        article.appendChild(archiveBtn);

        let removeBtn = document.createElement("button");
        removeBtn.style.backgroundColor = "#b84242";
        removeBtn.style.color = "white";
        removeBtn.style.padding = "5px 12px 5px 12px";
        removeBtn.style.borderRadius = "5px";
        removeBtn.style.fontSize = "15px";
        removeBtn.style.border = "0 solid red";
        removeBtn.style.margin = "0 10px 0 10px";
        removeBtn.style.float = "right";
        removeBtn.textContent = "Удалить";
        removeBtn.addEventListener('click', function(){
            this.parentNode.parentNode.parentNode.removeChild(this.parentNode.parentNode);
        })
        article.appendChild(removeBtn);

        let li = document.createElement("li");
        li.style.margin = "0px 0px 70px 0px";
        li.appendChild(article);

        let htmlList = document.getElementById("blogsList");
        htmlList.appendChild(li);        
    }
}

function solve(){
    document.querySelector('#createBtn').addEventListener('click', createBlog);

    function createBlog(){
        let author = document.getElementById("author").value;
        let title = document.getElementById("title").value;
        let category = document.getElementById("category").value;
        let description = document.getElementById("description").value;
        
        const newBlog = new blog(author, title, category, description);
    }
}