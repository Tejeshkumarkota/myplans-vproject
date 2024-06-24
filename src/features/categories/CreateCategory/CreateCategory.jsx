import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import { Endpoints } from "../../../shared/constants/Endpoints";
import { RouteConstants } from "../../../shared/constants/RouteConstants";
import styles from './CreateCategory.module.css';

export default function CreateCategory() {
  const [name, setName] = useState("");
  const nav = useNavigate();

  const goToList = () => {
    nav(RouteConstants.LIST_CATEGORY);
  };

  const createStudent = () => {
    if (name) {
      axios.post(Endpoints.CATEGORIES,{
        productCategoryImage: "",
        parentProductCategoryId: "",
        productCategoryName: name,
      })
        .then(() => {
          nav(RouteConstants.LIST_CATEGORY);
          setTimeout(()=> {
            toast.success("Added Successfully!");
          },500)
        }).catch((err) => {
          toast.error("Something went wrong!");
        });
    } else {
      toast.error("Please fill and submit");
    }
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="card my-4">
              <div className="card-body">
                <h3 className={styles.test + ' text-start text-black'}>
                  {" "}
                  <i onClick={goToList} className="bi bi-arrow-left-square me-3 c-pointer h3"></i> 
                  Create
                </h3>
                <form>
                  <div className="my-3">
                    <label htmlFor="exampleInputName" className="form-label">
                      Category Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="exampleInputName"
                      placeholder="Enter Category Name"
                      onChange={($event) => {
                        setName($event.target.value);
                      }}
                      value={name}
                    />
                  </div>
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={createStudent}
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer theme="colored" />
    </>
  );
}
