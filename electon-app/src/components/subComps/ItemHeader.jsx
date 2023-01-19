import { Outlet } from "react-router-dom";
import ItemPage from "../../pages/ItemPage";

export default function ItemHeader() {
    return (
        <>
            <div className='ItemHeader'>
                ItemHeader
            </div>
            <Outlet/>
        </>
    );
}