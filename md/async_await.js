var md = `
async/await是什么
===============

> async/await 是ES2017(ES8)提出的基于Promise的解决异步的最终方案。

## async
* async是一个加在函数前的修饰符，被async定义的函数会默认返回一个Promise对象resolve的值。因此对async函数可以直接then，返回值就是then方法传入的函数。
~~~
		// async基础语法
		async function fun0(){
			console.log(1);
			return 1;
		}
		fun0().then(val=>{
			console.log(val) // 1,1
		})

		async function fun1(){
			console.log('Promise');
			return new Promise(function(resolve,reject){
				resolve('Promise')
			})
		}
		fun1().then(val => {
			console.log(val); // Promise Promise
		})

~~~
## await
* await 也是一个修饰符，只能放在async定义的函数内。可以理解为等待。

* await 修饰的如果是Promise对象：可以获取Promise中返回的内容（resolve或reject的参数），且取到值后语句才会往下执行；

* 如果不是Promise对象：把这个非promise的东西当做await表达式的结果。
~~~
		async function fun(){
			let a = await 1;
			let b = await new Promise((resolve,reject)=>{
				setTimeout(function(){
					resolve('setTimeout')
				},3000)
			})
			let c = await function(){
				return 'function'
			}()
			console.log(a,b,c)
		}
		fun(); // 3秒后输出： 1 "setTimeout" "function"

		function log(time){
			setTimeout(function(){
				console.log(time);
				return 1;
			},time)
		}
		async function fun(){
			let a = await log(1000);
			let b = await log(3000);
			let c = log(2000);
			console.log(a);
			console.log(1)
		}
		fun(); 
		// 立即输出 undefined 1
		// 1秒后输出 1000
		// 2秒后输出 2000
		// 3秒后输出 3000
~~~
## async/await 的正确用法
~~~
		// 使用async/await获取成功的结果
		// 定义一个异步函数，3秒后才能获取到值(类似操作数据库)
		function getSomeThing(){
			return new Promise((resolve,reject)=>{
				setTimeout(()=>{
					resolve('获取成功')
				},3000)
			})
		}

		async function test(){
			let a = await getSomeThing();
			console.log(a)
		}
		test(); // 3秒后输出：获取成功
~~~
`