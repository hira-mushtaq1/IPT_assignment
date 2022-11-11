import React, {useEffect,useState} from 'react'
import Card from '../Components/Card'
import axios from 'axios'

export default function Courses(props) {
    const [CourseList, setCourseList] = useState([]);
    
    const getDataList = () => {
        axios
          .get(`http://localhost:4000/course`)
          .then((response) => response.data)
          .then((response) => setCourseList(response));
        
    };

    useEffect(() => {
        getDataList();
    }, [props]);
    console.log(CourseList);
    return (
        <div style={{margin:"3rem 3rem 3rem 100px"}}>
            <h3 className="mt-3 mb-2 mx-5">All Courses</h3>
            <div className="d-flex flex-row mx-5">
                    <input className="form-control m-2"
                    // onChange={this.changeDepartmentIdFilter}
                    placeholder="Search By Name"/>

                    
                    <select class="form-select m-2" aria-label="Sort By">
                      <option selected>Sort By</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                    <button type="button" className="btn btn-light"
                    // onClick={()=>this.sortResult('DepartmentId',true)}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-down-square-fill" viewBox="0 0 16 16">
                        <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm6.5 4.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5a.5.5 0 0 1 1 0z"/>
                        </svg>
                    </button>

                    <button type="button" className="btn btn-light"
                    // onClick={()=>this.sortResult('DepartmentId',false)}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-up-square-fill" viewBox="0 0 16 16">
                        <path d="M2 16a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2zm6.5-4.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 1 0z"/>
                        </svg>
                    </button>
                    {/* <button type="button" 
                    // className="btn btn-light"
                    className="btn btn-light mr-1"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                    onClick={()=>addClick()}
                    >
                        <i className="bi bi-plus" style={{fontSize:"30px"}}></i>
                    </button>
                     */}
                    </div>
                    
                            <hr/>
                <div className="row m-4">
                    {/* List */}
                    {CourseList.map(item=>{
                        console.log(item);
                        return(
                        <Card
                        key={item.ID}
                        CourseID={item.ID}
                        CourseName={item.CourseName}
                        CourseDetail={''}
                        InstructorName={item.InstructorName}
                        onClick={()=>{window.location.pathname = `/classroom/${item.ID}`}}
                        />)}
                        )}
                    
                </div>
            </div>
    //     </div>
    // </div>
    )
}

// import React, { Component } from 'react'

// export default class Courses extends Component {
//     render() {
//         return (
//             <div>
//             Hi Coursees                
//             </div>
//         )
//     }
// }
