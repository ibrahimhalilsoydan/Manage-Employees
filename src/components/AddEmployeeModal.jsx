import React from "react";

function AddEmployeeModal({isOpen,onCloseAddModal}) {
   if(!isOpen) return null;
  return (
    <>
      <div id="addEmployeeModal" className="modal fade show">
        <div className="modal-dialog">
          <div className="modal-content">
            <form>
              <div className="modal-header">
                <h4 className="modal-title">Add Employee</h4>
                <button
                onClick={onCloseAddModal}
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-hidden="true"
                >
                  &times;
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="modal-backgrop fade show"></div>
    </>
  );
}

export default AddEmployeeModal;
