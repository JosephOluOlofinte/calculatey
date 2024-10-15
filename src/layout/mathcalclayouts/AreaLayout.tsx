import {Footer, Header, Sidebar} from "../../components";
import {Outlet} from "react-router-dom";

const AreaLayout = () => {
    return (
        <body className="
        bg-[#081645] w-screen
        md:flex
        md:gap-3
        ">
        <div className="hidden md:block w-[200px]">
            <Sidebar/>
        </div>

        <div className="w-screen md:w-[calc(100vw-225px)">
            <Header/>
            <Outlet/>
            <Footer/>
        </div>
        </body>

    )
};

export default AreaLayout;