

const Sidebar = () => {
    return(

        <section className="
        hidden md:flex flex-col
        h-screen w-[200px] bg-[#01041D]
        shadow-lg shadow-titleBlue
        pt-3
        ">
            <div className="
                flex flex-col items-center
                ">
                <div className="
                    h-[45px]
                    p-[1px]
                    ">
                    <h1 className="
                        text-[55px]
                        leading-none
                        m-0 p-0
                        ">
                        Calculatey!
                    </h1>
                </div>
                <small className="text-[7px]">...the world's largest calculator platform</small>
            </div>

        </section>
    )
};

export default Sidebar;