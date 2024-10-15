import MenuIcon from '@mui/icons-material/Menu';
import React from "react";
import MobileSidebar from "./MobileSidebar.tsx";
import CloseIcon from '@mui/icons-material/Close';

const Header = () => {


    const [showDropdown, setDropdownState] = React.useState(false);

    const dropdown = () => {
        setDropdownState(!showDropdown);
    };

    return(
        <header className="
        md:hidden
        h-[60px] w-screen
        flex items-center justify-center
        ">
            <div className="
            w-[90%]
            flex justify-between items-center
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

                {/*MOBILE MENU SECTION*/}
                { showDropdown ?

                null

                    :

                <div className="
                md:hidden bg-textBlue
                text-bgBlue p-1 rounded-md
                hover:cursor-pointer
                hover:scale-110 duration-300
                " onClick={dropdown}>
                    <MenuIcon />
                </div>

                }

                { showDropdown ?
                    <div className="
                        w-screen h-screen
                        fixed top-0 left-0
                        backdrop-blur-sm
                        backdrop-saturate-[180%]
                        bg-[rgba(160, 225, 255, 0.5)]
                        ">
                         <MobileSidebar/>

                            <div className="
                            md:hidden bg-textBlue
                            text-bgBlue p-1 rounded-md
                            fixed top-5 right-5
                            hover:cursor-pointer
                            hover:scale-110 duration-300
                            " onClick={dropdown}>

                                <CloseIcon />

                            </div>

                    </div>
                    :
                    null
                }

            </div>
        </header>
    )
};

export default Header;