"use client";

import { useState } from "react";
import { Table, Button, Collapse } from "react-bootstrap";

interface Threat {
  threatID: number;
  description?: string;
  regionName: string;
  trustLevel?: number;
  status?: string;
  createdAt?: Date;
}

interface RequestsTableProps {
  threats: Threat[];
  refreshData: () => void;
}

export default function RequestsTable({ threats, refreshData }: RequestsTableProps) {
  const [updatingId, setUpdatingId] = useState<number | null>(null);
  const [hiddenButtons, setHiddenButtons] = useState<{ [key: number]: boolean }>({});

  const handleStatusUpdate = async (id: number, newStatus: string) => {
    setHiddenButtons((prev) => ({ ...prev, [id]: true })); // Trigger animation

    setTimeout(async () => {
      setUpdatingId(id);
      try {
        const token = localStorage.getItem("authToken");
        const response = await fetch(`https://localhost:7261/api/Threats/${id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            ...threats.find((t) => t.threatID === id),
            status: newStatus,
          }),
        });

        if (!response.ok) throw new Error("Update failed");
        refreshData();
      } catch (error) {
        console.error("Error updating status:", error);
      } finally {
        setUpdatingId(null);
      }
    }, 500); // Allow animation before updating state
  };

  // Sort threats: "Pending" first, then "Confirmed", then "Resolved"
  const sortedThreats = [...threats].sort((a, b) => {
    const order = { Pending: 1, Confirmed: 2, Resolved: 3 };
    return order[a.status || "Resolved"] - order[b.status || "Resolved"];
  });

  return (
    <div className="overflow-x-auto">
      <Table striped bordered hover className="table-modern">
        <thead>
          <tr>
            <th>ID</th>
            <th>Region</th>
            <th>Description</th>
            <th>Status</th>
            <th className="text-center" style={{ width: "200px" }}>Action</th>
          </tr>
        </thead>
        <tbody>
          {sortedThreats.map((threat) => (
            <tr key={threat.threatID}>
              <td>{threat.threatID}</td>
              <td>{threat.regionName}</td>
              <td>{threat.description}</td>
              <td>{threat.status}</td>
              <td className="text-center" style={{ width: "200px" }}>
                <Collapse in={!hiddenButtons[threat.threatID]} dimension="width">
                  <div className="d-flex gap-2 justify-content-center align-items-center" style={{ width: "100%" }}>
                    {threat.status === "Pending" && (
                      <>
                        <Button
                          variant="success"
                          size="sm"
                          onClick={() => handleStatusUpdate(threat.threatID, "Confirmed")}
                          disabled={updatingId === threat.threatID}
                          style={{ flex: 1 }}
                        >
                          Confirm
                        </Button>
                        <Button
                          variant="danger"
                          size="sm"
                          onClick={() => handleStatusUpdate(threat.threatID, "Resolved")}
                          disabled={updatingId === threat.threatID}
                          style={{ flex: 1 }}
                        >
                          Resolve
                        </Button>
                      </>
                    )}
                  </div>
                </Collapse>
                {!threat.status || threat.status !== "Pending" ? <div style={{ height: "32px" }} /> : null}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}