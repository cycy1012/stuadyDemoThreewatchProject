import React, { Component } from 'react';
import * as BannerActions from './BannerAction'
var ReactRouter = require('react-router');
var {Router,Route,hashHistory,Link,IndexRoute,browserHistory} = ReactRouter;
import {connect} from 'react-redux'
import erp from "../../utils/global"
import './banner.scss'


class BannerComponent extends Component {
  constructor(props) {
    super(props);
    this.state={
      step:1,
      startX:0,
      changeX:0,
      startLeft:0,
    }
    this.autoMove = this.autoMove.bind(this);
    this.bannerStop = this.bannerStop.bind(this);
    this.bannerStart = this.bannerStart.bind(this);
    this.bannerMove = this.bannerMove.bind(this);
  }
  componentWillMount(){
    this.props.getBanner('首页轮播图')
  }
  componentWillUnmount() {
    window.clearInterval(window.autoTimer);
    window.autoTimer = null;
    window.clearInterval(window.document.getElementById('bannerInner').timer);
    window.document.getElementById('bannerInner').timer=null;


  }
  componentDidMount() {
    setTimeout(function(){
      document.getElementById('bannerInner').style.left = -document.getElementsByClassName('imgBox')[0].offsetWidth + "px";
      const num = (this.props.imgList.length+2)*100+"%";
      document.getElementById('bannerInner').style.width = num;
      const arryImg = document.getElementsByClassName('imgBox');
      for(let i = 0;i<arryImg.length;i++){
        arryImg[i].style.width = 100/(this.props.imgList.length+2)+"%";
      }
      window.autoTimer = null;
      window.autoTimer = window.setInterval(this.autoMove,3500);
    }.bind(this),100)
  }
  
  autoMove(){
    let step = this.state.step,count = this.props.imgList.length + 1;
    if (step >= (count - 1)) {
        step = 0;
        document.getElementById('bannerInner').style.left = 0;
    }
    step++;
    this.setState({step:step},function(){
      this.focusTip();
    });
    this.animate({left: -step * document.getElementsByClassName('imgBox')[0].offsetWidth}, 500);
  }
  focusTip(){
    let currenStep = this.state.step;
    let tipNum = document.getElementsByClassName('bannerTip')[0].getElementsByTagName("li").length;
    for (let i = 0; i < tipNum; i++) {
        document.getElementsByClassName('bannerTip')[0].getElementsByTagName("li")[i].className = i === (currenStep-1) ? "bg" : "";
    }

  }
  animate(obj, duration) {
        let times = 0;
        let interval = 50;
        let oChange = {};
        let oBegin = {};
        let flag = 0;
        for (let attr in obj) {
            let target = obj[attr];
            let begin = parseFloat(getComputedStyle(document.getElementById('bannerInner'))[attr]);
            let change = target - begin;
            if (change) {
                oBegin[attr] = begin;
                oChange[attr] = change;
                flag++;
            }
        }
        if (flag == 0) {
            return;
        }
        window.clearInterval(document.getElementById('bannerInner').timer);
        function step() { 
            times += interval;
            if (times < duration) {
                for (let attr in oChange) {
                    let value = times / duration * oChange[attr] + oBegin[attr];
                    document.getElementById('bannerInner')['style'][attr] = value + "px";
                }
            }
            else {
                for (let attr in oChange) {
                  document.getElementById('bannerInner')['style'][attr] = obj[attr] + "px";
                }
                window.clearInterval(document.getElementById('bannerInner').timer);
                document.getElementById('bannerInner').timer = null;
            }
        }
        document.getElementById('bannerInner').timer = window.setInterval(step, interval);
    }
  bannerStop(e){
    window.clearInterval(window.autoTimer);
    let startX = e.touches[0].clientX;
    let startLeft = parseFloat(document.getElementById('bannerInner').style.left);
    this.setState({
      startX:startX,
      startLeft:startLeft
    });
  }
  bannerStart(){
    window.autoTimer = null;
    window.autoTimer = window.setInterval(this.autoMove, 3500);
    if(this.state.changeX>(document.getElementsByClassName('imgBox')[0].offsetWidth/5)){
      let step = this.state.step,count = this.props.imgList.length + 2;
      if (step <= 1) {
          step = count-1;
          document.getElementById('bannerInner').style.left = -step * document.getElementsByClassName('imgBox')[0].offsetWidth + "px";
      }
      step--;
      this.setState({step:step},function(){
        this.focusTip();
      });
      this.animate({left: -step * document.getElementsByClassName('imgBox')[0].offsetWidth}, 400);
    }else if(this.state.changeX<-(document.getElementsByClassName('imgBox')[0].offsetWidth/5)){
      this.autoMove();
    }else{
      this.animate({left: -this.state.step * document.getElementsByClassName('imgBox')[0].offsetWidth}, 150);
 
    }
  }
  bannerMove(e){
    let changeX = e.touches[0].clientX - this.state.startX;
    this.setState({changeX:changeX});
    document.getElementById('bannerInner')['style']['left'] = this.state.startLeft + changeX + "px";
  }

  render() {

    const imgList = this.props.imgList;
    return (

      <div className="banner" id="banner">
        <div className="bannerInner" id="bannerInner" onTouchMove={this.bannerMove} onTouchStart={this.bannerStop} onTouchEnd={this.bannerStart}>
          {
            imgList.map(function(item,index){
              if(index == imgList.length-1){

              return <a className="imgBox"><img src={erp.uploadUrl + item.preview}/></a>
              }
            })
          }
          {
            imgList.map(function(item,index){
              return <a className="imgBox"><img src={erp.uploadUrl + item.preview}/></a>
            })
          }
          {
            imgList.map(function(item,index){
              if(index == 0){
              return <a className="imgBox"><img src={erp.uploadUrl + item.preview}/></a>
              }
            })
          }
        </div>
        <ul className="bannerTip">
          {
            imgList.map(function(item,index){
              if(index==0){
                return <li className="bg"></li>
              }else{
                return <li></li>
              }
              
            })
          }
        </ul>
      </div>
    );
  }
};

const mapStateToProps = state => ({
    imgList:state.banner.imgList || []
    
})

export default connect(mapStateToProps, BannerActions)(BannerComponent)