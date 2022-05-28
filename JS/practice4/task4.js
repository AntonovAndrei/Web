function movie(movies){
    movieArr = new Array();
    for(let i = 0; i < movies.length; i++){
        if(movies[i].includes("addMovie")){
            let mov = {};
            mov.name = movies[i].replace("addMovie ", "");
            movieArr.push(mov);
        }
        else if(movies[i].includes("directedBy")){
            let str = movies[i].replace(" directedBy ", "*");
            let m = str.split("*");

            let index = moviesContain(movieArr, m[0]);

            if(index >= 0){
                movieArr[index].director = m[1];
            }
        }
        else if(movies[i].includes("onDate")){
            let str = movies[i].replace(" onDate ", "*");
            let m = str.split("*");

            let index = moviesContain(movieArr, m[0]);

            if(index >= 0){
                movieArr[index].date = m[1];
            }
        }
    }

    for(let i = 0; i < movieArr.length; i++){
        let obj = movieArr[i];

        let str = "{";
        for(let key of Object.keys(obj)){
            str += `"${key}": "${obj[key]}", `;
        }
        str += "}";

        console.log(str);
    }
}

//if array contain movie return movie index, else return -1
function moviesContain(arr, movieName){
    let index  = -1;
    for(let i = 0; i < arr.length; i++){
        if(arr[i].name === movieName){
            index = i;
            return index;
        }
    }
}

movie(['addMovie Fast and Furious','addMovie Godfather',
        'Inception directedBy Christopher Nolan',
        'Godfather directedBy Francis Ford Coppola',
        'Godfather onDate 29.07.2018',
        'Fast and Furious onDate 30.07.2018',
        'Batman onDate 01.08.2018',
        'Fast and Furious directedBy Rob Cohen']);