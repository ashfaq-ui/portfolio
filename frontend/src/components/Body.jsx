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

                        
                        <div className="skills-icon-Area">
                            <div className="skills-icon-sub-Area">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" alt='html' className="s-icon"/>
                                <p>HTML</p>
                            </div>
                            <div className="skills-icon-sub-Area">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" alt='css' className="s-icon"/>
                                <p>CSS</p>
                            </div>
                            <div className="skills-icon-sub-Area">       
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" alt='javascript' className="s-icon"/>
                                <p>javascript</p>
                            </div>
                            <div className="skills-icon-sub-Area">      
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" alt='react js' className="s-icon"/>          
                                <p>React JS</p>
                            </div>
                            <div className="skills-icon-sub-Area">                                      
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" alt='next js' className="s-icon"/>                    
                                <p>Next JS</p>
                            </div>

                        </div>
          
                    </div>
                    <div className="skill-table-2">
                        <h3 id="skill-table-heading">Backend</h3>

                        <div className="skills-icon-Area">
                            <div className="skills-icon-sub-Area">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flask/flask-original.svg" alt='flask' className="s-icon"/>
                                <p>Flask</p>
                            </div>
                            <div className="skills-icon-sub-Area">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" alt='mongodb' className="s-icon"/>
                                <p>MongoDB</p>
                            </div>

                        </div>
                    </div>
                    <div className="skill-table-3">
                        <h3 id="skill-table-heading">Languages</h3>

                        <div className="skills-icon-Area">
                            <div className="skills-icon-sub-Area">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" alt='java' className="s-icon"/>
                                <p>java</p>
                            </div>
                            <div className="skills-icon-sub-Area">                                
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" alt='python' className="s-icon"/>          
                                <p>python</p>
                            </div>
                            <div className="skills-icon-sub-Area">       
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" alt='javascript' className="s-icon"/>
                                <p>javascript</p>
                            </div>

                        </div>

                    </div>
                    <div className="skill-table-4">
                        <h3 id="skill-table-heading">Tools</h3>

                        <div className="skills-icon-Area">
                            <div className="skills-icon-sub-Area">                                
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg" alt='vs code' className="s-icon"/>
                                <p>VS Code</p>
                            </div>
                            <div className="skills-icon-sub-Area">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" alt='git' className="s-icon"/>
                                <p>git</p>
                            </div>
                            <div className="skills-icon-sub-Area">       
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" alt='github' className="s-icon"/>
                                <p>github</p>
                            </div>
                            <div className="skills-icon-sub-Area">      
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/intellij/intellij-original.svg" alt='intellij' className="s-icon"/>          
                                <p>intellij</p>
                            </div>
                            <div className="skills-icon-sub-Area">                                      
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/netlify/netlify-original.svg" alt='netlify' className="s-icon"/>                    
                                <p>netlify</p>
                            </div>
                            <div className="skills-icon-sub-Area">                                      
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg" alt='postman' className="s-icon"/>                    
                                <p>postman</p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <div className="projects-Area">

            </div>
        
        </>
    )
}