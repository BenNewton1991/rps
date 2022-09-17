function testing() {
    alert("just testing...")
}


function computer_guess() {
    let choice = Math.floor(Math.random()*3)+1
    if (choice == 1){
        let img = document.createElement('img');
        img.src='./images/rock.jpg';
        img.style.width = "100%";
        img.style.height = "100%";
        img.style.borderRadius = '25px';
        document.getElementById("here").innerHTML='';
        document.getElementById("here").append(img);



    } else if (choice == 2) {
        let img = document.createElement('img');
        img.src='./images/paper.jpg';
        img.style.width = "100%";
        img.style.height = "100%";
        img.style.borderRadius = '25px';
        document.getElementById("here").innerHTML='';
        document.getElementById("here").append(img);

    } else {
        let img = document.createElement('img');
        img.src='./images/scissors.jpg';
        img.style.width = "100%";
        img.style.height = "100%";
        img.style.borderRadius = '25px';
        document.getElementById("here").innerHTML='';
        document.getElementById("here").append(img);
    }

    return choice;
}