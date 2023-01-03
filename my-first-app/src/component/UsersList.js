import './style/userslist.css'
import Card from '../component/Card';
import Users from './data/Data'


export default function UsersList() {

    return (
        <div className='usersList'>
            <h1>Users List</h1>
            <div className='usersBox'>
                {Users.map((user, index) => (
                    <div key={index}>
                        <Card user={user} />
                    </div>

                ))}
            </div>
        </div>

    )
}

