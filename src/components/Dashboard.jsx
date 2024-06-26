// src/components/Dashboard.js
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  background: #fff;
  color: #333;
  min-height: 100vh;
`;

const Table = styled.table`
  width: 80%;
  border-collapse: collapse;
  margin: 20px 0;

  th, td {
    padding: 10px;
    border: 1px solid #ddd;
    text-align: left;
  }

  th {
    background: #333;
    color: #fff;
  }
`;

const Dashboard = () => {
  const [submissions, setSubmissions] = useState([]);

  useEffect(() => {
    
    const fetchData = async () => {
      const data = [
        { id: 1, name: 'John Doe', email: 'john@example.com', message: 'Hello!' },
        { id: 2, name: 'Jane Doe', email: 'jane@example.com', message: 'Hi!' },
      ];
      setSubmissions(data);
    };
    fetchData();
  }, []);

  return (
    <Container>
      <h1>Admin Dashboard</h1>
      <Table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Message</th>
          </tr>
        </thead>
        <tbody>
          {submissions.map(submission => (
            <tr key={submission.id}>
              <td>{submission.id}</td>
              <td>{submission.name}</td>
              <td>{submission.email}</td>
              <td>{submission.message}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default Dashboard;
