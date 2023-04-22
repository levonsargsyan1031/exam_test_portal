let express = require("express");
const { 
  uploadExamResults,
  downloadExamResults,
  getExamResults,
  getExamResultById,
  addExamResult,
  updateExamResult,
  deleteExamResult
} = require("../../controllers/examResults/examResults");

let router = express.Router();

router.get("/", getExamResults);
router.get("/:id", getExamResultById);
router.post("/", addExamResult);
router.put("/", updateExamResult);
router.delete("/:id", deleteExamResult)
router.post("/uploadExamResults", uploadExamResults);
router.post("/download", downloadExamResults);

module.exports = router;