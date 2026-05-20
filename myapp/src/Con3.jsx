function Con3()
{
    const student = [
        {
            id:1,
            name:'Ish',
            std:4
        },
        {
            id:2,
            name:'Jeel',
            std:6

        },
        {
             id:3,
            name:'Ved',
            std:5
        }
    ]

    return(
        <div>
            <h1>Student Details|</h1>
            {
                student
                .filter((student)=>student.std==5)
                .map((student)=>(
                    <div>
                        <h2>Student name : {student.name}</h2>
                        <h2>Updated standard:{student.std}</h2>

                    </div>
                ))
            }
        </div>
    )

}
export default Con3