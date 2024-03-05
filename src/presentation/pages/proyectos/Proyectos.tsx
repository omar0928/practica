import { useMemo } from "react";
import { useTable } from "react-table";
import { useNavigate } from "react-router-dom";

export const Proyectos = () => {
  const history = useNavigate();

  const projects = [
    {
      id: 1,
      name: "Proyecto 1",
      description: "Descripción del Proyecto 1",
      status: "En curso",
      tasks: [
        {
          id: "1",
          name: "tarea 1",
          descripcion: "decricion tarea 1",
          status: "status tarea 1",
          colaborador: "colaboradorb tarea 1",
        },
        {
          id: "2",
          name: "tarea 2",
          descripcion: "decricion tarea 2",
          status: "status tarea 2",
          colaborador: "colaboradorb tarea 2",
        },
      ],
    },
    {
      id: 2,
      name: "Proyecto 2",
      description: "Descripción del Proyecto 2",
      status: "Completado",
      tasks: [
        {
          id: "1",
          name: "tarea 1",
          descripcion: "decricion tarea 1",
          status: "status tarea 1",
          colaborador: "colaboradorb tarea 1",
        },
        {
          id: "2",
          name: "tarea 2",
          descripcion: "decricion tarea 2",
          status: "status tarea 2",
          colaborador: "colaboradorb tarea 2",
        },
      ],
    },
  ];

  const columns = useMemo(
    () => [
      {
        Header: "ID",
        accessor: "id",
      },
      {
        Header: "Nombre",
        accessor: "name",
      },

      {
        Header: "Estado",
        accessor: "status",
      },
      {
        Header: "Acciones",
        accessor: "actions",
        Cell: ({ row }) => (
          <>
            <button onClick={() => handleDetails(row.original)}>Detalle</button>
          </>
        ),
      },
    ],
    []
  );

  const handleDetails = (project) => {
    history(`/details/${project.id}`);
  };

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data: projects });

  return (
    <>
      <table
        {...getTableProps()}
        style={{ border: "solid 1px blue", width: "100%" }}
      >
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th
                  {...column.getHeaderProps()}
                  style={{
                    padding: "10px",
                    background: "#1A1A1A",
                    border: "2px solid white",
                    borderRadius: "30px",
                  }}
                >
                  {column.render("Header")}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td
                      {...cell.getCellProps()}
                      style={{
                        padding: "10px",
                        background: "#1A1A1A",
                        border: "2px solid white",
                        borderRadius: "30px",
                      }}
                    >
                      {cell.render("Cell")}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};
