
function User({ data }) {
    return (
        <div>
            <p>
                {data.userName} {data.password} ({data.isOnline ? "Online" : "Offline"})
            </p>
            <p>
                {data.userName}'s high score is {data.highScore}
            </p>
        </div>
    );
}

export default User;