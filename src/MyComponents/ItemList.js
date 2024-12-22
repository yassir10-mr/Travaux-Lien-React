import { format } from 'date-fns'
import { useState } from 'react';
import DatePicker from 'react-datepicker'
import "../../node_modules/react-datepicker/dist/react-datepicker.css"
function ItemList() {
    const currentDate = new Date()
    const formattedDate = format(currentDate, 'eeee dd, yyyy')
    const [filters, setFilters] = useState({
        filbtn: false,
        filState: true,
        filCat: true,
        addop: false,
        viewWin: false,
        upWin: false
    })
    const [items, setItems] = useState([
        { id: 1, title: 'traveling home', description: 'lorem', stateName: 'pending', listName: 'Work', tag: { tagName: "family" }, dueDate: new Date('2025-09-04'), optionsbtn: false },
    ])
    const [checkedCX, setCheckedCX] = useState(null)
    const tagList = { family: '#D3EDEF', games: '#FDDFE0' }
    const listInfo = {
        Personal: 'user',
        Work: 'work',
        noList: 'question'
    }
    const [formData, setFormData] = useState({
        title: "",
        description: "",
        stateName: "completed",
        listName: "personal",
        tag: { tagName: 'family' },
        dueDate: null
    });
    const [search, setSearch] = useState('')
    const [currentAction, setCurrentAction] = useState('create')
    const [selectedTask, setSelectedTask] = useState(null)
    function filStateClick(filter) {
        setFilters((prevState => ({
            ...prevState,
            [filter]: !prevState[filter]
        })))
    }
    function handleCXchanges(e) {
        setCheckedCX(e.target.value)
    }
    function handleDoneClick() {
        setFilters((prevState) => ({
            ...prevState,
            filbtn: false
        }))
    }
    function toggleOptions(id) {
        setItems(prevItems =>
            prevItems.map(item =>
                item.id === id
                    ? { ...item, optionsbtn: !item.optionsbtn }
                    : item
            )
        );
    }
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        if (name === "tagName") {
            setFormData((prevData) => ({
                ...prevData,
                tag: { ...prevData.tag, tagName: value },
            }));
        } else {
            setFormData((prevData) => ({
                ...prevData,
                [name]: value,
            }));
        }
    };
    const handleDateChange = (date) => {
        setFormData((prevData) => ({
            ...prevData,
            dueDate: date,
        }));
    };
    function handleSubmitForm(e) {
        e.preventDefault();
        if (currentAction === 'create') {
            const newTask = {
                id: items.length + 1,
                title: formData.title,
                description: formData.description,
                stateName: formData.stateName,
                listName: formData.listName,
                tag: { tagName: formData.tag.tagName },
                dueDate: formData.dueDate,
                optionsbtn: formData.optionsbtn
            }
            setItems((prevTasks) => [...prevTasks, newTask])
        }
        else if (currentAction === 'update') {
            const updatedItems = items.map(item =>
                item.id === selectedTask.id
                    ? { ...item, ...formData }
                    : item
            );
            setItems(updatedItems);
        }
        resetForm()
    }
    function resetForm() {
        setFormData({
            title: "",
            description: "",
            stateName: "",
            listName: "",
            tag: { tagName: "" },
            dueDate: null,
            optionsbtn: false
        });
        setFilters({ ...filters, addop: false });
        setCurrentAction("create");
        setSelectedTask(null);
    }
    function deleteTask(id) {
        setItems(items.filter((item) => item.id !== id))
    }
    const handleSearch = (e) => {
        setSearch(e.target.value.toLowerCase())
    }
    function openTask(action, task) {
        setCurrentAction(action);
        setSelectedTask(task);
        setFilters({ ...filters, addop: true });

        setFormData({
            title: task.title,
            description: task.description,
            stateName: task.stateName,
            listName: task.listName,
            tag: { tagName: task.tag.tagName },
            dueDate: task.dueDate,
            optionsbtn: false
        });
    }
    const filteredTasks = items.filter(item => {
        const matchesSearch = item.title.toLowerCase().startsWith(search.toLowerCase());
        const matchesFilter = checkedCX ? item.stateName === checkedCX || item.listName === checkedCX : true;
        return matchesSearch && matchesFilter;
    });
    function handleResetClick() {
        setCheckedCX(null);
        setFilters(prevState => ({
            ...prevState,
            filbtn: false
        }));
    }
    return (
        <div>
            <div className="itemListWrapper">
                <div className='listHeader'>
                    <div>
                        <h1>Hey Again, Here Your Tasks <img src="/greeting.png" alt="" width={18} height={18} /></h1>
                        <p>Today: {formattedDate}</p>
                    </div>
                    <div>
                        <div>
                            <div className="searchWrapper">
                                <img src="/search.png" alt="" width={15} height={15} />
                                <input type="text" value={search} onChange={handleSearch} />
                            </div>
                        </div>
                        <div>
                            <img src="/filter.png" alt="" width={22} height={22} onClick={() => filStateClick('filbtn')} />
                            <div className='filterSec' style={filters.filbtn ? { display: 'block' } : { display: 'none' }}>
                                <h3>Filter section</h3>
                                <div>
                                    <h4 onClick={() => filStateClick('filState')}><span>{filters.filState ? '+' : '-'}</span> By State</h4>
                                    <div style={filters.filState ? { maxHeight: '128.67px' } : { maxHeight: '0px' }}>
                                        <input type="checkbox" value='completed' checked={checkedCX === 'completed'} onChange={handleCXchanges} /><label>Completed</label><br />
                                        <input type="checkbox" value='onGoing' checked={checkedCX === 'onGoing'} onChange={handleCXchanges} /><label>On going</label><br />
                                        <input type="checkbox" value='pending' checked={checkedCX === 'pending'} onChange={handleCXchanges} /><label>Pending</label>
                                    </div>
                                    <h4 onClick={() => filStateClick('filCat')}><span>{filters.filCat ? '+' : '-'}</span> By Category</h4>
                                    <div style={filters.filCat ? { maxHeight: '128.67px' } : { maxHeight: '0px' }}>
                                        <input type="checkbox" value='personal' checked={checkedCX === 'personal'} onChange={handleCXchanges} /><label>Personal</label><br />
                                        <input type="checkbox" value='work' checked={checkedCX === 'work'} onChange={handleCXchanges} /><label>Work</label><br />
                                    </div>
                                    <button onClick={handleDoneClick}>Done</button>
                                    <button onClick={handleResetClick}>Reset</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='items'>
                    {filteredTasks.map(item => (
                        <div className={`item ${item.stateName === 'completed' ? 'finished' : ''}`} key={item.id}>
                            <div>
                                <img src={`/${listInfo[item.listName]}.png`} alt="" width={15} height={15} />
                                <p>{item.title}</p>
                                {item.tag.tagName === 'noTag' || <span id='tagItem' style={{ backgroundColor: tagList[item.tag.tagName] }} >#{item.tag.tagName}</span>}
                            </div>
                            <div>
                                <div id='membersGP'>
                                    <img src="/avatar.png" alt="" width={25} height={25} />
                                </div>
                                <p>{item.dueDate == null ? 'XX XX, XXXX' : format(item.dueDate, "eeee dd, yyyy")}</p>
                                <img src="/points.png" key={1} alt="" width={20} height={20} onClick={() => toggleOptions(item.id)} />
                                <div className='itemOptions' style={item.optionsbtn ? { display: 'block' } : { display: 'none' }}>
                                    <p onClick={() => openTask("view", item)}>See more details</p>
                                    <p onClick={() => openTask("update", item)}>Edit this task</p>
                                    <p onClick={() => deleteTask(item.id)}>Delete this task</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className='addTask'>
                    <div onClick={() => filStateClick('addop')}>
                        <i class="fa-solid fa-plus"></i>
                        <p>Create New Task</p>
                    </div>
                    <div className='addTaskSec' style={filters.addop ? { display: 'block' } : { display: 'none' }}>
                        <div>
                            <h1>
                                {currentAction === "create" && "Create New Task"}
                                {currentAction === "view" && "Task Details"}
                                {currentAction === "update" && "Update The Task"}
                            </h1>
                            <form className='addForm' onSubmit={handleSubmitForm}>
                                <input type="text" placeholder='Untitled' name='title' value={formData.title} required readOnly={currentAction === 'view'} onChange={handleInputChange} /><br />
                                <span><i class="fa-solid fa-calendar-days"></i>Date</span>
                                <DatePicker
                                    selected={formData.dueDate}
                                    onChange={handleDateChange}
                                    dateFormat='dd/MM/yyyy'
                                    placeholderText='Select the due date'
                                    required
                                    className='DTP'
                                    name='dueDate'
                                    minDate={new Date()}
                                    value={formData.dueDate}
                                    readOnly={currentAction === "view"}
                                ></DatePicker><br />
                                <span><i class="fa-solid fa-square-poll-vertical"></i>State</span>
                                <select name='stateName' value={formData.stateName} onChange={handleInputChange} disabled={currentAction === "view"}>
                                    <option value="completed">completed</option>
                                    <option value="onGoing">on going</option>
                                    <option value="pending" selected>pending</option>
                                </select>
                                <select name='listName' value={formData.listName} onChange={handleInputChange} disabled={currentAction === "view"}>
                                    <option value="Personal">personal</option>
                                    <option value="Work">work</option>
                                    <option value="noList" selected>No List</option>
                                </select><br />
                                <span><i class="fa-solid fa-tag"></i>Tag</span>
                                <select name='tagName' value={formData.tag.tagName} onChange={handleInputChange} disabled={currentAction === "view"}>
                                    <option value="family">family</option>
                                    <option value="games">games</option>
                                    <option value="noTag" selected>No tag</option>
                                </select>
                                <i className="fa-solid fa-brush" onClick={() => filStateClick('colorPick')}></i>
                                <br />
                                <textarea name='description' value={formData.description} id="DS" placeholder='Description' onChange={handleInputChange} readOnly={currentAction === "view"}></textarea><br />
                                {currentAction === "view" ? (
                                    <button type="button" onClick={() => setFilters({ ...filters, addop: false })}>
                                        OK
                                    </button>
                                ) : (
                                    <button type="submit">
                                        {currentAction === "create" ? "Create the Task" : "Update the Task"}
                                    </button>
                                )}
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}
export default ItemList;
