
export default function HomeNav() {
    return (
        <div className='HomeNav d-flex'>
            <div className="left">Left</div>
            <div className="middle">Middle</div>
            <div className="right">
                <button className="btn loginBtn"><img src="./img/user_white.svg" alt="" /> Log in</button>
                <button className="btn"><img src="./img/cart_white.svg" alt="" /><span className="shoppingCart">0</span></button>
            </div>

            
        </div>
    );
}