export default function SingleFriend({friend}){
    const {name, username, email, phone} = friend;
    const box = {
        margin: '10px',
        padding: '20px',
        border: '5px solid yellow',
        borderRadius: '20px'
    };
    return (
        <div style={box}>
            <h4>{name} is my friend </h4>
            <h5>'{username}' is his username </h5>
            <p>His Email is : {email}</p>
            <p>Phone number: {phone}</p>
        </div>
    )
}