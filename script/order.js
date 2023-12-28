let i = 0;
let j = 0;

//aside쪽 id
let topMenu = document.getElementById('topMenu');
let select1 = document.getElementById('select1');
let select2 = document.getElementById('select2');
let select3 = document.getElementById('select3');
let select4 = document.getElementById('select4');

//main쪽 id
let main = document.getElementById('main');
let meal = document.getElementById('meal');
let cook = document.getElementById('cook');
let set_menu = document.getElementById('set_menu');
let drink = document.getElementById('drink');

//querySeletorAll array
const itemlist = document.querySelectorAll('.select');
const food = document.querySelectorAll('.food');
const food_detail = document.querySelectorAll('.food_detail');
const detail = document.querySelectorAll('.detail');
const product = document.querySelectorAll('.product');
const price = document.querySelectorAll('.price');
const won = document.querySelectorAll('.won');

//Right_Aside id
let Right_Aside = document.getElementById('Right_Aside');
let Right_Aside_Div = document.createElement("div"); //Right_Aside_Div = order_bag
let Right_Aside_p = document.createElement("p");
let textNode_p = document.createTextNode("장바구니");


//메뉴명 불러오기 위한 변수
let textNode_product_name = []; //텍스트노드임...
let order_bag_Div; //회색바탕
let order_bag_p; 

//삭제를 위한 노드와 class
let delete_order_button; 
let textNode_delete_order; 

//가격표시를 위한 변수
let order_count_div;
let plus;
let number;
let minus;

let textNode_count;
let textNode_plus; 
let textNode_minus;
let show_price_p;
let textNode_show_price = [];

let plus_class = [];
let number_class = [];
let minus_class = [];

let number_up;
let number_down;

//원을 붙이기
let show_won;
let textNode_show_won = [];

//topMenu에 붙이기 위한 li들 생성
let meal_li = document.createElement("li");
let cook_li = document.createElement("li");
let set_menu_li1 = document.createElement("li");
let set_menu_li2 = document.createElement("li");
let drink_li_1 = document.createElement("li");
let drink_li_2 = document.createElement("li");

//li에 붙히는 textNode
let textNode_meal = document.createTextNode("식사류");
let textNode_cook = document.createTextNode("요리류");
let textNode1 = document.createTextNode("1인세트");
let textNode2 = document.createTextNode("2인세트");
let textNode_drink_li_1 = document.createTextNode("음료");
let textNode_drink_li_2 = document.createTextNode("주류");

//li들에게 class를 부여하기
meal_li.className = 'topMenu_li';
cook_li.className = 'topMenu_li';
set_menu_li1.className = 'topMenu_li';
set_menu_li2.className = 'topMenu_li';
drink_li_1.className = 'topMenu_li';
drink_li_2.className = 'topMenu_li';

//topMenu_li들의 class를 변수로 저장 배열로 만든다.
let child_topMenu_li = document.getElementsByClassName('topMenu_li'); //아직 배열의 개수는 0

//click 이벤트리스너
select1.addEventListener("click", create_top_meal_li);
select2.addEventListener("click", create_top_cook_li);
select3.addEventListener("click", create_top_set_menu_li);
select4.addEventListener("click", create_top_drink_li);


for(let k = 0; k < food_detail.length; k++){
    food_detail[k].addEventListener("click", Right_Aside_bar);
    food_detail[k].addEventListener("click", create_delete_order);
    food_detail[k].addEventListener("click", show_price);
    food_detail[k].addEventListener("click", food_count);
    food_detail[k].addEventListener("click", show_total_price);
    food_detail[k].addEventListener("click", close_and_order);
}

//mouseover 이벤트리스너
meal.addEventListener("mouseover", changeI1);
meal.addEventListener("mouseover", create_top_meal_li);
cook.addEventListener("mouseover", changeI2);
cook.addEventListener("mouseover", create_top_cook_li);
set_menu.addEventListener("mouseover", changeI3);
set_menu.addEventListener("mouseover", create_top_set_menu_li);
drink.addEventListener("mouseover", changeI4);
drink.addEventListener("mouseover", create_top_drink_li);

//mouseover, mouseout 이벤트리스너
function changeI1(){
    i = 0;
    food[i].addEventListener("mouseover", changeAsideColor);
    food[i].addEventListener("mouseout", originAsideColor);
}

function changeI2(){
    i = 1;
    food[i].addEventListener("mouseover", changeAsideColor);
    food[i].addEventListener("mouseout", originAsideColor);
}
function changeI3(){
    i = 2;
    food[i].addEventListener("mouseover", changeAsideColor);
    food[i].addEventListener("mouseout", originAsideColor);
}
function changeI4(){
    i = 3;
    food[i].addEventListener("mouseover", changeAsideColor);
    food[i].addEventListener("mouseout", originAsideColor);
}

function changeAsideColor(){
    itemlist[i].style.backgroundColor = "red";
    itemlist[i].style.color = "white";
}

