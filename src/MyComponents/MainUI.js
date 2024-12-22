import React from 'react'
import { Link } from 'react-router-dom'

export default function MainUI() {
    return (
        <div>
            <div className='mainWrapper'>
                <div className='mainIntroWrapper'>
                    <h1 className="greet">WELCOME TO TASKLIST PLATFORM HYM <img src="/greeting.png" alt="" width={18} height={18} /></h1>
                    <div className='intro-wrapper'>
                        <div className="main-intro">
                            <img src="/mainPicture.jpg" alt="" />
                            <div className='intro-content'><h1>TaskList CRUDS</h1>
                                <p>Here is your space for better future, better life.</p>
                                <button id='TSB'><Link to='ItemList'>My Tasks</Link></button>
                            </div>
                        </div>
                        <div className='taskNums'>
                            <div>
                                <div>
                                    <span>256</span>
                                    <span>Tasks completed</span>
                                </div>
                                <div><img src="/checklist.png" alt="" width={60} height={60} /></div>
                            </div>
                            <div>
                                <div>
                                    <span>15</span>
                                    <span>Tasks on going</span>
                                </div>
                                <div><img src="/list.png" alt="" width={58} height={58} /></div>
                            </div>
                            <div>
                                <div>
                                    <span>30</span>
                                    <span>Tasks to do</span>
                                </div>
                                <div><img src="/clock.png" alt="" width={58} height={58} /></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="groupSec">
                    <h1>SOME OF OUR FEATURES</h1>
                    <div className="cards">
                        <div className=" tdcard">
                            <img src="/groupPic1.jpg" alt="" />
                            <h2>Groups</h2>
                            <p>Here you can create a new group or add a member to an existing one.</p>
                            <button>New group</button>
                            <button>Add member</button>
                        </div>
                        <div className=" tdcard">
                            <img src="/memberPic1.jpg" alt="" />
                            <h2>Members</h2>
                            <p>Here you can invite a new member to help you with your tasks.</p>
                            <button>Invite member</button>
                        </div>
                        <div className=" tdcard">
                            <img src="/stickyNotes.jpg" alt="" />
                            <h2>Notes</h2>
                            <p>Here you can create new notes to help you with short-term memory.</p>
                            <button>Add note</button>
                            <button>Edit note</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
