import { banchay_arr } from './data.js';
const hien1sanpham = (sanpham) => {
    return `<div>
     <h4>Tên khóa: ${sanpham.tensanpham} </h4>
     <p>Khai giảng: ${sanpham.gia}</p>
     <p>Ghi chú: ${sanpham.ghichu}</p>
    </div>`;
};
export const showlistsanpham = () => {
    const html_arr = banchay_arr.map(hien1sanpham);
    return html_arr.join("");
};
