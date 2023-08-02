import { useContext } from "react";
import { Button, Modal } from "react-bootstrap";
import { ContextData } from "../Store/ContextData";
import { Formik } from "formik";
import * as Yup from "yup";
const SignupSchema = Yup.object().shape({
  name: Yup.string().required("Name Required"),
  category: Yup.string().required("category Required"),
  price: Yup.number().required("pls enter price Required"),
  image:Yup.string().required("enter image path")
});
export default function AddActor() {
  const { addData, category, show, handleClose, handleShow } =
    useContext(ContextData);
  return (
    <>
      <Button variant="warning" onClick={handleShow}>
        Add Data
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton className="bg-dark text-light boder-white">
          <Modal.Title>
            <h1>Data</h1>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="bg-dark text-light boder-white">
          <Formik
            initialValues={{
              name: "",
              category: "",
              price: "",
              image: null,
            }}
            enableReinitialize
            validationSchema={SignupSchema}
            onSubmit={(values) => {
              console.log(values);
              addData(values);
              handleClose()
            }}
          >
            {({
              errors,
              touched,
              values,
              handleChange,
              handleBlur,
              handleSubmit,
            }) => (
              <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name</label>
                <input
                  name="name"
                  type="text"
                  value={values.name}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  className={`form-control btn border ${
                    errors.name ? "is-invalid" : ""
                  }`}
                />
                {errors.name && touched.name && (
                  <p id="error-=message" className="text-danger">
                    {errors.name}
                  </p>
                )}
                <br />
                <select
                  name="category"
                  value={values.category}
                  onChange={handleChange}
                  className="p-2 btn border text-light mt-4"
                  onBlur={handleBlur}
                  style={{ display: "block" }}
                >
                  <option value="" label="Select a category">
                    Select a category
                  </option>
                  {category.map((ele, index) => {
                    return (
                      <option
                        value={ele}
                        label={ele}
                        key={index}
                        className="text-light bg-dark" 
                      >
                        {ele}
                      </option>
                    );
                  })}
                </select>
                {errors.category && touched.category && (
                  <p className="text-danger">
                    {errors.category}
                  </p>
                )}
                <label htmlFor="price" className="mt-3">
                  price
                </label>
                <input
                  name="price"
                  type="number"
                  value={values.price}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  className={`form-control btn border text-light  ${errors.price}`}
                />
                {errors.price && touched.price && (
                  <p id="error-=message" className="text-danger">
                    {errors.price}
                  </p>
                )}
                <br />
                {errors.status && touched.status && (
                  <p id="error-=message" className="text-danger">
                    {errors.status}
                  </p>
                )}
                <br />
                <label htmlFor="image">image</label>
                <br />
                <input
                  type="text"
                  id="image"
                  name="image"
                  className="btn border"
                  onChange={handleChange}
                />
                {errors.image && touched.image && (
                  <p id="error-=message" className="text-danger">
                    {errors.image}
                  </p>
                )}
                <br />
                <Modal.Footer>
                  <Button
                    variant="secondary"
                    type="button"
                    onClick={handleClose}
                  >
                    Close
                  </Button>
                  <Button
                    variant="primary"
                    type="submit"
                    className="bg-danger border-0 p-2"
                  >
                    Add Data
                  </Button>
                </Modal.Footer>
              </form>
            )}
          </Formik>
        </Modal.Body>
      </Modal>
    </>
  );
}
