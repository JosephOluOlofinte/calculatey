// import { useState } from "react";
// import React from "react";

const BasicCalc = () => {


    return(
        <section className="
        {/*giving room for header and footer on mobile*/}
        h-[calc(100vh-120px)]

        {/*giving room for footer and sidebar on larger screens*/}
        md:h-[calc(100vh-60px)] md:w-[calc(100vw-225px)]
        
        // general styles
        flex items-center justify-start pt-8
        flex-col w-[100vw]
        ">
        
        <div className="
        w-[500px] h-[100%] md:w-[480px]
        flex justify-center items-center flex-col
        overflow-hidden
        ">

        <input type="text" id="display" readOnly className="
        w-[100%] p-[20px] text-lg bg-titleBlue text-left
        "/>

        <div id="keys" className="
        grid grid-cols-4 gap-[10px] p-[25px]
        ">
            <button id="one" className="w-[70px] h-[70px] rounded-[35px] border-0 bg-slate-700 text-white font-bodyFont font-bold cursor-pointer text-2xl m-2"> 1 </button>
            <button id="two" className="w-[70px] h-[70px] rounded-[35px] border-0 bg-slate-700 text-white font-bodyFont font-bold cursor-pointer text-2xl m-2"> 2 </button>
            <button id="three" className="w-[70px] h-[70px] rounded-[35px] border-0 bg-slate-700 text-white font-bodyFont font-bold cursor-pointer text-2xl m-2"> 3 </button>
            <button id="plus" className="w-[70px] h-[70px] rounded-[35px] border-0 bg-slate-700 text-white font-bodyFont font-bold cursor-pointer text-2xl m-2"> + </button>
            <button id="four" className="w-[70px] h-[70px] rounded-[35px] border-0 bg-slate-700 text-white font-bodyFont font-bold cursor-pointer text-2xl m-2"> 4 </button>
            <button id="five" className="w-[70px] h-[70px] rounded-[35px] border-0 bg-slate-700 text-white font-bodyFont font-bold cursor-pointer text-2xl m-2"> 5 </button>
            <button id="six" className="w-[70px] h-[70px] rounded-[35px] border-0 bg-slate-700 text-white font-bodyFont font-bold cursor-pointer text-2xl m-2"> 6 </button>
            <button id="minus" className="w-[70px] h-[70px] rounded-[35px] border-0 bg-slate-700 text-white font-bodyFont font-bold cursor-pointer text-2xl m-2"> - </button>
            <button id="seven" className="w-[70px] h-[70px] rounded-[35px] border-0 bg-slate-700 text-white font-bodyFont font-bold cursor-pointer text-2xl m-2"> 7 </button>
            <button id="eight" className="w-[70px] h-[70px] rounded-[35px] border-0 bg-slate-700 text-white font-bodyFont font-bold cursor-pointer text-2xl m-2"> 8 </button>
            <button id="nine" className="w-[70px] h-[70px] rounded-[35px] border-0 bg-slate-700 text-white font-bodyFont font-bold cursor-pointer text-2xl m-2"> 9 </button>
            <button id="multiply" className="w-[70px] h-[70px] rounded-[35px] border-0 bg-slate-700 text-white font-bodyFont font-bold cursor-pointer text-2xl m-2"> * </button>
            <button id="dot" className="w-[70px] h-[70px] rounded-[35px] border-0 bg-slate-700 text-white font-bodyFont font-bold cursor-pointer text-2xl m-2"> . </button>
            <button id="zero" className="w-[70px] h-[70px] rounded-[35px] border-0 bg-slate-700 text-white font-bodyFont font-bold cursor-pointer text-2xl m-2"> 0 </button>
            <button id="divide" className="w-[70px] h-[70px] rounded-[35px] border-0 bg-slate-700 text-white font-bodyFont font-bold cursor-pointer text-2xl m-2"> / </button>
            <button id="equalTo" className="w-[70px] h-[70px] rounded-[35px] border-0 bg-slate-700 text-white font-bodyFont font-bold cursor-pointer text-2xl m-2"> = </button>
            <button id="clear" className="w-[70px] h-[70px] rounded-[35px] border-0 bg-slate-700 text-white font-bodyFont font-bold cursor-pointer text-2xl m-2"> C </button>
        </div>

        </div>
        </section>
)


};

export default BasicCalc;