type SPbanchay = { id:number; tensanpham: string; gia: string; ghichu:string, hinh:string;  }
type SPnoibat = { id:number; tensanpham: string; gia: string; ghichu:string, hinh:string;   }
type SPgiamgia = { id:number; tensanpham: string; gia: string; ghichu:string,hinh:string;   }


const banchay_arr: SPbanchay[] = [
   {id: 1, tensanpham: "Thức ăn hạt Me-o Kitten", gia: "45.000vnd", ghichu: "Còn hàng", hinh: "img/img-1.png"},
   {id: 2, tensanpham: "Thức ăn hạt Me-o Kitten", gia: "45.000vnd", ghichu: "Còn hàng", hinh: "img/img-2.png"}, 
   {id: 3, tensanpham: "Thức ăn hạt Me-o Kitten", gia: "45.000vnd", ghichu: "Còn hàng", hinh: "img/img-3.png"}, 
   {id: 4, tensanpham: "Thức ăn hạt Me-o Kitten", gia: "45.000vnd", ghichu: "Còn hàng", hinh: "img/img-4.png"}, 
   {id: 5, tensanpham: "Thức ăn hạt Me-o Kitten", gia: "45.000vnd", ghichu: "Còn hàng", hinh: "img/img-5.png"}, 
   {id: 6, tensanpham: "Thức ăn hạt Me-o Kitten", gia: "45.000vnd", ghichu: "Còn hàng", hinh: "img/img-6.png"}, 
   {id: 7, tensanpham: "Thức ăn hạt Me-o Kitten", gia: "45.000vnd", ghichu: "Còn hàng", hinh: "img/img-7.png"}, 
   {id: 8, tensanpham: "Thức ăn hạt Me-o Kitten", gia: "45.000vnd", ghichu: "Còn hàng", hinh: "img/img-8.png"}, 
];



 
 const noibat_arr:SPnoibat[] = [
   {id: 1, tensanpham: "Thức ăn hạt Me-o Kitten", gia: "45.000vnd", ghichu: "Còn hàng", hinh: "img/img-1.png"},
   {id: 2, tensanpham: "Thức ăn hạt Me-o Kitten", gia: "45.000vnd", ghichu: "Còn hàng", hinh: "img/img-2.png"}, 
   {id: 3, tensanpham: "Thức ăn hạt Me-o Kitten", gia: "45.000vnd", ghichu: "Còn hàng", hinh: "img/img-3.png"}, 
   {id: 4, tensanpham: "Thức ăn hạt Me-o Kitten", gia: "45.000vnd", ghichu: "Còn hàng", hinh: "img/img-4.png"}, 
   {id: 5, tensanpham: "Thức ăn hạt Me-o Kitten", gia: "45.000vnd", ghichu: "Còn hàng", hinh: "img/img-5.png"}, 
   {id: 6, tensanpham: "Thức ăn hạt Me-o Kitten", gia: "45.000vnd", ghichu: "Còn hàng", hinh: "img/img-6.png"}, 
   {id: 7, tensanpham: "Thức ăn hạt Me-o Kitten", gia: "45.000vnd", ghichu: "Còn hàng", hinh: "img/img-7.png"}, 
   {id: 8, tensanpham: "Thức ăn hạt Me-o Kitten", gia: "45.000vnd", ghichu: "Còn hàng", hinh: "img/img-8.png"}, 
 ];

 const giamgia_arr:SPgiamgia[] = [
   {id: 1, tensanpham: "Thức ăn hạt Me-o Kitten", gia: "45.000vnd", ghichu: "Còn hàng", hinh: "img/img-1.png"},
   {id: 2, tensanpham: "Thức ăn hạt Me-o Kitten", gia: "45.000vnd", ghichu: "Còn hàng", hinh: "img/img-2.png"}, 
   {id: 3, tensanpham: "Thức ăn hạt Me-o Kitten", gia: "45.000vnd", ghichu: "Còn hàng", hinh: "img/img-3.png"}, 
   {id: 4, tensanpham: "Thức ăn hạt Me-o Kitten", gia: "45.000vnd", ghichu: "Còn hàng", hinh: "img/img-4.png"}, 
   {id: 5, tensanpham: "Thức ăn hạt Me-o Kitten", gia: "45.000vnd", ghichu: "Còn hàng", hinh: "img/img-5.png"}, 
   {id: 6, tensanpham: "Thức ăn hạt Me-o Kitten", gia: "45.000vnd", ghichu: "Còn hàng", hinh: "img/img-6.png"}, 
   {id: 7, tensanpham: "Thức ăn hạt Me-o Kitten", gia: "45.000vnd", ghichu: "Còn hàng", hinh: "img/img-7.png"}, 
   {id: 8, tensanpham: "Thức ăn hạt Me-o Kitten", gia: "45.000vnd", ghichu: "Còn hàng", hinh: "img/img-8.png"}, 
 ];
 export {SPbanchay, SPgiamgia, SPnoibat}
 export {banchay_arr, noibat_arr, giamgia_arr}
  