function originAsideColor(){
    itemlist[i].style.backgroundColor = "white"
    itemlist[i].style.color = "black"
}

function delete_top_li(){
    for(j = 0; j < child_topMenu_li.length; j++){
        child_topMenu_li[j].parentNode.removeChild(child_topMenu_li[j]);
    }
}

function create_top_meal_li(){
    for(j = 0; j < child_topMenu_li.length; j+1){
        child_topMenu_li[j].parentNode.removeChild(child_topMenu_li[j]);
    }
    meal_li.appendChild(textNode_meal);
    topMenu.appendChild(meal_li);
}

function create_top_cook_li(){
    for(j = 0; j < child_topMenu_li.length; j+1){
        child_topMenu_li[j].parentNode.removeChild(child_topMenu_li[j]);
    }
    cook_li.appendChild(textNode_cook);
    topMenu.appendChild(cook_li);
}

function create_top_set_menu_li(){
    for(j = 0; j < child_topMenu_li.length; j+1){
        child_topMenu_li[j].parentNode.removeChild(child_topMenu_li[j]);
    }
    set_menu_li1.appendChild(textNode1);
    set_menu_li2.appendChild(textNode2);
    topMenu.append(set_menu_li1, set_menu_li2);
}

function create_top_drink_li(){
    for(j = 0; j < child_topMenu_li.length; j+1){
        child_topMenu_li[j].parentNode.removeChild(child_topMenu_li[j]);
    }
    drink_li_1.appendChild(textNode_drink_li_1);
    drink_li_2.appendChild(textNode_drink_li_2);
    topMenu.append(drink_li_1, drink_li_2);
}

function Right_Aside_bar(){
    Right_Aside_p.appendChild(textNode_p);
    Right_Aside.appendChild(Right_Aside_p);

    Right_Aside_Div.id = 'order_bag';

    Right_Aside.appendChild(Right_Aside_Div); //Right_Aside 에 order_bag

    main.style.width = "1300px"
   
    Right_Aside.style.width = "300px"
    Right_Aside.style.height = "800px"

    Right_Aside_Div.style.width = "100%";
    Right_Aside_Div.style.height = "600px";

    for(let i = 0; i < food_detail.length; i++){
        food_detail[i].style.width = "400px"
    }
    
    order_bag_Div = document.createElement("div"); //order_bag은 메뉴를 눌렀을 때 나오는 회색 바탕
    order_bag_p = document.createElement("p"); //order_bag_p는 메뉴명이 나오는 영역


    Right_Aside_Div.appendChild(order_bag_Div);
    order_bag_Div.appendChild(order_bag_p);

    order_bag_Div.className = "order_detail";

    order_bag_Div.style.width = "300px"
    order_bag_Div.style.height = "200px"
    order_bag_Div.style.backgroundColor = "#ccc"

}
let deliver_sum_

function create_delete_order() {
    let order_detail_index;
    let delete_button_index;

    delete_order_button = document.createElement("div");
    textNode_delete_order = document.createTextNode("삭제");

    delete_order_button.appendChild(textNode_delete_order);
    order_bag_Div.appendChild(delete_order_button);
    
    delete_order_button.className = "delete_button";

    order_detail_index = document.querySelectorAll('.order_detail');
    delete_button_index = document.querySelectorAll('.delete_button');
    
    delete_button_index.forEach((el, index) => {
        el.onclick = () => {
            click = 0;

            sum_price -= first_price[index] * Number(number_class[index].innerHTML);

            total_price.innerHTML =  sum_price;

            food_price[index] = 0;
            
            Right_Aside_Div.removeChild(order_detail_index[index]);
        }
    });
}

function show_price() {
    show_price_p = document.createElement("p");
    show_won = document.createElement("p");
}

let first_price = [];
let click = 0;
let sum_price = 0;
let food_price = [];


