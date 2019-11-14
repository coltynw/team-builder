import React from 'react'

const Box = props => {
    return(
        <div className='box-list'>
            {props.teamMember.map(member => (
                <div className='box'>
                <h2>{member.Name}</h2>
                <p>{member.Email}</p>
                <p>{member.Role}</p>
                </div>
            ))}
        </div>
    )
}
export default Box 