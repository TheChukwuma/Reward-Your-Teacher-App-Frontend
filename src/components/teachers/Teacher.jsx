import React, { useEffect, useState, useRef } from "react";
import { BsFilterLeft } from "react-icons/bs";
import axios from "axios";
import "./Teacher.css";
import { useLocation } from "react-router-dom";
import TeacherProfileModal from "../teacherProfile/TeacherProfileModal";
import ModalBody from "../teacherProfile/ModalBody";

const Teacher = () => {
  const [teachers, setTeachers] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [searchKey, setSearchKey] = useState(" ");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [school, setSchool] = useState("");
  const [id, setTeacherId] = useState();

  const [showModal, setShowModal] = useState(false);
  const searchRef = useRef(" ");
  const teacherSchool = useLocation().state.localStorageSchool; //LOGGED IN USER SCHOOL
  //get token from local storage
  const token = localStorage.getItem("token");

  // fetch data from api
  const fetchTeachers = async () => {
    try {
      const response = await axios
        .get(
          `http://localhost:8081/api/v1/schools/${teacherSchool}/teachers/${searchKey}?page=${pageNumber}&size=10`,
          {
            headers: {
              Authorization: `${token}`,
            },
          }
        )
        .then((response) => {
          const allSchoolTeachers = response.data.data.content;
          console.log(allSchoolTeachers);
          setTeachers(allSchoolTeachers);
          setTotalPages(response.data.totalPages);
        });
    } catch (error) {
      console.log(error);
    }
  };

  //the page numbering function. see the page bottom
  const showpage = (e) => {
    e.preventDefault();
    setPageNumber(e.target.innerText - 1);
  };
  let pages = [];
  if (totalPages < 6) {
    for (let i = 0; i < totalPages - 1; ++i) {
      pages.push(
        <a onClick={showpage} key={i}>
          {i + 1}
        </a>
      );
    }
  } else {
    for (let i = 0; i < 6; ++i) {
      pages.push(
        <a onClick={showpage} key={i}>
          {i + 1}
        </a>
      );
    }
  }

  const lastPageNum = totalPages - 1;

  const nextPage = () => {
    setPageNumber((prevState) => {
      if (pageNumber < lastPageNum) {
        return prevState + 1;
      }
    });
  };
  const previousPage = () => {
    setPageNumber((prevState) => {
      if (pageNumber > 1) {
        return prevState - 1;
      }
    });
  };

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  useEffect(() => {
    fetchTeachers();
  }, [pageNumber, searchKey]);

  const handleChange = (e) => {
    // const { name, value } = e.target;
    setSearchKey(searchRef.current.value);
    console.log("this", searchRef.current.value);
  };

  return (
    <div className="teacher">
      <h2>All Teachers</h2>

      <div className="filterSearch">
        <input
          className="search"
          type="text"
          ref={searchRef}
          onChange={handleChange}
          placeholder="Search"
          value={searchKey.searchTerm}
          name="searchTerm"
        ></input>

        <div className="filter">
          <button className="dropbtn">
            Filter{" "}
            <i>
              <BsFilterLeft />
            </i>
          </button>
        </div>
      </div>
      <div>
        <table className="teacherTable">
          <thead className="tableHeading">
            <tr>
              <th className="tableData headLeftRow" style={{ width: "22.5%" }}>
                Name
              </th>
              <th className="tableData" style={{ width: "32.5%" }}>
                School
              </th>
              <th className="tableData" style={{ width: "22.5%" }}>
                Position
              </th>
              <th className="tableData" style={{ width: "22.5%" }}>
                Period of Teaching
              </th>
            </tr>
          </thead>
          <tbody>
            {teachers.map((teacher, index) => {
        
              return (
                <tr
                  
                  className="tableRow"
                  key={teacher.email}
                  onClick={() => {
                    toggleModal();
                    setName(teacher.name);
                    setEmail(teacher.email);
                    setSchool(teacher.school);
                    setPhoneNumber(teacher.telephone);
                    setTeacherId(teacher.id);
                  }}
                >
                  <td className="tableData leftRow">{teacher.name}</td>
                  <td className="tableData">{teacher.school}</td>
                  <td className="tableData">Teacher</td>
                  <td className="tableData">{teacher.yearsOfService}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className="pagination">
        <a href="#" onClick={previousPage}>
          &laquo;
        </a>
        {pages}
        <a>...</a>
        <a href="#" onClick={() => setPageNumber(lastPageNum)}>
          Last
        </a>
        <a href="#" onClick={nextPage}>
          &raquo;
        </a>
      </div>
      {showModal && (
        <TeacherProfileModal title="Profile details" closeModal={toggleModal}>
          <ModalBody
            name={name}
            school={school}
            email={email}
            phoneNumber={phoneNumber}
            id={id}
          />
        </TeacherProfileModal>
      )}
    </div>
  );
};

export default Teacher;
