import React from "react";

const Exercise = () => {
    const myFavoriteSubjects = ['Mathematics', 'Chemistry', 'Physics', 'Commerce', 'Engineering',
         'Automotive', 'Entrpreneurship',
         'Information Technology', 'Architecture', 'Biology'];
    
    const displaySubjects = myFavoriteSubjects.map((subjects) =><ul>{subjects}</ul>);

    

    return (
        <div className="container">
            <p>{displaySubjects}</p>
        </div>
    )

}
export default Exercise;