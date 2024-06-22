import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { Endpoints } from "../../shared/constants/Endpoints";

export default function ListCategory() {
  const [listData, setListData] = useState();
  const [loading, setLoading] = useState(true);
  const nav = useNavigate();

  const getListData = () => {
    fetch(Endpoints.CATEGORIES
    )
    .then((res) => res.json())
    .then((data) => {
      setListData(data.data);
      // console.log(data.data);
      setLoading(false);
    })
    .catch((error) => {
      console.error('Error:', error);
      setLoading(false);
    });
  }

  useEffect(() => {
    getListData();
  }, []);
  

  const deleteStudent = (id) => {
    const confirmation = window.confirm("Are you sure you want to delete this item?");
    if(confirmation) {
      fetch("https://trainingsapi.localinfoz.com/api/product-categories/"+id,{
        method: "DELETE",
      })
      .then((res) => res.json())
      .then(() => {
        getListData();
      }).catch((err) => {
        console.log(err);
      });
    }
  }

  return (
    <>
      <div className="container mt-5">
        <div className="row">
          <div className="col-12">
            <div className="row align-items-center">
              <div className="col-md-6">
                <h3 className="mb-4">Categories</h3>
              </div>
              <div className="col-md-6 text-end">
                <button type="button" onClick={()=>nav('/create')} className="btn btn-sm btn-primary">
                  Add New
                </button>
              </div>
            </div>
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Product Category Name</th>
                  <th>Product Category Image</th>
                  <th>Product Category Image URL</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
              {loading ? (
                  <tr>
                    <td className="text-center" colSpan="100%">Loading...</td>
                  </tr>
                ) : (
                  <>
                    {listData && listData.map((s) => (
                      <tr key={s.id}>
                        <td>{s.id}</td>
                        <td>{s.productCategoryName?s.productCategoryName:"N/A"}</td>
                        <td>{s.productCategoryImage?s.productCategoryImage: "N/A"}</td>
                        <td>{s.productCategoryImageUrl?s.productCategoryImageUrl:"N/A"}</td>
                        <td>
                          <button type="button" onClick={()=>nav('/edit/'+s.id)} className="btn btn-sm btn-light">Edit</button>
                          <button type="button" className="btn btn-sm btn-primary mx-2">View</button>
                          <button type="button" onClick={()=>deleteStudent(s.id)} className="btn btn-sm btn-danger">Delete</button>
                        </td>
                      </tr>
                    ))}
                  </>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
