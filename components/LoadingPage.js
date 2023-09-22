export default function LoadingPage() {

  return (
    <div className="main_layout">
      <img src='/background_h_3.webp' quality={50} className='main_layout'/>
      <div className="main_title">
        <img src="loding.webp" quality={50}/>
        <img src="loding_text.webp" quality={50}/>
      </div>
      <div className="main_layout_icon">
        <img src="/coffee.webp" quality={50}/>
        <img src="/heart_1.webp" quality={50}/>
        <img src="/heart_1.webp" quality={50}/>
        <img src="/music.webp"quality={50}/>
        <img src="/cake.webp" quality={50}/>
        <img src="/heart_2.webp"quality={50}/>
        <img src="/book.webp" quality={50}/>
      </div>

      <style jsx>{`
      @keyframes loadingAnimation {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-9px);
          }
}
          
      @keyframes sixAnimation {
          0% {
            transform: rotate(0);
          }
          50% {
            transform: rotate(-6deg);
          }
          100% {
            transform: rotate(0);
          }
        }

        @keyframes tenAnimation {
          0% {
            transform: rotate(0);
          }
          50% {
            transform: rotate(10deg);
          }
          100% {
            transform: rotate(0);
          }
        }


        *{
          box-sizing: border-box;
        }
        .main_layout{
          position: relative;
          position: center;
          margin-left:auto;
          margin-right:auto;
          width: 500px;
          height: 1081px;
        }
        .main_title > img:nth-of-type(1){
          position: absolute;
          width: 355px;
          height: 348px;
          left: calc(50% - 355px/2 + 0.5px);
          top: 283px;
          animation: loadingAnimation 650ms infinite;
        }
        .main_title > img:nth-of-type(2){
          position: absolute;
          width: 251px;
          left: calc(50% - 251px/2 + 0.5px);
          top: 660px;
        }
        .main_layout_icon > img:nth-of-type(1){
          position: absolute;
          width: 142px;
          height: 140px;
          left: 32px;
          top: 57px;
          animation: sixAnimation 650ms infinite;
        }
        .main_layout_icon > img:nth-of-type(2){
          position: absolute;
          width: 48px;
          height: 45px;
          left: 290px;
          top: 87px;
        }
        .main_layout_icon > img:nth-of-type(3){
          position: absolute;
          width: 65px;
          height: 62px;
          left: 19px;
          top: 544px;
        }
        .main_layout_icon > img:nth-of-type(4){
          position: absolute;
          width: 120px;
          height: 114px;
          left: 346px;
          top: 155px;
          animation: tenAnimation 650ms infinite;
        }
        .main_layout_icon > img:nth-of-type(5){
          position: absolute;
          width: 107px;
          height: 167px;
          left: 21px;
          top: 760px;
          animation: sixAnimation 650ms infinite;
        }
        .main_layout_icon > img:nth-of-type(6){
          position: absolute;
          width: 84px;
          height: 79px;
          left: 403px;
          top: 635px;
        }
        .main_layout_icon > img:nth-of-type(7){
          position: absolute;
          width: 134px;
          height: 121px;
          left: 301px;
          top: 874px;
          animation: sixAnimation 650ms infinite;
        }
        `}</style>
    </div>
  )
}