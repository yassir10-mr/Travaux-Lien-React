import React from 'react'
import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function LeftSidebar() {
    const currentLoc = useLocation();
    const [isHovered, setIsHovered] = useState(false);
    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => setIsHovered(false);
    return (
        <div>
            <div className="leftSidebar" style={{ display: currentLoc.pathname !== '/' && currentLoc.pathname !== '/ItemList' ? 'block' : 'none' }}>
                <div className="logoClosebtn">
                    <Link to='/src/MyComponents/TDLInterface.js' ><img src="/logo.png" alt="" width={48} height={48} /></Link>
                    <i class="fa-solid fa-bars"></i>
                </div>
                <div className="profil">
                    <img src="/profilAvatar.png" alt="" width={42} height={42} />
                    <div>
                        <p>HYM member</p>
                        <p>Full Stack Developper</p>
                    </div>
                </div>
                <div className="menu">
                    <div>
                        <p>Menu</p>
                        <i class="fa-solid fa-grip"></i>
                    </div>
                    <div className='menuList'>
                        <div className={currentLoc.pathname === '/' ? 'hover' : ''} onMouseEnter={() => handleMouseEnter()} onMouseLeave={() => handleMouseLeave()}>
                            <img src="/home.png" alt="" width={15} height={15} />
                            <Link to="/src/MyComponents/TDLInterface.js" style={{ color: isHovered || currentLoc.pathname !== '/ItemList' ? '#171717' : '#dcdcdc' }}>Home</Link>
                        </div>
                        <div>
                            <img src="/calendar.png" alt="" width={15} height={15} />
                            <span>Calendar</span>
                        </div>
                        <div>
                            <img src="/note.png" alt="" width={15} height={15} />
                            <span>Sticky notes</span>
                        </div>
                        <div>
                            <img src="/setting.png" alt="" width={15} height={15} />
                            <span>Settings</span>
                        </div>
                    </div>
                </div>
                <div className="tasks">
                    <div>
                        <p>Tasks</p>
                        <i class="fa-solid fa-list-check"></i>
                    </div>
                    <div className='taskCats' >
                        <div className={`taskCat ${currentLoc.pathname === '/ItemList' ? 'hover' : ''}`} >
                            <Link id="SP" to='ItemList' style={currentLoc.pathname === '/ItemList' ? { color: '#171717' } : {}}>
                                <div>
                                    <img src="/all.png" alt="" width={15} height={15} />
                                    <span>All</span>
                                </div>
                                <div>12</div>
                            </Link>
                        </div>

                        <div className='taskCat'>
                            <div>
                                <img src="/checked.png" alt="" width={15} height={15} />
                                <span>Completed</span>
                            </div>
                            <div>4</div>
                        </div>
                        <div className='taskCat'>
                            <div>
                                <img src="/recycle.png" alt="" width={15} height={15} />
                                <span>On going</span>
                            </div>
                            <div>6</div>
                        </div>
                        <div className='taskCat'>
                            <div>
                                <img src="/wall-clock.png" alt="" width={15} height={15} />
                                <span>pending</span>
                            </div>
                            <div>2</div>
                        </div>
                    </div>
                </div>
                <div className="lists">
                    <div>
                        <p>Lists</p>
                        <i class="fa-regular fa-rectangle-list"></i>
                    </div>
                    <div className="listCats">
                        <div className='listCat'>
                            <div>
                                <img src="/user.png" alt="" width={15} height={15} />
                                <span>Personal</span>
                            </div>
                            <div>6</div>
                        </div>
                        <div className='listCat'>
                            <div>
                                <img src="/work.png" alt="" width={15} height={15} />
                                <span>Work</span>
                            </div>
                            <div>1</div>
                        </div>
                        <div>
                            <img src="/plus.png" alt="" width={15} height={15} />
                            <span>Create new list</span>
                        </div>
                    </div>
                </div>
                <div className="tags">
                    <div>
                        <p>Tags</p>
                        <i class="fa-solid fa-tags"></i>
                    </div>
                    <div className='tagsList'>
                        <span style={{ backgroundColor: '#D3EDEF' }}>family</span>
                        <span style={{ backgroundColor: '#FDDFE0' }}>games</span>
                        <span>+ Add tag</span>
                    </div>
                </div>
            </div>
        </div >
    )
}
