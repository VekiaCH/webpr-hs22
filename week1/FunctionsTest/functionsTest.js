const funArray = [];

//const T = x => y => x;
//const F = x => y => y;
// WEEK 3
//funArray.push("WEEK 3");

/* const pair = a => b => f => f(a)(b);
const fst = p => p(T);
const snd = p => p(F);

const pairEq = a => b => fst(a) === fst(b) && snd(a) === snd(b);
const pairPlus = a => b => pair (fst(a) + fst(b)) (snd(a) + snd(b));
const pairMap = f => p => pair (f(fst(p))) (f(snd(p)));


const oneTwo = pair(1)(2);
const sum = pairPlus(oneTwo)(oneTwo);
const square = x => x * x;
const result = pairMap(square) (oneTwo); */

/*fst(oneTwo) = 0;
const s1 = x => y => z => x;
const s2 = x => y => z => y;
const s3 = x => y => z => z;

const triple = x => y => z => f => f(x)(y)(z);
const a = t => t(s1);
const b = t => t(s2);
const c = t => t(s3);

const oneTwoThree = triple(1);
funArray.push((a(oneTwoThree) === 1).toString());*/

/*const Left   = x => f => g => f (x);
const Right  = x => f => g => g (x);
const either = e => f => g => e (f) (g);
const id = x => x;

const x_ = Math.random();

const safeDiv = num => divisor => 
    divisor === 0 
        ? Left("Cannot divide by 0")
        : Right (num / divisor);

const eShow = x => x((x) => x)((x) => "Result is: "+ x);
const result = safeDiv(1)(1);

either(result) 
    (msg => funArray.push(msg))
    (val => funArray.push(val===1));

funArray.push(eShow(safeDiv(1)(0)) === "Cannot divide by 0" && eShow(safeDiv(x_)(1)) === "Result is: "+x_);
*/

//Week 4
/*funArray.push("Week 4");


const twice = x => x * 2;

funArray.push([1,2,3].map(twice).toString() === "2,4,6");

const divides = x => y => y%3 === 0;

funArray.push([1,2,3,4,5,6].filter(divides(3)).toString() === "3,6");

const join = z => (x,y) => x+z+y;

funArray.push([1,2,3].reduce(join('-')));*/

//Week 5
funArray.push("Week 5")
const e = {revenue: 10000, bonus: null};
const factor_ = 0.2;
/*const bonusFormula = "employee.bonus = employee.revenue * 0.2";

const bonusCalculation = employee => eval(bonusFormula);

bonusCalculation(e);
funArray.push(e.bonus === e.revenue * 0.2);*/
const bonusFormula = "employee.revenue * "+factor_;

const bonusCalculation = Function("employee", "employee.bonus ="+bonusFormula);

bonusCalculation(e);
funArray.push(e.bonus === e.revenue * factor_);

funArray.forEach((e, i) => {
    document.writeln(i + ": ");
    document.writeln(e + '<br/>');
});

