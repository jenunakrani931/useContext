import { useContext } from "react";
import { BsFillPlusSquareFill } from "react-icons/bs";
import { Button, Modal } from "react-bootstrap";
import { ContextData } from "../Store/ContextData";
import { Formik } from "formik";
import * as Yup from "yup";
const SignupSchema = Yup.object().shape({
  category: Yup.string().required("Name Required"),
});
export default function AddCategory() {
  const {
    addCate,
    showcategory,
    handleShowcategory,
    handleClosecategory,
    category,
  } = useContext(ContextData);
  // const handleFormSubmit = async (values) => {
  //   const isDuplicate = await checkDuplicateCategory(values.category);
  //   if (isDuplicate) {
  //     setError("Category already exists.");
  //   } else {
  //     addCate(values);
  //     handleClosecategory();
  //   }
  // };
  // const checkDuplicateCategory = async (category) => {
  //   const existingCategories = ["Tv", "Actor", "Film", "Comedy", "NetFlix","Movies","Sports Commentators","Disney","Drama","HBO","BBC"];
  //   return existingCategories.includes(category);
  // };
  return (
    <>
      <Button variant="warning" onClick={handleShowcategory}>
        <BsFillPlusSquareFill />
      </Button>
      <Modal show={showcategory} onHide={handleClosecategory}>
        <Modal.Header closeButton className="bg-dark text-light boder-white">
          <Modal.Title>
            <h1>Category</h1>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="bg-dark text-light">
          <Formik
            initialValues={{
              category: "",
            }}
            enableReinitialize
            validationSchema={SignupSchema}
            onSubmit={(values) => {
              if (category.includes(values.category)) {
                alert("exists!");
              } else {
                addCate(values.category);
                alert("added ");
              }
              handleClosecategory()
            }}
          >
            {({ errors, touched, handleChange, handleBlur, handleSubmit }) => (
              <form onSubmit={handleSubmit}>
                <label htmlFor="category">Add Category</label>
                <input
                  name="category"
                  type="text"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  className={`form-control btn border ${
                    errors.category ? "is-invalid" : ""
                  }`}
                />
                {errors.category && touched.category && (
                  <p className="text-danger">{errors.category}</p>
                )}
                <Modal.Footer className="mt-3">
                  <Button
                    variant="secondary"
                    type="button"
                    onClick={handleClosecategory}
                  >
                    Close
                  </Button>
                  <Button
                    variant="primary"
                    type="submit"
                    className="bg-warning text-dark border-0 p-2"
                  >
                    Add Category
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
