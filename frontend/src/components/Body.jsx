import './Body.css'

export default function Body() {
    return(
        <>

            <div className="userDetails">

                <div className="user-description">
                    <h1>Hi, I'm Mohamed Ashfaq</h1>
                    <h3>I'm a software engineer</h3>
                    <p>
                        I’m a Computer Science student passionate about building efficient,
                        <br />
                        user-friendly software solutions. Skilled in Java, Python, HTML, CSS,
                        <br />
                        and JavaScript, I enjoy creating projects that combine functionality 
                        <br />
                        with clean design. I have experience developing both backend and frontend
                        <br />
                        applications, and I’m currently exploring machine learning and data mining. 
                        <br />
                        Beyond coding, I bring strong teamwork, leadership, and problem-solving skills,
                        <br />
                        making me eager to contribute to impactful projects and continue learning in 
                        <br />
                        the tech field.
                    </p>
                </div>

                <div className="profilePic-area">
                    <img src="/profilePic.jpeg" id="profilePic"alt="description" />
                </div>

            </div>

            <div className="skill-Area">
                <div className="skill-head">
                    <h1 id="skill-head-underline">Skills</h1>
                    <h4>
                        Proficient in Java, Python, HTML, CSS, and JavaScript with hands-on experience
                        <br /> 
                        in building web and software applications. Familiar with frameworks and tools 
                        <br />
                        for backend development and database integration. Strong foundation in problem-solving,
                        <br />
                        teamwork, and leadership, with growing interest in machine learning and data mining. 
                        <br />
                        I’m also learning more advanced tools and new programming languages to expand my skill set 
                        <br />
                        and stay up to date with the latest technologies.</h4>
                </div>

                <div className="skill-tables">
                    <div className="skill-table-1">
                        <h3 id="skill-table-heading">Frontend</h3>
                    </div>
                    <div className="skill-table-2">
                        <h3 id="skill-table-heading">Backend</h3>
                    </div>
                    <div className="skill-table-3">
                        <h3 id="skill-table-heading">Languages</h3>
                    </div>
                    <div className="skill-table-4">
                        <h3 id="skill-table-heading">Tools</h3>
                    </div>
                </div>
            </div>
        
        </>
    )
}