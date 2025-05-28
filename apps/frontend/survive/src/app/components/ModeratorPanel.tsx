import React from "react";

const ModeratorPanel = () => {
  const users = [
    { id: 1, name: "Użytkownik 1", status: "Active" },
    { id: 2, name: "Użytkownik 2", status: "Blocked" },
  ];
  const reports = [
    { id: 1, description: "Zgłoszenie 1", status: "Pending" },
    { id: 2, description: "Zgłoszenie 2", status: "Resolved" },
  ];

  const blockUser = (id: number) => {
    console.log(`Blokowanie użytkownika ${id}`);
    // Tutaj wywołaj backend API
  };

  const removeReport = (id: number) => {
    console.log(`Usuwanie zgłoszenia ${id}`);
    // Tutaj wywołaj backend API
  };

  return (
    <div>
      <h2>Panel moderatora</h2>
      <h3>Lista użytkowników:</h3>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} - {user.status}
            <button onClick={() => blockUser(user.id)}>Blokuj</button>
          </li>
        ))}
      </ul>
      <h3>Lista zgłoszeń:</h3>
      <ul>
        {reports.map((report) => (
          <li key={report.id}>
            {report.description} - {report.status}
            <button onClick={() => removeReport(report.id)}>Usuń</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ModeratorPanel;
