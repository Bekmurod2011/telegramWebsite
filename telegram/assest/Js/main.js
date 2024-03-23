let mom = document.querySelector(".mom"),
    footbal = document.querySelector(".footbal"),
    js = document.querySelector(".js"),
    level = document.querySelector('.level-2'),
    school = document.querySelector('.school'),
    friends = document.querySelector(".friends"),
    eng = document.querySelector(".eng"),
    mom_2 = document.querySelector(".mom-2"),
    friend = document.querySelector('.friends-2'),
    speaker = document.querySelector('.speaker');


let onam = document.querySelector(".onam"),
    footbal_group = document.querySelector(".footbal-group"),
    javascript = document.querySelector(".javascript"),
    english_2 = document.querySelector(".english-2"),
    maktab = document.querySelector('.maktab'),
    dostlar = document.querySelector(".dostlar"),
    english_1 = document.querySelector(".english-1"),
    onam_2 = document.querySelector(".onam-2"),
    friends_group = document.querySelector(".friends-group"),
    speaker_2 = document.querySelector(".speaker-2");


onam.style.display = 'none'
footbal_group.style.display = 'none'
javascript.style.display = 'none'
english_2.style.display = 'none'
maktab.style.display = 'none'
dostlar.style.display = 'none'
english_1.style.display = 'none'
onam_2.style.display = 'none'
friends_group.style.display = 'none'
speaker_2.style.display = 'none'


mom.addEventListener('click', () => {
    onam.style.display = 'block'

    mom.classList.add('active')
    footbal.classList.remove('active')
    js.classList.remove('active')
    level.classList.remove('active')
    school.classList.remove('active')
    friends.classList.remove('active')
    eng.classList.remove('active')
    mom_2.classList.remove('active')
    friend.classList.remove('active')
    speaker.classList.remove('active')

    footbal_group.style.display = 'none'
    javascript.style.display = 'none'
    english_2.style.display = 'none'
    maktab.style.display = 'none'
    dostlar.style.display = 'none'
    english_1.style.display = 'none'
    onam_2.style.display = 'none'
    friends_group.style.display = 'none'
    speaker_2.style.display = 'none'
})

footbal.addEventListener('click', () => {
    let badge = document.querySelector(".badge")
    footbal_group.style.display = 'block'

    mom.classList.remove('active')
footbal.classList.add('active')
js.classList.remove('active')
level.classList.remove('active')
school.classList.remove('active')
friends.classList.remove('active')
eng.classList.remove('active')
mom_2.classList.remove('active')
friend.classList.remove('active')
speaker.classList.remove('active')

    onam.style.display = 'none'
    javascript.style.display = 'none'
    english_2.style.display = 'none'
    maktab.style.display = 'none'
    dostlar.style.display = 'none'
    english_1.style.display = 'none'
    onam_2.style.display = 'none'
    friends_group.style.display = 'none'
    speaker_2.style.display = 'none'
    badge.style.display = 'none'
})

js.addEventListener('click', () => {
    javascript.style.display = 'block'

    mom.classList.remove('active')
footbal.classList.remove('active')
js.classList.add('active')
level.classList.remove('active')
school.classList.remove('active')
friends.classList.remove('active')
eng.classList.remove('active')
mom_2.classList.remove('active')
friend.classList.remove('active')
speaker.classList.remove('active')
    
    onam.style.display = 'none'
    footbal_group.style.display = 'none'
    english_2.style.display = 'none'
    maktab.style.display = 'none'
    dostlar.style.display = 'none'
    english_1.style.display = 'none'
    onam_2.style.display = 'none'
    friends_group.style.display = 'none'
    speaker_2.style.display = 'none'
})

level.addEventListener('click', () => {
    english_2.style.display = 'block'

    mom.classList.remove('active')
footbal.classList.remove('active')
js.classList.remove('active')
level.classList.add('active')
school.classList.remove('active')
friends.classList.remove('active')
eng.classList.remove('active')
mom_2.classList.remove('active')
friend.classList.remove('active')
speaker.classList.remove('active')
    
    onam.style.display = 'none'
    footbal_group.style.display = 'none'
    javascript.style.display = 'none'
    maktab.style.display = 'none'
    dostlar.style.display = 'none'
    english_1.style.display = 'none'
    onam_2.style.display = 'none'
    friends_group.style.display = 'none'
    speaker_2.style.display = 'none'
})  

