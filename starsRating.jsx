import React from 'react';

export default function AvisCard(props) {
    // note and comment are retrived from userAvis file
    const { note, comment } = props

    const fullStars = Array(5).fill("★");
    const emptyStars = Array(5).fill("★");

    return (
        <div className='avisCard'>
            <p className='avisCard__note'>

                {fullStars.slice(5 - note).map((fullStar) => {
                    return <span className='fullStar'>{fullStar}</span>
                })}
                {emptyStars.slice(note).map((emptyStar)=> {
                    return <span className='emptyStar'>{emptyStar}</span>
                })}
            </p>
            <p className='avisCard__comment'>
                {comment}
            </p>
        </div>
    )
}