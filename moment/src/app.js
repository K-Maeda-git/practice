"use strict";
exports.__esModule = true;
var moment = require("moment");
// import * as moment from "moment";
// import moment from 'moment';
var typeorm_1 = require("typeorm");
// const yyyymm = '202008';
// function dateSET(hoge:string) {
//   const a = hoge.slice(0, 4);
//   const b = '-';
//   const c = hoge.slice(4);
//   const d = '-01';
//   return a + b + c + d;
// }
// const momentTEST = Between(
//   moment(dateSET(yyyymm)).add(-2, 'month').format('YYYYMM'),
//   moment(dateSET(yyyymm))
//     .add(+2, 'month')
//     .format('YYYYMM'),
// );
// console.log(typeof momentTEST);
// console.log(momentTEST);
// class Test {
//   date = '202008';
//   // 受け取ったyyyymmを分解してyyyy-mm-ddにする
//   dateF(date: string): string {
//     const year = date.slice(0, 4);
//     const hyphen = '-';
//     const month = date.slice(4);
//     const day = '-01';
//     return year + hyphen + month + day;
//   }
//   momentTEST = Between(
//     moment(this.dateF(this.date)).add(-2, 'month').format('YYYYMM'),
//     moment(this.dateF(this.date))
//       .add(+2, 'month')
//       .format('YYYYMM'),
//   );
// }
// const test = new Test();
// console.log(test.momentTEST);
// class Test {
//   dateSTR = '202008';
//   // YYYYMM->YYYY,MMにする
//   dateF(date: string): string {
//     const year = date.slice(0, 4);
//     const comma = ',';
//     const month = date.slice(4);
//     return year + comma + month; // YYYY,MM
//   }
//   // dateSTR(stringの日付)をdate型にして格納
//   date = new Date(this.dateF(this.dateSTR));
//   // betweenで前後2ヶ月を範囲検索
//   BetweenDate = Between(
//     moment(this.date).add(-2, 'month').format('YYYYMM'),
//     moment(this.date)
//       .add(+2, 'month')
//       .format('YYYYMM'),
//   );
// }
var Test = /** @class */ (function () {
    function Test() {
        this.dateSTR = "202008";
        // betweenで前後2ヶ月を範囲検索
        this.BetweenDate = typeorm_1.Between(
        // moment(${ this.dateSTR }01).subscribe(2, 'month').format('YYYYMM'),
        // moment(${ this.dateSTR }01).add(2, 'month').format('YYYYMM'),
        moment(this.dateSTR + "01").subtract(2, "month").format("YYYYMM"), moment(this.dateSTR + "01").add(2, "month").format("YYYYMM"));
    }
    return Test;
}());
var test = new Test();
console.log(test.BetweenDate);
