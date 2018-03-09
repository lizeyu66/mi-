//banner效果
{
	//banner动效
	let images=document.querySelectorAll(".imgss");
	let b_icos=document.querySelectorAll(".b_ico");
	let banner=document.querySelector("#banner");
	let next=document.querySelector(".banner_rbtn");
	let prev=document.querySelector(".banner_lbtn");
	b_icos.forEach(function(ele,index){
			ele.onclick=function(){
			for(let i=0;i<images.length;i++){
				images[i].classList.remove("active");
				b_icos[i].classList.remove("active");
			}
			this.classList.add("active");
			images[index].classList.add("active");
			n=index;
		}
	})

		let n=0;
	let t=setInterval(move,3000);
	function move(){
		n++;
		if(n===images.length){
			n=0;
		}
		if(n<0){
			n=images.length-1;
		}
			for(let i=0;i<images.length;i++){
				images[i].classList.remove("active");
				b_icos[i].classList.remove("active");
			}
			b_icos[n].classList.add("active");
			images[n].classList.add("active");
		}
	banner.onmouseenter=function(){
		clearInterval(t);  //把t停止掉
	}
	banner.onmouseleave=function(){
		t=setInterval(move,3000);
	}

	next.onclick=function(){
		move();
	}

	//让图片跟随点击速度切换，当点击快的时候不会出现闪屏
	let flag=true;
	next.onclick=function(){
		if(flag){
			flag=false;
			move();
		}
	}
	prev.onclick=function(){
		n-=2;   //执行上一张
		move();
	}


	images.forEach(function(ele,index){
		ele.addEventListener("transitionend",function(){
			flag=true;
		})
	})
	
}
//小米单品效果
{
	const prev=document.querySelector(".star_btn .prev");
	const next=document.querySelector(".star_btn .next");
	const inner=document.querySelector(".star_bottom_inner");
	let n=0;    //代表当前往左边移动几屏
	next.onclick=function(){
		n++;
		prev.classList.remove("disable");
		if(n===2){
			this.classList.add("disable");
		}
		if(n===3){
			n=2;
			return;  //终值函数执行
		}
		inner.style.marginLeft=-992*n+"px";
	}
	prev.onclick=function(){
		n--;
		next.classList.remove("disable");
		if(n===0){
			this.classList.add("disable");
		}
		if(n===-1){
			n=0;
			return;
		}
		inner.style.marginLeft=-992*n+"px";
	}

}
//为你推荐效果
{
	const prev=document.querySelector(".star_btn .prev1");
	const next=document.querySelector(".star_btn .next1");
	const inner=document.querySelector(".dapei_bottom_inner");
	let n=0;    //代表当前往左边移动几屏
	next.onclick=function(){
		n++;
		prev.classList.remove("disable");
		if(n===2){
			this.classList.add("disable");
		}
		if(n===3){
			n=2;
			return;  //终值函数执行
		}
		inner.style.marginLeft=-1240*n+"px";
	}
	prev.onclick=function(){
		n--;
		next.classList.remove("disable");
		if(n===0){
			this.classList.add("disable");
		}
		if(n===-1){
			n=0;
			return;
		}
		inner.style.marginLeft=-1240*n+"px";
	}

}

//内容效果
{
	const prev=document.querySelector(".neirong_item .nr_prev");
	const next=document.querySelector(".neirong_item .nr_next");
	const inner=document.querySelector(".nr_bottom_inner");
	let n=0;    //代表当前往左边移动几屏
	next.onclick=function(){
		n++;
		inner.style.marginLeft=-310*n+"px";
	}
	prev.onclick=function(){
		n--;
		inner.style.marginLeft=-310*n+"px";
	}

}

//智能效果
{
	const contentList=document.querySelectorAll(".zhineng");
	contentList.forEach(function(ele){
		content(ele);
	});
	function content(parent){
		var btns=parent.querySelectorAll(".zhineng_more span");
		var cons=parent.querySelectorAll(".zhineng .zhineng_bottom");
		for(let i=0;i<cons.length;i++){
			btns[i].onmouseenter=function(){
			for(let j=0;j<cons.length;j++){
			btns[j].classList.remove("active3");
			cons[j].style.zIndex="";
		}
		cons[i].style.zIndex=10;
		
	}
	
	}
	
	}

}