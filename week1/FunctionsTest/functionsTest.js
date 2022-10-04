const funArray = [];

const T = x => y => x;
const F = x => y => y;
// WEEK 3
funArray.push("WEEK 3");

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

//fst(oneTwo) = 0;
const s1 = x => y => z => x;
const s2 = x => y => z => y;
const s3 = x => y => z => z;

const triple = x => y => z => f => f(x)(y)(z);
const a = t => t(s1);
const b = t => t(s2);
const c = t => t(s3);

const oneTwoThree = triple(1);
funArray.push((a(oneTwoThree) === 1).toString());

funArray.forEach((e, i) => {
    document.writeln(i + ": ");
    document.writeln(e + '<br/>');
});

