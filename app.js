function changes(details){
    Cookies.set(`chosen_color`, `red`);

}

let one = document.getElementById(`redButton`);
    one.addEventListener(`click`,changes);

    function changes2(details){
        Cookies.set(`chosen_color`, `blue`);
    
    }
    
    let two = document.getElementById(`blueButton`);
        two.addEventListener(`click`,changes2);

        function changes3(details){
            Cookies.set(`chosen_color`, `purple`);
        
        }
        
        let three = document.getElementById(`purpleButton`);
            three.addEventListener(`click`,changes3);
