import { Table } from "../components/Table";
import { InstructorLayout } from "../layouts/InstructorLayout";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getAllExamResults} from "../redux/examResultsSlice";
import {RootState} from "../store/store";
import {IExamResult} from "../models/userModel";
import {downloadExamResults} from "../services/examResultService";
export const ExamResults = () => {
    const  dispatch = useDispatch();
    const { results } = useSelector((state: RootState) => state.examResults);


    useEffect(() => {
            dispatch(getAllExamResults())
        },
        [])
    const handleDownloadExam = (fileUrl: string) => {
        downloadExamResults(fileUrl);
    };

  return (
    <InstructorLayout title="Exams Board">
        <Table<IExamResult>
            columns={["ID" ,"Name", "Lastname", "Email","Actions"]}
            data={results.map((result) => ({
                id:result?.id,
                name: result?.user?.name,
                lastname: result?.user?.lastname,
                email: result?.user?.email,
            }))}
            additionalData={results.map((result) => ({fileUrl: result?.fileUrl}))}
            actions={['delete', "download"]}
            onDownload={handleDownloadExam}
        ></Table>
    </InstructorLayout>
  );
};
