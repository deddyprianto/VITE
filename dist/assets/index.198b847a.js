import{D as e,R as t,I as a,a as l}from"./vendor.b4627e65.js";function n(){const[l,n]=e.exports.useState([]),r="https://image.tmdb.org/t/p/original/";return e.exports.useEffect((()=>(fetch("https://api.themoviedb.org/3/movie/popular?api_key=f797e2cf0bb90660383d12fa045c15e6&language=en-US&page=1").then((e=>e.json())).then((e=>n(e.results))),()=>{})),[]),console.log(l),t.createElement("div",{className:"flex flex-col justify-center"},t.createElement("h2",{className:"text-gray-500 text-center"},"Selamat Datang di aplikasi Pencarian film terbaik di dunia, enjoy"),t.createElement("div",{className:"flex flex-col lg:flex-row lg:flex-wrap"},null==l?void 0:l.map((e=>t.createElement(a,{urlEndpoint:r,src:`${r}${e.backdrop_path}`,loading:"lazy",height:"500",width:"500"})))))}l.render(t.createElement(t.StrictMode,null,t.createElement(n,null)),document.getElementById("root"));