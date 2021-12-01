function roomPainting(array){

let paintCount = Number(array.shift());//10
let tapetiCount = Number(array.shift());//8
let oneGlovePice = Number(array.shift());//2.2
let oneBrushPrice = Number(array.shift());//5

let paintSummery = paintCount * 21.5;
let tapetiSummery = tapetiCount * 5.20;

let gloveCount = Math.ceil(tapetiCount / 100 * 35);
let gloveSummery = oneGlovePice * gloveCount;

let brushCount = Math.floor(paintCount / 100 * 48);
let brushSummery = oneBrushPrice * brushCount;

let priceSummery = paintSummery + tapetiSummery + gloveSummery + brushSummery;

let discount = priceSummery * (1/15);

console.log(`This delivery will cost ${discount.toFixed(2)} lv.`);


}
roomPainting(["10","8","2.2","5"]);