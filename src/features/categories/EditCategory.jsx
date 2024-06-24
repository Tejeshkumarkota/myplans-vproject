import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { RouteConstants } from "../../shared/constants/RouteConstants";
import { Endpoints } from "../../shared/constants/Endpoints";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';

export default function EditCategory() {
  const [name, setName] = useState("");
  const nav = useNavigate();
  const param = useParams();

  const goToList = () => {
    nav(RouteConstants.LIST_CATEGORY);
  };

  useEffect(() => {
    getSelectedData();
  }, []);

  const getSelectedData = () => {
    axios.get(Endpoints.CATEGORIES+"/"+param.categoryId)
      .then((data) => {
        setName(data.data.data.productCategoryName);
      });
  };

  const updateStudent = () => {
    if (name) {
      axios.patch(Endpoints.CATEGORIES+"/"+param.categoryId,{
        productCategoryImage: "",
        parentProductCategoryId: "",
        productCategoryName: name,
      })
        .then(() => {
          nav(RouteConstants.LIST_CATEGORY);
          setTimeout(()=> {
            toast.success("Updated Successfully!");
          },500)
        }).catch((err) => {
          toast.error("Something went wrong!");
        });
    } else {
      alert("please fill and submit");
    }
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="card my-4">
              <div className="card-body">
                <h3 className="text-left">
                  {" "}
                  <i
                    onClick={goToList}
                    className="bi bi-arrow-left-square me-3 c-pointer h3"
                  ></i>
                  Update
                </h3>
                <form>
                  <div className="mb-3">
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
                    onClick={updateStudent}
                    type="button"
                    className="btn btn-primary"
                  >
                    Update
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
