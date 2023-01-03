import './style/card.css'

export default function Card(props) {
    return (
        <div className="card">
            <img className="userImage" src={`${props.user.image}`} alt="user image" />
            <div className='userInfo'>
                <h3>{`${props.user.name}`}</h3>
                <p>Age: {`${props.user.age}`}</p>
                <p>Balance: {`${props.user.balance} USD`}</p>
            </div>
        </div>
    )
}