school.addEventListener('click', () => {
    maktab.style.display = 'block'

    mom.classList.remove('active')
footbal.classList.remove('active')
js.classList.remove('active')
level.classList.remove('active')
school.classList.add('active')
friends.classList.remove('active')
eng.classList.remove('active')
mom_2.classList.remove('active')
friend.classList.remove('active')
speaker.classList.remove('active')
    
    
    onam.style.display = 'none'
    footbal_group.style.display = 'none'
    javascript.style.display = 'none'
    english_2.style.display = 'none'
    dostlar.style.display = 'none'
    english_1.style.display = 'none'
    onam_2.style.display = 'none'
    friends_group.style.display = 'none'
    speaker_2.style.display = 'none'
})

friends.addEventListener('click', () => {
    dostlar.style.display = 'block'

    mom.classList.remove('active')
footbal.classList.remove('active')
js.classList.remove('active')
level.classList.remove('active')
school.classList.remove('active')
friends.classList.add('active')
eng.classList.remove('active')
mom_2.classList.remove('active')
friend.classList.remove('active')
speaker.classList.remove('active')
    
    onam.style.display = 'none'
    footbal_group.style.display = 'none'
    javascript.style.display = 'none'
    english_2.style.display = 'none'
    maktab.style.display = 'none'
    english_1.style.display = 'none'
    onam_2.style.display = 'none'
    friends_group.style.display = 'none'
    speaker_2.style.display = 'none'
})

eng.addEventListener('click', () => {
    english_1.style.display = 'block'

    mom.classList.remove('active')
footbal.classList.remove('active')
js.classList.remove('active')
level.classList.remove('active')
school.classList.remove('active')
friends.classList.remove('active')
eng.classList.add('active')
mom_2.classList.remove('active')
friend.classList.remove('active')
speaker.classList.remove('active')
    
    onam.style.display = 'none'
    footbal_group.style.display = 'none'
    javascript.style.display = 'none'
    english_2.style.display = 'none'
    maktab.style.display = 'none'
    dostlar.style.display = 'none'
    onam_2.style.display = 'none'
    friends_group.style.display = 'none'
    speaker_2.style.display = 'none'
})

mom_2.addEventListener('click', () => {
    onam_2.style.display = 'block'

    mom.classList.remove('active')
footbal.classList.remove('active')
js.classList.remove('active')
level.classList.remove('active')
school.classList.remove('active')
friends.classList.remove('active')
eng.classList.remove('active')
mom_2.classList.add('active')
friend.classList.remove('active')
speaker.classList.remove('active')
    
    onam.style.display = 'none'
    footbal_group.style.display = 'none'
    javascript.style.display = 'none'
    english_2.style.display = 'none'
    maktab.style.display = 'none'
    dostlar.style.display = 'none'
    english_1.style.display = 'none'
    friends_group.style.display = 'none'
    speaker_2.style.display = 'none'
})

friend.addEventListener('click', () => {
    friends_group.style.display = 'block'

    mom.classList.remove('active')
footbal.classList.remove('active')
js.classList.remove('active')
level.classList.remove('active')
school.classList.remove('active')
friends.classList.remove('active')
eng.classList.remove('active')
mom_2.classList.remove('active')
friend.classList.add('active')
speaker.classList.remove('active')
    
    onam.style.display = 'none'
    footbal_group.style.display = 'none'
    javascript.style.display = 'none'
    english_2.style.display = 'none'
    maktab.style.display = 'none'
    dostlar.style.display = 'none'
    english_1.style.display = 'none'
    onam_2.style.display = 'none'
    speaker_2.style.display = 'none'
})

speaker.addEventListener('click', () => {
    speaker_2.style.display = 'block'

    mom.classList.remove('active')
footbal.classList.remove('active')
js.classList.remove('active')
level.classList.remove('active')
school.classList.remove('active')
friends.classList.remove('active')
eng.classList.remove('active')
mom_2.classList.remove('active')
friend.classList.remove('active')
speaker.classList.add('active')
    
    
    onam.style.display = 'none'
    footbal_group.style.display = 'none'
    javascript.style.display = 'none'
    english_2.style.display = 'none'
    maktab.style.display = 'none'
    dostlar.style.display = 'none'
    english_1.style.display = 'none'
    onam_2.style.display = 'none'
    friends_group.style.display = 'none'
})



let switchBody = document.querySelector(".switch-body"),
    body = document.querySelector("body")

switchBody.addEventListener("click", () => {
    body.classList.toggle('body')
})

let myMsg = document.querySelector('.my-msg'),
    mine = document.querySelector('.mine'),
    input = document.querySelector('.input'),
    send = document.querySelector('.send')

myMsg.style.display = 'none'


send.addEventListener('click', () => {
    myMsg.classList.add('active')
    mine.innerHTML = input.value
})

