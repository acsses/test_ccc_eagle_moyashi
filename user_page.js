click_1=false
click_2=false
click_3=false
click_4=false

chart_area = document.getElementById("chart");
var myChart = new Chart(chart_area, {
    type: 'bar',
    data:　{
        labels: ['8月1日', '8月2日', '8月3日', '8月4日', '8月5日', '8月6日', '8月7日'],
        datasets: [
          {
            label: '支給額',
            data: [620, 650, 930, 850, 510, 660, 470],
            backgroundColor: "rgba(89,0,107,1)"
          },{
            label: '要求額',
            data: [550, 450, 730, 750, 410, 450, 580],
            backgroundColor: "rgba(130,201,169,1)"
          }
        ]
    },
    options:{
        title: {
          display: false,
        },
        scales: {
          yAxes: [{
            ticks: {
              suggestedMax: 1000,
              suggestedMin: 0,
              stepSize: 100,
              callback: function(value, index, values){
                return  value +  '¥'
              }
            }
          }]
        },
    }
});


function onclick_1(){
    main_1=document.getElementById("main_1");
    down_1=document.getElementById("down_1");
    if(click_1==false){
        main_1.style.display="block"
        main_1.classList.remove('fadeout');
        main_1.classList.add('fadein');
        addEventListener('animationend', function() {
            main_1.style.display="block"
            main_1.style.opacity=1
        });
        click_1=true
        down_1.style.transform="rotate(90deg)"
    }
    else{
        main_1.classList.remove('fadein');
        main_1.classList.add('fadeout');
        addEventListener('animationend', function() {
            main_1.style.opacity=0
            main_1.style.display="none"
        });
        click_1=false
        down_1.style.transform="rotate(0deg)"
    }
}
function onclick_2(){
    main_2=document.getElementById("main_2");
    down_2=document.getElementById("down_2");
    if(click_2==false){
        main_2.style.display="block"
        main_2.classList.remove('fadeout');
        main_2.classList.add('fadein');
        addEventListener('animationend', function() {
            main_2.style.display="block"
            main_2.style.opacity=1
        });
        click_2=true
        down_2.style.transform="rotate(90deg)"
    }
    else{
        main_2.classList.remove('fadein');
        main_2.classList.add('fadeout');
        addEventListener('animationend', function() {
            main_2.style.opacity=0
            main_2.style.display="none"
        });
        click_2=false
        down_2.style.transform="rotate(0deg)"
    }
}
function onclick_3(){
    main_3=document.getElementById("main_3");
    down_3=document.getElementById("down_3");
    if(click_3==false){
        main_3.style.display="block"
        main_3.classList.remove('fadeout');
        main_3.classList.add('fadein');
        addEventListener('animationend', function() {
            main_3.style.display="block"
            main_3.style.opacity=1
        });
        click_3=true
        down_3.style.transform="rotate(90deg)"
    }
    else{
        main_3.classList.remove('fadein');
        main_3.classList.add('fadeout');
        addEventListener('animationend', function() {
            main_3.style.opacity=0
            main_3.style.display="none"
        });
        click_3=false
        down_3.style.transform="rotate(0deg)"
    }
}
function onclick_4(){
  form=document.getElementById("form");
  accept=document.getElementById("accept");
  form.classList.add('fadeout_simple');
  addEventListener('animationend', function() {
      form.style.display="none"
      form.style.opacity=0
  });
  accept.style.display="block"
  accept.classList.add('fadein_simple');
  addEventListener('animationend', function() {
    accept.style.display="block"
    accept.style.opacity=1
  });
  
}