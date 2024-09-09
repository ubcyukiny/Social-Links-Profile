import avatar from '../assets/images/avatar-jessica.jpeg'



const ProfileCard = (props) => {
    return (
        <div className='profileCard'>
            <div className='profile-pic'>
                <img alt='avatar-jessica' src={avatar}/>
            </div>
            <div className='name-location'>
                <h1>Jessica Randall</h1>
                <h2>London, United Kingdom</h2>
            </div>
            <div className='bio'>
                <h3>"Front-end developer and avid reader."</h3>
            </div>
            <div className='links'>
                <div className='button'>Github</div>
                <div className='button'>Frontend Mentor</div>
                <div className='button'>LinkedIn</div>
                <div className='button'>Twitter</div>
                <div className='button'>Instagram</div>
            </div>
        </div>
    )
}

export default ProfileCard