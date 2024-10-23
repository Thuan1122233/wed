import {SPbanchay, SPgiamgia, SPnoibat} from './data.js'
import {banchay_arr, noibat_arr, giamgia_arr} from './data.js'

const hienspbanchay = ( banchay:SPbanchay) => {
    return `<div>
     <img src="${banchay.hinh}">
     <h4>${banchay.tensanpham} </h4>
     <p>${banchay.gia}</p>
     <p>${banchay.ghichu}</p>
    </div>`;
}
export const showlistbanchay = () => {
   const html_arr = banchay_arr.map(hienspbanchay); //call back
   return html_arr.join("");
}


const hienspnoibat = ( noibat:SPbanchay) => {
    return `<div>
    <img src="${noibat.hinh}">
     <h4>${noibat.tensanpham} </h4>
     <p>${noibat.gia}</p>
     <p>${noibat.ghichu}</p>
    </div>`;
}
export const showlistnoibat = () => {
   const html_arr = noibat_arr.map(hienspnoibat); //call back
   return html_arr.join("");
}


const hienspgiamgia = ( giamgia:SPbanchay) => {
    return `<div>
    <img src="${giamgia.hinh}">
     <h4>${giamgia.tensanpham} </h4>
     <p>${giamgia.gia}</p>
     <p>${giamgia.ghichu}</p>
    </div>`;
}
export const showlistgiamgia = () => {
   const html_arr = giamgia_arr.map(hienspgiamgia); //call back
   return html_arr.join("");
}

const show1thuonghieu = (th) => {
    return `<div>${th.ten}</div> `;
  }
  export const showlistthuonghieu = async () =>{
     let thuonghieu_arr = await  fetch("http://localhost:3000/thuong_hieu")
      .then ( res => res.json())
      .then ( data  => {return data});
     let str=``;
     thuonghieu_arr.forEach ( th => str+= show1thuonghieu(th) )
     return str;
  }