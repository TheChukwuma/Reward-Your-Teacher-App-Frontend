import React, { useEffect, useState, useRef } from "react";
import { BsFilterLeft } from "react-icons/bs";
import { IoIosArrowForward } from "react-icons/io";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

import "./School.css";

const Schools = () => {
  const [schools, setSchools] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [searchKey, setSearchKey] = useState(" ");
  const navigate = useNavigate();
  const searchRef = useRef(" ");

  // get user info from local storage
  const info = localStorage.getItem("data");
  const obj = JSON.parse(info);
  const token = localStorage.getItem("token");
  const userSchool = obj.school;

  //page numbering function
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

  //fetching data from the API
  const fetchSchools = async () => {
    try {
      const response = await axios
        .get(
          `http://localhost:8081/api/v1/schools/all/${searchKey}?page=${pageNumber}&size=10`,
          {
            headers: {
              Authorization: `${token}`,
            },
          }
        )
        .then((response) => {
          const allSchools = response.data.content;
          setSchools(allSchools);
          setTotalPages(response.data.totalPages);
        });
    } catch (error) {
      console.log(error);
    }
  };

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

  useEffect(() => {
    fetchSchools();
  }, [pageNumber, searchKey]);

  const handleChange = (e) => {
    // const { name, value } = e.target;
    setSearchKey(searchRef.current.value);
  };

  return (
    <div className="school">
      <h2>All Schools</h2>

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
        <h3 className="tableHeading">List of Schools</h3>

        <div className="tableRow">
          <Link
            to="/dashboard/school/teachers"
            state={{
              localStorageSchool: userSchool,
            }}
            className="school_link"
          >
            <span>{userSchool}</span>
            <span>
              <i>
                <IoIosArrowForward />
              </i>
            </span>
          </Link>
        </div>
        {schools.map((aSchool) => {
          const { id, name } = aSchool;
          return (
            <div className="tableRow" key={id}>
              <Link
                to="/dashboard/school/teachers"
                state={{
                  localStorageSchool: aSchool.name,
                }}
                className="school_link"
              >
                <span>{name}</span>
                <span>
                  <i>
                    <IoIosArrowForward />
                  </i>
                </span>
              </Link>
            </div>
          );
        })}
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
    </div>
  );
};

export default Schools;
