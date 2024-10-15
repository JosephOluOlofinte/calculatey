import {createBrowserRouter} from "react-router-dom";
import HomeLayout from "../layout/HomeLayout.tsx";
import HomeComp from "../pages/homepage/HomeComp.tsx";
import BasicCalcLayout from "../layout/mathcalclayouts/BasicCalcLayout.tsx";
import BasicCalc from "../pages/calculators/math/BasicCalc.tsx";
// import Area from "../pages/calculators/math/Area.tsx";

export const element = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout/>,
        children: [
            {
                index: true,
                element: <HomeComp/>
            }
        ]
    },

    {
        path: "/basiccalculator",
        element: <BasicCalcLayout/>,
        children: [
            {
                index: true,
                element: <BasicCalc/>
            },
            // {
            //     path: "/areacalculator",
            //     element: <Area/>
            // }
        ]
    }
])