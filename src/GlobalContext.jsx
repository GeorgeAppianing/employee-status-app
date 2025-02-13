import { useContext, createContext, useState, useEffect } from "react";

const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const URL = "http://localhost:8000/employees";
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 6;

  function PrevPage() {
    setCurrentPage(currentPage - 1);
  }
  function NextPage() {
    setCurrentPage(currentPage + 1);
  }
  const totalNumberOfPages = Math.ceil(data.length / rowsPerPage);
  console.log(totalNumberOfPages);

  const displayRows = data.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(URL);
        const req = await res.json();
        setData(req);
        console.log(req);
      } catch (error) {
        console.log(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const displayActiveEmployees = data.filter(
    (employee) => employee.status === "active"
  );
  const displayAllEmployees = data.filter((employee) => employee.status.length);

  const displayEmployeesOnLeave = data.filter(
    (employee) => employee.status === "on leave"
  );
  const displayInactiveEmployees = data.filter(
    (employee) => employee.status === "inactive"
  );

  function handleDelete(id) {
    const newData = data.filter((employee) => employee.id !== id);
    setData(newData);
  }
  return (
    <GlobalContext.Provider
      value={{
        displayActiveEmployees,
        displayAllEmployees,
        displayEmployeesOnLeave,
        displayInactiveEmployees,
        data,
        setData,
        loading,
        currentPage,
        setCurrentPage,
        totalNumberOfPages,
        rowsPerPage,
        displayRows,
        NextPage,
        PrevPage,
        handleDelete,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);

export { GlobalContext };
