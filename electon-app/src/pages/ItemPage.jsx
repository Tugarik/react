import { useParams } from 'react-router-dom';
import ItemHeader from '../components/subComps/ItemHeader';
import '../styles/ItemPage.css'
import {DATA} from '../utils/data';

export default function ItemPage() {
    const { itemId } = useParams();
    return (
        <>
            <ItemHeader/>
            <div className='ItemPage'>
               <p>ItemPage: {DATA[0].id}</p>
               <p>ItemName: {DATA[0].category}</p> 
            </div>
        </>
    );
}