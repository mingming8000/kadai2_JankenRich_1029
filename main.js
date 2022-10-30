let win=0;
let lose=0;
let draw=0;
let message="";
  
  $("#gu_btn").on("click",function(){
    view0="グー";
    $("#katuo_hands").html(view0);
    const r = Math.ceil(Math.random()*3);
    let view1="";
    let view2="";
    if (r==1){
        view1='グー';
        let v1 = document.getElementById("aite_Gu");
        v1.play();
        view2='あいこ';
        draw++;
    }else if (r==2){
        view1='チョキ';
         let v2 = document.getElementById("aite_Choki");
        v2.play();
        view2='カツオの勝ち';
        win++;
    }else if (r==3){
        view1='パー';
        let v3 = document.getElementById("aite_Par");
        v3.play();
        view2='カツオの負け';
        lose++;
    }
    message = (`カツオの${win}勝 ${lose}敗 ${draw}引き分け`);
    // 221029 1039 結果表示を5秒後にしたい
    window.setTimeout(function(){
        // alert('時間切れです');
        $("#pc_hands").html(view1);
        $("#judgement").html(view2);        
        $("#result").html(message);
        if (r==2){
            if (win==1){
                $("#katuo_inning1").html("☆");
            }else if(win==2){
                $("#katuo_inning2").html("☆");
            }else if(win==3){
                $("#katuo_inning3").html("☆");
                window.setTimeout(function(){
                    $("#katuo_hands").html('<img src="./img/katuo_win.jpg" alt="カツオ勝利">');
                    $("#pc_hands").html(`${win}勝 ${lose}敗 ${draw}引き分けでカツオの勝ち！`);
                }, 3000);
            }
        }else if(r==3){
            if (lose==1){
                $("#sazae_inning1").html("●");
            }else if(lose==2){
                $("#sazae_inning2").html("●");
            }else if(lose==3){
                $("#sazae_inning3").html("●");
                window.setTimeout(function(){
                    $("#katuo_hands").html('<img src="./img/katuo_crying.jpg" alt="カツオ敗北">');
                    $("#pc_hands").html(`${win}勝 ${lose}敗 ${draw}引き分けでカツオの負け。。`);
                }, 3000);
            }    
        }
    }, 5000);

 });

 $("#cho_btn").on("click",function(){
    view0="チョキ";
    $("#katuo_hands").html(view0);
    const r = Math.ceil(Math.random()*3);
    let view1="";
    let view2="";
    if (r==1){
        view1='グー';
        let v1 = document.getElementById("aite_Gu");
        v1.play();
        view2='カツオの負け';
        lose++;
    }else if (r==2){
        view1='チョキ';
        let v2 = document.getElementById("aite_Choki");
        v2.play();
        view2='あいこ';
        draw++;
    }else if (r==3){
        view1='パー';
        let v3 = document.getElementById("aite_Par");
        v3.play();
        view2='カツオの勝ち';
        win++;
    }
    message = (`カツオの${win}勝 ${lose}敗 ${draw}引き分け`);
    window.setTimeout(function(){
        // alert('時間切れです');
        $("#pc_hands").html(view1);
        $("#judgement").html(view2);
        $("#result").html(message);
        if (r==3){
            if (win==1){
                $("#katuo_inning1").html("☆");
            }else if(win==2){
                $("#katuo_inning2").html("☆");
            }else if(win==3){
                $("#katuo_inning3").html("☆");
                window.setTimeout(function(){
                    $("#katuo_hands").html('<img src="./img/katuo_win.jpg" alt="カツオ勝利">');
                    $("#pc_hands").html(`${win}勝 ${lose}敗 ${draw}引き分けでカツオの勝ち！`);
                }, 3000);
            }
        }else if(r==1){
            if (lose==1){
                $("#sazae_inning1").html("●");
            }else if(lose==2){
                $("#sazae_inning2").html("●");
            }else if(lose==3){
                $("#sazae_inning3").html("●");
                window.setTimeout(function(){
                    $("#katuo_hands").html('<img src="./img/katuo_crying.jpg" alt="カツオ敗北">');
                    $("#pc_hands").html(`${win}勝 ${lose}敗 ${draw}引き分けでカツオの負け。。`);
                }, 3000);
            }    
        }
    }, 5000);
 });  

 $("#par_btn").on("click",function(){
    view0="パー";
    $("#katuo_hands").html(view0);
    const r = Math.ceil(Math.random()*3);
    let view1="";
    let view2="";
    if (r==1){
        view1='グー';
        let v1 = document.getElementById("aite_Gu");
        v1.play();
        view2='カツオの勝ち';
        win++;
    }else if (r==2){
        view1='チョキ';
        let v2 = document.getElementById("aite_Choki");
        v2.play();
        view2='カツオの負け';
        lose++;
    }else if (r==3){
        view1='パー';
        let v3 = document.getElementById("aite_Par");
        v3.play();
        view2='あいこ';
        draw++;
    }
    message = (`カツオの${win}勝 ${lose}敗 ${draw}引き分け`);
    window.setTimeout(function(){
        // alert('時間切れです');
        $("#pc_hands").html(view1);
        $("#judgement").html(view2);
        $("#result").html(message);
        if (r==1){
            if (win==1){
                $("#katuo_inning1").html("☆");
            }else if(win==2){
                $("#katuo_inning2").html("☆");
            }else if(win==3){
                $("#katuo_inning3").html("☆");
                window.setTimeout(function(){
                    $("#katuo_hands").html('<img src="./img/katuo_win.jpg" alt="カツオ勝利">');
                    $("#pc_hands").html(`${win}勝 ${lose}敗 ${draw}引き分けでカツオの勝ち！`);
                }, 3000);
            }
        }else if(r==2){
            if (lose==1){
                $("#sazae_inning1").html("●");
            }else if(lose==2){
                $("#sazae_inning2").html("●");
            }else if(lose==3){
                $("#sazae_inning3").html("●");
                window.setTimeout(function(){
                    $("#katuo_hands").html('<img src="./img/katuo_crying.jpg" alt="カツオ敗北">');
                    $("#pc_hands").html(`${win}勝 ${lose}敗 ${draw}引き分けでカツオの負け。。`);
                }, 3000);
            }    
        }
    }, 5000);
 });  
