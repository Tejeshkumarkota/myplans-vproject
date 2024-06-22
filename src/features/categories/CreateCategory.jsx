import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Endpoints } from "../../shared/constants/Endpoints";

export default function CreateCategory() {
  const [name, setName] = useState("");
  const nav = useNavigate();

  const goToList = () => {
    nav("/list");
  };

  const createStudent = () => {
    if (name) {
      fetch(Endpoints.CATEGORIES, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          // Authorization: "Bearer 17|t10FEKvdmXCQjnoVfTUkUxw88bxlNNyqdMOTwZfq43663377"
        },
        body: JSON.stringify({
          productCategoryImage: "",
          parentProductCategoryId: "",
          productCategoryName: name,
        }),
      })
        .then((res) => res.json())
        .then(() => {
          alert("Added successfully");
          nav("/list");
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
    </>
  );
}
