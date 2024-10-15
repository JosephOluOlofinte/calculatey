import {NavLink} from "react-router-dom";

const Hero = () => {
    return(
        <section className="
        h-[100vh] w-full bg-bgBlue
        bg-heroBg bg-cover bg-no-repeat
        ">
            <div className="
            w-full h-full bg-bgBlue
            flex justify-center
            opacity-85
            ">
            <div className="
            h-full w-[75%]
            pt-[50px] pb-[50px]
            flex flex-col justify-between
            items-center
            ">

                <div className="
                flex flex-col items-center
                ">
                    <div className="h-[80px]">
                        <h1 className="
                        text-[110px]
                        leading-none
                        m-0 p-0
                        ">
                            Calculatey!
                        </h1>
                    </div>
                    <small>
                        ...the world's largest calculator platform
                    </small>
                </div>

                <p className="text-titleBlue text-center
                w-[99%] text-xs font-medium md:w-[380px]
                ">
                    Got something to work out? Calculatey’s got you covered!
                    Whether it’s math, body max index, mortgage, GPA, lot sizing, or currency conversion, we have them all!
                    <br/> <br/>
                    Your one-stop platform for every calculation, big or small.
                </p>

                <div className="
                flex flex-col items-center
                ">
                    <NavLink to="/basiccalculator">
                    <button className="
                    bg-buttonGreen
                    py-3 px-8
                    rounded-md shadow-lg
                    font-medium text-sm
                    ">
                        Start calculating!
                    </button>
                    </NavLink>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default Hero;