let lab1=[5,5,0,0,5,0,10]
let lab2=[5,5,5,5,4,5,10]
let lab3=[5,9,10,15]
let lab45=[10,5,5,5,5,5,8,10,10,10,0]
let lab6=[5,5,10,5,5,10]
let quiz1=[24]
let sum1=lab1[0]+lab1[1]+lab1[2]+lab1[3]+lab1[4]+lab1[5]+lab1[6]
let sum2=lab2[0]+lab2[1]+lab2[2]+lab2[3]+lab2[4]+lab2[5]+lab2[6]
let sum3=lab3[0]+lab3[1]+lab3[2]+lab3[3]
let sum45=lab45[0]+lab45[1]+lab45[2]+lab45[3]+lab45[4]+lab45[5]+lab45[6]+lab45[7]+lab45[8]+lab45[9]+lab45[10]
let sum6=lab6[0]+lab6[1]+lab6[2]+lab6[3]+lab6[4]+lab6[5]
let sumquiz=quiz1[0]
let sums=[sum1,sum2,sum3,sum45,sum6,sumquiz]
let totalscore=(sum1+sum2+sum3+sum45+sum6)*60/240+sumquiz
const results={
	lab1,
	lab2,
	lab3,
	lab45,
	lab6,
	quiz1,
	sums,
	totalscore
}
console.log(results)