food_detail.forEach((el, index) => {
    el.onclick = () => {
        click += 1;
        textNode_show_price[index] = document.createTextNode(price[index].innerHTML);
        show_price_p.appendChild(textNode_show_price[index]);
        order_bag_Div.appendChild(show_price_p);
        show_price_p.className = "result_price";

        first_price[click-1] = Number(price[index].innerHTML);

        sum_price += first_price[click-1];
        total_price.innerHTML = sum_price;

        plus_class.forEach((el, index) => {
            let result_price_class = document.querySelectorAll('.result_price');
            for(let j = 0; j < result_price_class.length; j++){
                food_price[j] = Number(result_price_class[j].innerHTML);
            }
            el.onclick = () => {
                sum_price = 0;
                number_up = Number(number_class[index].innerHTML) + 1;
                number_class[index].innerHTML = number_up;
                
                food_price[index] = first_price[index] * number_up;
                result_price_class[index].innerHTML = food_price[index];

                for(let i = 0; i < result_price_class.length; i++){
                    sum_price += food_price[i];
                }

                total_price.innerHTML = sum_price;    
            }
        });

        minus_class.forEach((el, index) => {
            let result_price_class = document.querySelectorAll('.result_price');
            el.onclick = () => {
                sum_price = 0;
                number_down = Number(number_class[index].innerHTML) - 1;
                number_class[index].innerHTML = number_down;
                
                if(number_down <= 1){
                    number_down = 1
                    number_class[index].innerHTML = number_down;
                    food_price[index] = first_price[index];
                    result_price_class[index].innerHTML = food_price[index];
                }

                else{
                    food_price[index] = first_price[index] * number_down;
                    result_price_class[index].innerHTML = food_price[index];
                }

                for(let i = 0; i < result_price_class.length; i++){
                    console.log(food_price[i]);
                    sum_price += food_price[i];
                }

                total_price.innerHTML = sum_price;
            }
        });

        textNode_show_won[index] = document.createTextNode(won[index].innerHTML);
        show_won.appendChild(textNode_show_won[index]);
        order_bag_Div.appendChild(show_won);

        textNode_product_name[index] = document.createTextNode(product[index].innerHTML);
        order_bag_p.appendChild(textNode_product_name[index]);
        order_bag_Div.prepend(order_bag_p);
    }
});


function food_count() {
    order_count_div = document.createElement("div");
    plus = document.createElement("button");
    number = document.createElement("div");
    minus = document.createElement("button");
    
    textNode_plus = document.createTextNode("+");
    textNode_count = document.createTextNode("1");
    textNode_minus = document.createTextNode("-");

    plus.appendChild(textNode_plus);
    number.appendChild(textNode_count);
    minus.appendChild(textNode_minus);
    order_count_div.appendChild(plus);
    order_count_div.appendChild(number);
    order_count_div.appendChild(minus);
    order_bag_Div.appendChild(order_count_div);

    plus.className = 'plus';
    number.className = 'number';
    minus.className = 'minus';

    plus_class = document.querySelectorAll(".plus");
    number_class = document.querySelectorAll(".number");
    minus_class = document.querySelectorAll(".minus");
}

let total_price_div = document.createElement("div");
let sum_text = document.createElement("div");
let total_price = document.createElement("div");
let sum_won = document.createElement("p");

let textNode_sum = document.createTextNode("합계");
let textNode_total_price = document.createTextNode("");
let textNode_sum_one = document.createTextNode("원");

function show_total_price(){
    sum_text.appendChild(textNode_sum);
    total_price.appendChild(textNode_total_price);
    sum_won.appendChild(textNode_sum_one);

    total_price_div.appendChild(sum_text);
    total_price_div.appendChild(total_price);
    total_price_div.appendChild(sum_won);

    Right_Aside.appendChild(total_price_div);

    total_price_div.id = 'total_price_div';
    total_price.id = 'total_price';
}

let close_and_order_div = document.createElement("div");
let close_button = document.createElement("div");
let order_button = document.createElement("div");

let textNode_close_button = document.createTextNode("닫기");
let textNode_order_button = document.createTextNode("주문하기");

function close_and_order(){
    close_button.appendChild(textNode_close_button);
    order_button.appendChild(textNode_order_button);

    close_and_order_div.append(close_button, order_button);
    close_and_order_div.id = 'close_and_order_div';
    Right_Aside.appendChild(close_and_order_div);

    close_button.addEventListener("click", function() {
        click = 0;
        sum_price = 0;
        let order_detail_class = document.querySelectorAll('.order_detail');

        Right_Aside.removeChild(Right_Aside_Div);
        Right_Aside.removeChild(total_price_div);
        Right_Aside.removeChild(close_and_order_div);
        Right_Aside.removeChild(Right_Aside_p);
        

        for(let j=0; j<order_detail_class.length; j++){
            Right_Aside_Div.removeChild(order_detail_class[j]);
        }

        Right_Aside.style.width = "0px"

        main.style.width = "1500px"

        for(let i = 0; i < food_detail.length; i++){
            food_detail[i].style.width = "450px"
        }
    });

    order_button.addEventListener("click", function() {
        click = 0;
        sum_price = 0;
        let order_detail_class = document.querySelectorAll('.order_detail');

        Right_Aside.removeChild(total_price_div);
        Right_Aside.removeChild(close_and_order_div);
        Right_Aside.removeChild(Right_Aside_p);
        Right_Aside.removeChild(Right_Aside_Div);
        
        

        for(let j=0; j<order_detail_class.length; j++){
            Right_Aside_Div.removeChild(order_detail_class[j]);
        }

        Right_Aside.style.width = "0px"

        main.style.width = "1500px"

        for(let i = 0; i < food_detail.length; i++){
            food_detail[i].style.width = "450px"
        }

        swal("감사합니다.", "주문이 완료되었습니다.", "success");
    })
}




