let korean = new Array(0);
let english = new Array(0);
let cnt = 0;

let test_cnt = 0;
function add_word(){
    const check_eng = /[a-zA-Z]/;
    const check_kor = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/;
    
    const en = document.getElementById('english').value;
    const ko = document.getElementById('korean').value;
    
    if (en == "" || !check_eng.test(en)){
        alert("영어 단어를 입력해주세요");
        return;
    }
    if (ko == "" || !check_kor.test(ko)){
        alert("단어 뜻을 입력해주세요");
        return;
    }

    const ul = document.getElementById('list');
    const li = document.createElement('li');
    li.textContent = en+" | " + ko;
    ul.appendChild(li);

    korean.push(ko);
    english.push(en);
    cnt += 1;

    alert("["+korean[cnt-1]+" | " + english[cnt-1]+"] 추가 완료")
    document.getElementById('english').value = "";
    document.getElementById('korean').value = "";

    
}
// li.classList.add('');
// li.classList.add('');
// li.classList.add('');
// li.classList.add('');
// li.classList.add('');
function start(){
    if (cnt == 0){
        alert("단어를 추가해주세요");
        return;
    }

    shuffle();
    const body = document.getElementById('body');
    const div = document.createElement('div');
    const p = document.createElement('p');
    const h3 = document.createElement('h3');
    const input = document.createElement('input');
    const temp_input = document.createElement('input');
    const btn = document.createElement('button');

    div.classList.add('frame');
    
    h3.classList.add('question')
    h3.textContent = english[test_cnt];
    test_cnt += 1;
    
    input.classList.add('answer');
    temp_input.classList.add('temp');

    btn.classList.add('submit_answer');
    btn.onclick = submit_answer;

    p.classList.add('cnt');
    p.textContent = test_cnt+"/"+cnt;
    
    div.appendChild(h3);
    div.appendChild(input);
    div.appendChild(p);
    div.appendChild(btn);
    div.appendChild(temp_input);
    body.appendChild(div);
}

function shuffle(){
    for (let i=0; i<1000; i++){
        let r = Math.floor(Math.random()*cnt);
        let temp = korean[0];
        korean[0] = korean[r];
        korean[r] = temp;
    }
    for (let i=0; i<1000; i++){
        let r = Math.floor(Math.random()*cnt);
        let temp = english[0];
        english[0] = english[r];
        english[r] = temp;
    }
}

function submit_answer(){
    const ans = document.getElementsByClassName('answer').value;
    alert(ans);
}
