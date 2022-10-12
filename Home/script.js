let ApiData=JSON.parse(localStorage.getItem("apiData"))

let topstory_news=document.querySelector('.topstory_news')
let national=document.querySelector('.national')
let international=document.querySelector('.international')
let politics=document.querySelector('.politics')
let busicness=document.querySelector('.busicness')
let tech=document.querySelector('.tech')
let sports=document.querySelector('.sports')
let cricket=document.querySelector('.cricket')
let entertatment=document.querySelector('.entertatment')

function Showtopstory_news(){
    topstory_news.innerHTML=null
    ApiData.forEach((ele)=>{
        if(ele.Catagory=="Top Story"){
            topstory_news.innerHTML+=`
            <div class="news_1">
            <a href="" id=${ele.ID}>
              <img
                src="${ele.Image}"
                alt=""
              />
              <h3>
               ${ele.Headline}
              </h3>
              <p>
               ${ele.ShortNews}
              </p>
              
            </a>
            <div class="icon">
              <div>
                <i class="fa-solid fa-thumbs-up">${ele.Like}</i>
              <i class="fa-sharp fa-solid fa-share">${ele.Share}</i>
              <i class="fa-solid fa-thumbs-down">${ele.Dislike}</i>
              <i class="fa-sharp fa-solid fa-eye">${ele.Watch}</i>
              </div>
              <div>
                <i class="fa-solid fa-heart">123</i>
              <i class="fa-solid fa-bookmark">123</i>
              <i class="fa-solid fa-flag">123</i>
              <i class="fa-solid fa-comment">${ele.Comment}</i>
              </div>
            </div>
          </div>
            `
        }
    })
}
function Show (news){
 return( ` <div class="news2">
    <a href="">
        <div class="img">
            <img src="${news.Image}">
        </div>
        <div>
            <h3>${news.Headline}</h3>
            <p>${news.ShortNews}</p>
        </div>
    </a>
    <div>
    <i class="fa-solid fa-thumbs-up">${news.Like}</i>
    <i class="fa-sharp fa-solid fa-share">${news.Share}</i>
    <i class="fa-solid fa-thumbs-down">${news.Dislike}</i>
    <i class="fa-sharp fa-solid fa-eye">${news.Watch}</i>
    <i class="fa-solid fa-heart">123</i>
    <i class="fa-solid fa-bookmark">123</i>
    <i class="fa-solid fa-flag">123</i>
    <i class="fa-solid fa-comment">${news.Comment}</i>
    </div>
  </div>
    `)
}
function Shownational(){
    // national.innerHTML=null
    ApiData.forEach((ele)=>{
        if(ele.Catagory=="National"){
            national.innerHTML+=Show(ele)
        }
    })
}
function ShowInternational(){
    // national.innerHTML=null
    ApiData.forEach((ele)=>{
        if(ele.Catagory=="International"){
            international.innerHTML+=Show(ele)
        }
    })
}
function Showbusicness(){
    // national.innerHTML=null
    ApiData.forEach((ele)=>{
        if(ele.Catagory=="Busicness"){
            busicness.innerHTML+=Show(ele)
        }
    })
}
function Showpolitics(){
    // national.innerHTML=null
    ApiData.forEach((ele)=>{
        if(ele.Catagory=="Politics"){
            politics.innerHTML+=Show(ele)
        }
    })
}
function Showtech(){
    // national.innerHTML=null
    ApiData.forEach((ele)=>{
        if(ele.Catagory=="Tech"){
            tech.innerHTML+=Show(ele)
        }
    })
}
function Showsports(){
    // national.innerHTML=null
    ApiData.forEach((ele)=>{
        if(ele.Catagory=="Sports"){
            sports.innerHTML+=Show(ele)
        }
    })
}
function Showcricket(){
    // national.innerHTML=null
    ApiData.forEach((ele)=>{
        if(ele.Catagory=="Cricket"){
            cricket.innerHTML+=Show(ele)
        }
    })
}
function Showentertatment(){
    // national.innerHTML=null
    ApiData.forEach((ele)=>{
        if(ele.Catagory=="Tech"){
            entertatment.innerHTML+=Show(ele)
        }
    })
}

Showtopstory_news()
Shownational()
ShowInternational()
Showbusicness()
Showpolitics()
Showtech()
Showsports()
Showcricket()
Showentertatment()