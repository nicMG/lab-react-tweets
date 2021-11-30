function User(props) {
    
    return (
        <div>
            <span className="user">
            <span className="name">{props.userData.user.name}</span>
            <span className="handle">@{props.userData.user.handle}</span>
          </span>
        </div>
    )
}


export default User